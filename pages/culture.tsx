/** @format */

import React from "react";
import Head from "next/head";
import { Grid } from "@mui/material";
import Link from "next/link";
import NewsCard from "../comps/common/NewsCard";
import API_URL, { API_MONGOOSE_URL } from "../utils/index";
import Hero from "../comps/common/Hero";
import { ALL_ARTICLE_ENTRIES } from "constants/articleEntries";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CulturePage({ news }) {
	const cultureNews = news.filter(
		(item) => item.category === "culture" || item.category === "nature"
	);

	return (
		<>
			<Head>
				<title>Culture News</title>
				<meta name='description' content='Welcome to the Science news"'></meta>
			</Head>

			<Hero
				title='Here is your science news'
				imageSrc='/waterfall.jpg'
				classString='hero_banner'
			/>

			<div>
				<Button component='a' startIcon={<ArrowBackIcon fontSize='small' />}>
					Home
				</Button>
				<h2>Culture & Nature Page</h2>
			</div>

			<Grid container spacing={2} px={2} marginLeft={0}>
				{cultureNews.map((item): any => (
					<Grid item xs={6} key={item.id}>
						<Link key={item.id} href={`/sport/${item.slug}`}>
							<a>
								<NewsCard key={item.id} article={item} />
							</a>
						</Link>
					</Grid>
				))}
			</Grid>
			<Button>Load More </Button>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_MONGOOSE_URL}/articles`);

	const articles: Array<string> = await res.json();
	const news: Array<string> = articles;
	return {
		props: { news },
	};
}

CulturePage.propTypes = {
	item: PropTypes.any,
	news: PropTypes.array,
	title: PropTypes.string,
	category: PropTypes.string,
};
