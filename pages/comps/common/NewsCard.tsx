/** @format */

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import Hero from "./Hero";
import ButtonLink from "./ButtonLink";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type ButtonLinkParams = {
	className?: any;
	href?: any;
	hrefAs?: any;
	label?: any;
};

type CardArticleParams = {
	title?: string;
	content?: string;
	id?: string;
	image?: any;
	category?: any;
	slug?: string;
	author?: any;
	createdAt?: any;
	description?: string;
};

const NewsCard: any = ({ article }): any => {
	const cardArticle: any = article;

	return (
		<Card className='news-card' sx={{ width: 210, height: 400, marginLeft: 0 }}>
			<CardContent>
				<Link
					key={cardArticle.id}
					href={`/${cardArticle.category?.name}/${cardArticle.slug}`}>
					<a>
						<Hero
							title={cardArticle.title}
							imageSrc={`${cardArticle.image?.url}`}
							bgColor='#000080'
							bgSize='contain'
						/>
						<Grid
							container
							rowSpacing={1}
							columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 3 }}
							marginTop={{ xs: 1, sm: 2, md: 3 }}>
							<Grid key={cardArticle.id} item xs={6} sm={5} md={3}>
								<Typography
									variant='h4'
									color='text.primary'
									className='std-size__font'>
									{dayjs(`${cardArticle.createdAt}`).format("DD/MM/YYYY")}
								</Typography>
							</Grid>
							<Grid key={cardArticle.id} item xs={6} sm={7} md={9}>
								<ButtonLink
									href={`/${cardArticle.author?.name}`}
									label={`${cardArticle.author?.name}`}
									className='btl-secondary'>
									{" "}
								</ButtonLink>
							</Grid>
							<Grid key={cardArticle.id} item xs={12} sm={4} md={3}>
								<ButtonLink
									href={`/${cardArticle.category.name}`}
									label={`${cardArticle.category.name}`}
									className='btn-primary'>
									{" "}
								</ButtonLink>
							</Grid>
							<Grid key={cardArticle.id} item xs={12} sm={8} md={9}>
								<Typography
									variant='body1'
									color='text.primary'
									className='std-size__font'>
									{cardArticle.description}
								</Typography>
							</Grid>
						</Grid>
					</a>
				</Link>
			</CardContent>
		</Card>
	);
};

NewsCard.propTypes = {
	article: PropTypes.any,
};

export default NewsCard;
