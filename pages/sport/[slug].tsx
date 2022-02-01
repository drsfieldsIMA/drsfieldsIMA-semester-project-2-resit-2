/** @format */

import { useRouter } from "next/router";
import { API_MONGOOSE_URL } from "utils";
import { ALL_ARTICLE_ENTRIES } from "constants/articleEntries";
import Image from "next/image";
import { Box, Card, Stack, Divider } from "@mui/material";

export default function SingleSport({ single }) {
	const router = useRouter();
	console.log("router===>", router.query.slug);
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
	const res = await fetch(`${API_MONGOOSE_URL}/articles`);
	const articles = await res.json();
	//const articles = ALL_ARTICLE_ENTRIES;
	const sportNews = articles.filter(
		(item) => item.section_category === "sport"
	);
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
