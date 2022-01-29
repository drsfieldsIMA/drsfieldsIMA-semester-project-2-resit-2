/** @format */

import React from "react";
import Head from "next/head";
import { Grid } from "@mui/material";
import Link from "next/link";
import NewsCard from "../comps/common/NewsCard";
import API_URL, { API_MONGOOSE_URL } from "../utils/index";
import Hero from "../comps/common/Hero";
import { ALL_ARTICLE_ENTRIES } from "constants/articleEntries";

export default function Science({ news }) {
	const scienceNews = news.filter((item) => item.category?.name === "science");
	console.log("science news==>", scienceNews);
	return (
		<>
			<Head>
				<title>ScienceNews App</title>
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
					<Grid key={item.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
						<Link key={item.id} href={`/sport/${item.slug}`}>
							<a>
								<NewsCard key={item.id} article={item} />
							</a>
						</Link>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export async function getStaticProps() {
	//const  res=await fetch(`${API_URL}/api/news`);
	// const res = await fetch(`${API_MONGOOSE_URL}/articles`);
	// const news = await res.json();
	const articles = ALL_ARTICLE_ENTRIES;
	const news = articles.filter((item) => item.category === "science");
	return {
		props: { news },
	};
}
