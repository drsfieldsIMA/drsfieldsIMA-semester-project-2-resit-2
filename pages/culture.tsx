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

export default function CulturePage({ news }) {
	const cultureNews = news.filter(
		(item) => item.category === "culture" || item.category === "nature"
	);

	return (
		<>
			<Head>
				<title>Culture News</title>
				<meta name='description' content='Welcome to the Culture news"'></meta>
			</Head>

			<Hero
				title='Here is your culture news'
				imageSrc='/waterfall.jpg'
				classString='hero_banner'
				bgColor='#04ceb4'
				desc='A picture of a waterfall'
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
				<h2 style={{ display: "inline-flex" }}>Culture & Nature Page</h2>
			</div>
			<CardList News={cultureNews}></CardList>
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

CulturePage.propTypes = {
	item: PropTypes.any,
	news: PropTypes.array,
	title: PropTypes.string,
	category: PropTypes.string,
};
