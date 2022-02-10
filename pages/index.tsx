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
import API_URL, { API_MONGOOSE_URL } from "../utils/index";
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

type NewsParams = {
	id: string;
	title: string;
	content: string;
	category: string;
	author: string;
	image: Array<string>;
	createdAt: Array<string>;
};

const Home: NextPage = ({ news }: any) => {
	const sportNews = news.filter((item) => item.category === "sport");
	const scienceNews = news.filter((item) => item.category === "science");
	const cultureNews = news.filter(
		(item) => item.category === "culture" || item.category === "nature"
	);
	const [toggleSport, setToggleSport] = useState<boolean>(false);

	const toggleSportArticles = () => {
		setToggleSport(!toggleSport);
	};
	// sort by date
	scienceNews.sort(function (
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

	const headNews: Array<any | void> | Object = sportNews.slice(
		4,
		sportNews.length
	);

	const target = React.createRef();

	return (
		<ThemeProvider theme={theme}>
			<main>
				<section className='index-headlines'>
					<PublicIcon />
					<Heading content='Breaking News' size='1' color='#33069e'></Heading>
					<CardList News={scienceNews}></CardList>
				</section>

				<section className='index-sport'>
					<div className='heading-block'>
						<h2>Sport News</h2>
					</div>
					<CardList News={sportNews}></CardList>
					<button className='lun__btn-primary' onClick={toggleSportArticles}>
						More Articles
					</button>
					{toggleSport &&
						sportNews
							.slice(5, sportNews.length)
							.map((item: Array<any> | any, index: string) => (
								<button key={item.id} className='lun__btn-primary'>
									{item.title}
								</button>
							))}
				</section>

				<section id='culture and musical' className='index-culture'>
					<div className='heading-block'>
						<h3>Cultural and Musical Highlights</h3>
					</div>
					<CardList News={cultureNews}></CardList>
				</section>

				<section className='index-nature'>
					<h3>Nature and gardening news</h3>
				</section>
			</main>
			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer>
		</ThemeProvider>
	);
};

export async function getStaticProps() {
	const res = await fetch(`${API_MONGOOSE_URL}/articles`);
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
