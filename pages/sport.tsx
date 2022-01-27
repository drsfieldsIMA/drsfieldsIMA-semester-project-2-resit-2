/** @format */

import React from "react";
import Head from "next/head";
import { Grid } from "@mui/material";
import Link from "next/link";
import NewsCard from "pages/comps/common/NewsCard";
import API_URL from "../utils/index";
import Hero from "./comps/common/Hero";

export default function Sport({ news }: any) {
	return (
		<>
			<Head>
				<title>Sport News App</title>
				<meta name='description' content='Welcome to the sports news"'></meta>
			</Head>

			<Hero
				title='Here is your sport news'
				imageSrc='/images/hero.jpg'
				classString='hero_banner'
			/>

			<div>
				<h2>Sport Index Page</h2>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</div>

			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				{news.map((item): any => {
					return "sport" === item.category ? (
						<Grid item xs={6} key={item.id}>
							<Link href={`/sport/${item.slug}`}>
								<a>
									<NewsCard card={item} />
								</a>
							</Link>
						</Grid>
					) : null;
				})}
			</Grid>
		</>
	);
}

export async function getStaticProps() {
	//const  res=await fetch(`${API_URL}/api/news`);
	const res = await fetch(`${API_URL}/articles`);
	const news = await res.json();
	return {
		props: { news },
	};
}
