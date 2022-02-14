/** @format */

import React from "react";
import Head from "next/head";
import { Grid } from "@mui/material";
import Link from "next/link";
import NewsCard from "../comps/common/NewsCard";
import API_URL, { API_HEROKU_URL } from "../utils/env";
import Hero from "../comps/common/Hero";
import { ALL_ARTICLE_ENTRIES } from "constants/articleEntries";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardList from "@/comps/common/lists/CardList";
import NextLink from "next/link";

export default function SciencePage({ news }) {
	const scienceNews = news.filter((item) => item.category === "science");
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
				<NextLink href='/' passHref={false}>
					<Button
						style={{ display: "inline-flex", marginRight: "28px" }}
						component='a'
						startIcon={<ArrowBackIcon fontSize='small' />}>
						Home
					</Button>
				</NextLink>
				<h2 style={{ display: "inline-flex" }}>Science</h2>
			</div>

			<CardList News={scienceNews}></CardList>
			<Button>Load More </Button>
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

SciencePage.propTypes = {
	item: PropTypes.any,
	news: PropTypes.array,
	title: PropTypes.string,
	category: PropTypes.string,
};
