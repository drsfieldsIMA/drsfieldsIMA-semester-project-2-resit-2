/** @format */

import { useRouter } from "next/router";
import API_URL, { API_HEROKU_URL } from "../../utils/env";
import Link from "next/link";
import Image from "next/image";
import { Box, Card, Stack, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ALL_ARTICLE_ENTRIES } from "constants/articleEntries";
import dayjs from "dayjs";
import Head from "next/head";
import { SingleArticlePage } from "@/comps/common/SingleArticlePage";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../theme/theme";

export default function SingleCulture({ single }) {
	return (
		<>
			<Head>
				<title>{single?.title}</title>
				<meta
					name='description'
					content={single.descrip ? single.descrip : null}></meta>
			</Head>
			<SingleArticlePage single={single}></SingleArticlePage>
		</>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`${API_HEROKU_URL}/articles`);
	const articles = await res.json();
	//const articles = ALL_ARTICLE_ENTRIES;
	const cultureNews = articles.filter(
		(item) => item.category === "culture" || item.category === "nature"
	);
	const paths = cultureNews.map((item) => ({
		params: { slug: item.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	const res = await fetch(`${API_HEROKU_URL}/articles/${slug}`);
	const singleNews = await res.json();
	return {
		props: {
			single: singleNews,
		},
	};
}
