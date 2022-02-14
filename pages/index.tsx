/** @format */
import React from "react";
import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Layout from "../comps/Layout";
import NewsCard from "../comps/common/NewsCard";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import API_URL, { API_HEROKU_URL } from "../utils/env";
import { useQuery } from "react-query";
import theme from "../theme/theme";
import { ThemeProvider } from "@material-ui/core";
import { AnyObject } from "yup/lib/object";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { Console } from "console";
import { Heading } from "../comps/Layout";
import ArticlesSearchResult from "../comps/ArticlesSearchResults";
import PublicIcon from "@material-ui/icons/Public";
import CardList from "../comps/common/lists/CardList";
import NextLink from "next/link";
import { Box, Card, Stack, Divider } from "@mui/material";

type NewsParams = {
	id: string;
	title: string;
	content: string;
	category: string;
	author: string;
	image: Array<string>;
	createdAt: Array<string>;
};

function useSort(newsArray) {
	const News = newsArray;
	News.sort(function (
		a: { createdAt: string | number | Date; length: number },
		b: { createdAt: string | number | Date; length: number }
	) {
		const keyA = new Date(a.createdAt),
			keyB = new Date(b.createdAt);

		// nulls sort before anything else
		if (a.length === 0 || b.length === 0) return -1;

		// Compare the 2 dates
		if (keyA < keyB) return 1; //returns key B
		if (keyA > keyB) return -1; // returns key A
		return 0;
	});
}

const Home: NextPage = ({ news }: any) => {
	/* split the articles according to category */
	let sportNews = news.filter((item) => item.category === "sport");
	let scienceNews = news.filter((item) => item.category === "science");
	let cultureNews = news.filter(
		(item) => item.category === "culture" || item.category === "nature"
	);
	let natureNews = news.filter((item) => item.category === "nature");

	const [toggleSport, setToggleSport] = useState<boolean>(false);
	const [toggleScience, setToggleScience] = useState<boolean>(false);

	/* toggle button to access more articles*/
	const toggleScienceArticles = () => {
		setToggleScience(!toggleScience);
	};

	const toggleSportArticles = () => {
		setToggleSport(!toggleSport);
	};

	/* re-order all news categories by createdAt date*/
	/* 	sportNews = useSort(sportNews);
	scienceNews = useSort(scienceNews);
	natureNews = useSort(natureNews);
	cultureNews = useSort(cultureNews); */

	return (
		<>
			<section className='index-headlines'>
				<Heading content='Breaking News' size='1' color='#33069e'></Heading>
				<PublicIcon />
				<CardList News={scienceNews}></CardList>
				<button className='lun-primary__btn' onClick={toggleScienceArticles}>
					More Articles
				</button>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{toggleScience &&
						scienceNews.map((item: Array<any> | any, index: string) => (
							<Grid key={index} item xs={6} sm={4} md={4} lg={3} xl={3}>
								<NextLink
									key={item.id}
									href={`${item?.category}/${item?.slug}`}
									passHref={false}>
									<Card>
										<Button key={index} className='single-asset' component='a'>
											{item.title}{" "}
										</Button>
									</Card>
								</NextLink>
							</Grid>
						))}
				</Grid>
			</section>

			<section className='index-sport'>
				<Heading size='2' content='Sport News'></Heading>
				<CardList News={sportNews}></CardList>
				<button className='lun-primary__btn' onClick={toggleSportArticles}>
					More Articles
				</button>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{toggleSport &&
						sportNews
							.slice(2, sportNews.length)
							.map((item: Array<any> | any, index: string) => (
								<Grid key={index} item xs={6} sm={4} md={4} lg={3} xl={3}>
									<NextLink
										key={item.id}
										href={`${item?.category}/${item?.slug}`}
										passHref={false}>
										<Card>
											<Button
												key={index}
												className='single-asset'
												component='a'>
												{item.title}{" "}
											</Button>
										</Card>
									</NextLink>
								</Grid>
							))}
				</Grid>
			</section>

			<section className='index-culture'>
				<Heading size='3' content='Cultural and Musical Highlights'></Heading>
				<CardList News={cultureNews}></CardList>
			</section>

			<section className='index-nature'>
				<Heading size='3' content='Nature and Gardening News'></Heading>
				<CardList News={natureNews}></CardList>
			</section>
		</>
	);
};

export async function getStaticProps() {
	const res = await fetch(`${API_HEROKU_URL}/articles`);
	const news: NewsParams = await res.json();
	return {
		props: { news },
	};
}

Home.propTypes = {
	item: PropTypes.any,
	news: PropTypes.arrayOf(PropTypes.object),
	scienceNews: PropTypes.arrayOf(PropTypes.string),
	sportNews: PropTypes.arrayOf(PropTypes.string),
	articles: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string,
	category: PropTypes.string,
	children: PropTypes.string,
};

export default Home;
