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

export default function Science({ news }) {
	const scienceNews = news.filter(
		(item) => item.section_category === "science"
	);
	console.log("science news==>", scienceNews);
	return (
		<>
			<Head>
				<title>Science News</title>
				<meta name='description' content='Welcome to the Science news"'></meta>
			</Head>

			<Hero
				title='Here is your science news'
				imageSrc='/images/science_hero.png'
				classString='hero_banner'
			/>

			<div>
				<Link href='/'>
					<a>Back to Home</a>
				</Link>
				<h2>Science Page</h2>
			</div>

			<Grid container spacing={2} px={2} marginLeft={0}>
				{scienceNews.map((item): any => (
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
	//const res = await fetch(`${API_URL}/api/news`);
	const res = await fetch(`${API_MONGOOSE_URL}/articles`);

	const articles: Array<string> = await res.json();
	const news: Array<string> = articles;
	return {
		props: { news },
	};
}

Science.propTypes = {
	item: PropTypes.any,
	news: PropTypes.array,
	title: PropTypes.string,
	section_category: PropTypes.string,
};
