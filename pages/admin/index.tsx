/** @format */
import * as React from "react";
import PropTypes from "prop-types";
import { Heading } from "../../comps/Layout";
import Link from "next/link";
import { useState, useContext, ReactElement } from "react";
import { AuthContext, useAuth } from "../../comps/config/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import API_URL, { API_HEROKU_URL } from "../../utils/env";
import { HeadingDefaults, HeadingAdmin } from "utils/typeLibrary";
import useLocalStorage from "comps/config/useLocalStorage";
import NextLink from "next/link";
import { Button, Grid, ListItem } from "@mui/material";
import { AddBox, HistoryEdu, LoginTwoTone } from "@mui/icons-material";
import DeletePostButton from "./articles/edit/DeletePostButton";
import { parse } from "path/posix";

const AuthorsAssets = ({ articles, auth }: { articles: any; auth: any }) => {
	return articles
		.filter((article) =>
			article?.author
				?.toLowerCase()
				.includes(auth?.user?.username.toLowerCase())
		)
		.map((item: any, index: any) => (
			<>
				<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
					<NextLink
						key={item.id}
						href={`/admin/articles/edit/${item.slug}`}
						passHref>
						<Button
							key={item.slug}
							className='single-asset'
							component='a'
							startIcon={<HistoryEdu fontSize='small' />}>
							Edit: {item.title}
						</Button>
					</NextLink>
				</Grid>
				<Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
					<DeletePostButton articleID={item.id} />
				</Grid>
			</>
		));
};

const renderCurrentAuthorAssets = (articles, auth) => {
	return <AuthorsAssets articles={articles} auth={auth}></AuthorsAssets>;
};

export default function AdminIndex({ articles }: any): ReactElement {
	//const [auth, setAuth] = useContext(AuthContext);
	let oldAuth: String | any = localStorage.getItem("auth");
	let auth = JSON.parse(oldAuth);
	const [adminName, setAdminName] = React.useState(false);

	return (
		<>
			<Grid container spacing={2} px={2} marginLeft={0}>
				<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
					{adminName ? (
						<Heading
							size='1'
							content={`${auth?.user?.username} Dashboard`}
							color={HeadingAdmin.color}
						/>
					) : (
						<Heading
							size='1'
							content={`Over View Page`}
							color={HeadingDefaults.color}
						/>
					)}
					<nav className='dashboard'>
						<Heading size='1' content='Add New' color={HeadingDefaults.color} />
						<NextLink href='/admin/articles/add' passHref>
							<Button
								component='a'
								startIcon={
									<AddBox className='admin-add__icon' fontSize='large' />
								}
								className='admin-add__text'>
								Add New Article
							</Button>
						</NextLink>
					</nav>
				</Grid>
				<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
					<Heading
						size='2'
						content='Edit Articles'
						color={HeadingDefaults.color}
					/>
					<div>
						<ul className='whiteText'>
							<Button
								className='lun-primary__btn'
								onClick={() => setAdminName(true)}>
								{" "}
								Load Articles
							</Button>
							<Grid container spacing={2} px={2} marginLeft={0}>
								{adminName ? renderCurrentAuthorAssets(articles, auth) : null}
							</Grid>
						</ul>
					</div>
				</Grid>
			</Grid>
		</>
	);
}

export async function getServerSideProps() {
	const res = await fetch(`${API_HEROKU_URL}/articles`);
	const articles: any = await res.json();
	return {
		props: { articles }, // will be passed to the page component as props
	};
}

AdminIndex.propTypes = {
	children: PropTypes.node,
	articles: PropTypes.any,
	news: PropTypes.node,
	HeadingDefaults: PropTypes.any,
};
