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
			<Box>
				<Grid container spacing={2} px={2} marginLeft={0}>
					<Grid key={single.slug} item xs={12} sm={12} md={12} lg={12} xl={6}>
						<h1 className='single-image__title'>{single.title}</h1>
						<div className='single-image'>
							<Image
								src={single.image?.url}
								layout='fill'
								alt={single.title}></Image>
						</div>
					</Grid>
					<Grid key={single.slug} item xs={12} sm={12} md={12} lg={12} xl={6}>
						<Card className='singleNews'>
							<h2>{single.author?.name}</h2>
							<div className='singleNews-para'>
								<span className='firstLetter'>{one}</span>
								{two}
							</div>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`${API_MONGOOSE_URL}/articles`);
	const articles = await res.json();
	//const articles = ALL_ARTICLE_ENTRIES;
	const scienceNews = articles.filter(
		(item) => item.section_category === "science"
	);
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
	const res = await fetch(`${API_MONGOOSE_URL}/articles/${slug}`);
	const singleNews = await res.json();
	return {
		props: {
			single: singleNews,
		},
	};
}
