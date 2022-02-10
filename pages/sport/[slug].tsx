/** @format */

import { useRouter } from "next/router";
import { API_MONGOOSE_URL } from "utils";
import { ALL_ARTICLE_ENTRIES } from "constants/articleEntries";
import Image from "next/image";
import { Box, Card, Stack, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Head from "next/head";
import { SingleArticlePage } from "@/comps/common/SingleArticlePage";
import { SportContainer } from "@/comps/common/SportContainer";

export default function SingleSport({ single }) {
	return (
		<>
			<Head>
				<title>{single.title}</title>
			</Head>
			<SportContainer>
				<SingleArticlePage single={single}></SingleArticlePage>
			</SportContainer>
		</>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`${API_MONGOOSE_URL}/articles`);
	const articles = await res.json();
	//const articles = ALL_ARTICLE_ENTRIES;
	const sportNews = articles.filter((item) => item.category === "sport");
	const paths = sportNews.map((item) => ({
		params: { slug: item.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	const res = await fetch(`${API_MONGOOSE_URL}/articles/${slug}`);
	const singleNews = await res.json();
	return {
		props: {
			single: singleNews,
		},
	};
}

SingleSport.propTypes = {
	item: PropTypes.any,
	news: PropTypes.arrayOf(PropTypes.string),
	scienceNews: PropTypes.arrayOf(PropTypes.string),
	sportNews: PropTypes.arrayOf(PropTypes.string),
	articles: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string,
	category: PropTypes.string,
	children: PropTypes.string,
};
