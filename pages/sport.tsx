/** @format */

import React from "react";
import Head from "next/head";
import { Grid } from "@mui/material";
import Link from "next/link";
import NewsCard from "comps/common/NewsCard";
import API_URL, { API_HEROKU_URL } from "../utils/env";
import Hero from "../comps/common/Hero";
import PropTypes from "prop-types";
import { ALL_ARTICLE_ENTRIES } from "constants/articleEntries";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NextLink from "next/link";
import Button from "@mui/material/Button";

export default function SportPage({ news }: any) {
	return (
		<>
			<Head>
				<title>Sport News App</title>
				<meta name='description' content='Welcome to the sports news"'></meta>
			</Head>

			<Hero
				title='Here is your sport news'
				imageSrc='/images/hero.jpg'
				classString='hero_banner'
				desc=''
				bgColor='#bfa65a'
			/>

			<div>
				<h2 style={{ display: "inline-flex" }}>Science Page</h2>
			</div>

			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				{news.map((item, index): any => {
					return "sport" === item.category ? (
						<Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={4}>
							<Link href={`/sport/${item.slug}`}>
								<a>
									<NewsCard article={item} />
								</a>
							</Link>
						</Grid>
					) : null;
				})}
			</Grid>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_HEROKU_URL}/articles`);
	const articles: Array<string> = await res.json();
	const news: Array<string> = articles;
	return {
		props: { news },
	};
}

SportPage.propTypes = {
	item: PropTypes.any,
	news: PropTypes.array,
	title: PropTypes.string,
};
