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
import { createRef } from "react";
import NextLink from "next/link";
import ReadingProgress from "utils/readingProgress";
import React from "react";

export const SingleArticlePage = ({ single }) => {
	const maxL = single.content.length;
	const one = single.content.replace(/\s+/g, "").slice(0, 1);
	const two = single.content.slice(1, maxL);
	return (
		<>
			<Box>
				<Card>
					<Grid container spacing={2} px={2} marginLeft={0}>
						<Grid key={single.slug} item xs={12} sm={12} md={6} lg={6} xl={6}>
							<h1 className='single-title'>{single.title}</h1>
							<h2 className='single-title'>
								Date:{dayjs(`${single.createdAt}`).format("DD/MM/YYYY")}
							</h2>
							<NextLink
								key={single.id}
								href={`/${single?.category}`}
								passHref={false}>
								<h3 className='single-title category-link'>
									Topic:{"   "}
									{single?.category}
								</h3>
							</NextLink>
						</Grid>
						<Grid key={single.slug} item xs={12} sm={12} md={6} lg={6} xl={6}>
							<div className='single-image__container'>
								<div className='single-image'>
									<Image
										src={single.image?.url}
										layout='fill'
										alt={single.title}
										className='overrideImage'></Image>
								</div>
								<caption>
									Image:{" "}
									{single.image?.caption
										? single.image?.caption
										: single.description}
								</caption>
							</div>
						</Grid>
					</Grid>
				</Card>
				<Grid key={single.slug} item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Card className='singleNews'>
						<NextLink
							key={single.id}
							href={`/author/${single?.author
								.toLowerCase()
								.replace(/\s+/g, "")}`}
							passHref={false}>
							<h3 className='single-title author-link'>
								Author:{"   "}
								{single?.author}
							</h3>
						</NextLink>
						<div className='singleNews-para'>
							<span className='firstLetter'>{one}</span>
							<p>{two}</p>
						</div>
					</Card>
				</Grid>
			</Box>
		</>
	);
};
