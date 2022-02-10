/** @format */

import PropTypes from "prop-types";
import { Heading } from "../../comps/Layout";
import Link from "next/link";
import { useState, useContext, ReactElement } from "react";
import { AuthContext, useAuth } from "../../comps/config/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import API_URL, { API_MONGOOSE_URL } from "../../utils/index";
import { HeadingDefaults } from "utils/typeLibrary";
import useLocalStorage from "comps/config/useLocalStorage";
import NextLink from "next/link";
import { Button } from "@mui/material";
import { AddBox, HistoryEdu, LoginTwoTone } from "@mui/icons-material";

export default function AdminIndex({
	articles,
	HeadingDefaults,
}: any): ReactElement {
	let auth = useAuth();
	let adminName: string = "";
	if (typeof auth !== "undefined") {
		let adminName = auth[0]?.user?.username;
	}

	const firstAuthorAssets = articles.filter(
		(article) =>
			article?.author?.toLowerCase().includes(adminName?.toLowerCase()) ||
			article?.author
				?.toLowerCase()
				.includes(auth?.user?.username?.toLowerCase())
	);

	return (
		<>
			<Heading
				size='1'
				content={`${adminName} Admin Page`}
				color={HeadingDefaults.color}
			/>

			<nav className='dashboard'>
				<Heading size='1' content='Add New' color={HeadingDefaults.color} />
				<NextLink href='/admin/articles/add' passHref>
					<Button component='a' startIcon={<AddBox fontSize='small' />}>
						Add New Article
					</Button>
				</NextLink>
			</nav>
			<Heading size='2' content='Edit Articles' color={HeadingDefaults.color} />
			<div>
				<ul className='whiteText'>
					{firstAuthorAssets &&
						firstAuthorAssets.map((item: any, index: string) => (
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
						))}
				</ul>
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const res = await fetch(`${API_MONGOOSE_URL}/articles`);
	const articles: any = await res.json();
	return {
		props: { articles, HeadingDefaults }, // will be passed to the page component as props
	};
}

AdminIndex.propTypes = {
	children: PropTypes.node,
	articles: PropTypes.any,
	news: PropTypes.node,
	HeadingDefaults: PropTypes.any,
};
