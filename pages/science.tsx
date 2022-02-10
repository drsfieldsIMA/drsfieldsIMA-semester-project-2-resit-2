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

export default function SciencePage({ news }) {
	const scienceNews = news.filter((item) => item.category === "science");
	//	console.log("science news==>", scienceNews);
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
				<Button component='a' startIcon={<ArrowBackIcon fontSize='small' />}>
					Home
				</Button>
				<h2>Science Page</h2>
			</div>

			<Grid container spacing={2} px={2} marginLeft={0}>
				{scienceNews.map((item, index): any => (
					<Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={4}>
						<Link key={item.id} href={`/science/${item.slug}`}>
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

SciencePage.propTypes = {
	item: PropTypes.any,
	news: PropTypes.array,
	title: PropTypes.string,
	category: PropTypes.string,
};
