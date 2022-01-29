/** @format */

import { useRouter } from "next/router";
import API_URL, { API_MONGOOSE_URL } from "../../utils/index";
import Link from "next/link";
import Image from "next/image";
import { Box, Card, Stack, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ALL_ARTICLE_ENTRIES } from "constants/articleEntries";

export default function SingleScience({ single }) {
	const maxL = single.content.length;
	console.log("maxL", maxL);
	const one = single.content.slice(1, 2);
	console.log("maxL", one);
	const two = single.content.slice(2, maxL);
	return (
		<>
			<Image
				src={single.image?.url}
				width={200}
				height={600}
				alt={single.title}
				className='single-image'></Image>
			<Box>
				<Card className='singleNews'>
					<h1>{single.title}</h1>
					<h2>{single.author?.name}</h2>
					<div className='singleNews-para'>
						<span className='firstLetter'>{one}</span>
						{two}
					</div>
				</Card>
			</Box>
		</>
	);
}

export async function getStaticPaths() {
	/* 	const res = await fetch(`${API_MONGOOSE_URL}/articles`);
	const articles = await res.json(); */
	const articles = ALL_ARTICLE_ENTRIES;
	const scienceNews = articles.filter((item) => item.category === "science");
	const paths = scienceNews.map((item) => ({
		params: { slug: item.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	//const  res=await fetch(`${API_URL}/api/news`);
	// const res = await fetch(`${API_MONGOOSE_URL}/articles/${slug}`);
	// const singleNews = await res.json();
	const ith = ALL_ARTICLE_ENTRIES.findIndex((x) => x.slug === slug);
	const singleNews = ALL_ARTICLE_ENTRIES[ith];
	return {
		props: {
			single: singleNews,
		},
	};
}
