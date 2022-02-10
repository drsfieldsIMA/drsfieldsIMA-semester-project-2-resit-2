/** @format */

import { useRouter } from "next/router";
import API_URL, { API_MONGOOSE_URL } from "../../utils/index";
import Link from "next/link";
import Image from "next/image";
import { Box, Card, Stack, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ALL_ARTICLE_ENTRIES } from "constants/articleEntries";
import dayjs from "dayjs";
import Head from "next/head";

import React from "react";

export const SingleArticlePage = ({ single }) => {
	const maxL = single.content.length;
	//	console.log("maxL", maxL);
	const one = single.content.slice(0, 1);
	//	console.log("maxL", one);
	const two = single.content.slice(1, maxL);
	return (
		<Box>
			<Grid container spacing={2} px={2} marginLeft={0}>
				<Grid key={single.slug} item xs={12} sm={12} md={6} lg={6} xl={6}>
					<h1 className='single-title'>{single.title}</h1>
					<h2 className='single-title'>
						{" "}
						Date:{dayjs(`${single.createdAt}`).format("DD/MM/YYYY")}
						{"    "}Topic:{single?.category}
					</h2>
				</Grid>
				<Grid key={single.slug} item xs={12} sm={12} md={6} lg={6} xl={6}>
					<div className='single-image'>
						<Image
							src={single.image?.url}
							layout='fill'
							alt={single.title}
							className='overidImage'></Image>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={3} lg={3} xl={3}></Grid>
				<Grid key={single.slug} item xs={12} sm={12} md={9} lg={9} xl={9}>
					<Card className='singleNews'>
						<h3 className='single-title'>Author:{single?.author}</h3>
						<div className='singleNews-para'>
							<span className='firstLetter'>{one}</span>
							{two}
						</div>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};
