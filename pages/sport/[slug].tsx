/** @format */

import { useRouter } from "next/router";
import { API_MONGOOSE_URL } from "utils";
import { ALL_ARTICLE_ENTRIES } from "constants/articleEntries";
import Image from "next/image";
import { Box, Card, Stack, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

export default function SingleSport({ single }) {
	const router = useRouter();
	//console.log("router===>", router.query.slug);
	const maxL = single.content.length;
	//console.log("maxL", maxL);
	const one = single.content.slice(1, 2);
	//console.log("maxL", one);
	const two = single.content.slice(2, maxL);

	return (
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

SingleSport.propTypes = {
	item: PropTypes.any,
	news: PropTypes.arrayOf(PropTypes.string),
	scienceNews: PropTypes.arrayOf(PropTypes.string),
	sportNews: PropTypes.arrayOf(PropTypes.string),
	articles: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string,
	section_category: PropTypes.string,
	children: PropTypes.string,
};
