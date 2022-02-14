/** @format */

import React from "react";
import API_URL, { API_HEROKU_URL } from "utils/env";
import { Heading } from "comps/Layout";
import { HeadingDefaults } from "utils/typeLibrary";
import dayjs from "dayjs";
import { Button, Container, Grid } from "@mui/material";
import Link from "next/link";
import ArrowBackSharp from "@material-ui/icons/ArrowBackSharp";
import Image from "next/image";
import BoxList from "@/comps/common/lists/BoxList";
import { Box, Card } from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";

function SingleAuthor({ articles, authors, slug }) {
	const AuthorAssets: Array<any> = articles.filter((article) =>
		article?.author?.toLowerCase().replace(/\s+/g, "").includes(slug)
	);
	const AuthorProf: Array<any> | any = authors.filter((author) =>
		author?.name.toLowerCase().replace(/\s+/g, "").includes(slug)
	);
	const AuthorProfile = AuthorProf[0];

	return (
		<>
			<Head>
				<title>{AuthorProfile?.name}</title>
			</Head>
			<Box>
				<NextLink href='/' passHref={false}>
					<Button component='a' startIcon={<ArrowBackSharp fontSize='small' />}>
						Home
					</Button>
				</NextLink>
				<section>
					<Card>
						<Grid container spacing={2} px={2} marginLeft={0}>
							<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
								<h1>{AuthorProfile.name}</h1>
								<h2>{AuthorProfile.name}</h2>
								<h3>
									{dayjs(`${AuthorProfile.createdAt}`).format("DD/MM/YYYY")}
								</h3>
								<h3>
									{dayjs(`${AuthorProfile.updatedAt}`).format("DD/MM/YYYY")}
								</h3>
								<h3>{AuthorProfile?.email}</h3>
							</Grid>
							<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
								{AuthorProfile.picture?.url ? (
									<div className='author-image'>
										<Image
											src={AuthorProfile.picture.url}
											layout='fill'
											alt={AuthorProfile.name}></Image>
									</div>
								) : null}
							</Grid>
							<Grid item xs={12} maxHeight={400}>
								<ul className='listed-articles'>
									<div className='search-grid'>
										{AuthorAssets &&
											AuthorAssets.map((article, index) => (
												<Link
													href={`/${article.category.toLowerCase()}/${
														article.slug
													}`}
													key={article.slug}
													passHref={false}>
													<a>
														<BoxList key={index} article={article} />
													</a>
												</Link>
											))}
									</div>
								</ul>
							</Grid>
						</Grid>
					</Card>
				</section>
			</Box>
		</>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`${API_HEROKU_URL}/writers`);
	//const articles = ALL_ARTICLE_ENTRIES;
	const authors = await res.json();
	let slugString = "404";
	const paths = authors.map((item) => ({
		params: { slug: item?.name?.toLowerCase().replace(/\s+/g, "") },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	const resNews = await fetch(`${API_HEROKU_URL}/articles`);
	const singleNews = await resNews.json();
	const resAuthors = await fetch(`${API_HEROKU_URL}/writers`);
	const authors = await resAuthors.json();
	return {
		props: {
			articles: singleNews,
			authors: authors,
			slug: slug,
		},
	};
}

export default SingleAuthor;
