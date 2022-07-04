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
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { IconButton } from "@mui/material";
import { Science, SportsFootball } from "@mui/icons-material";
import {
	CameraAltOutlined,
	MusicNote,
	MusicNoteSharp,
} from "@material-ui/icons";

type CardArticleParams = {
	title: string;
	content: string;
	id?: string;
	image?: any;
	category: string;
	slug?: string;
	author?: any;
	createdAt?: any;
	description?: string;
};

const NewsCard = ({ article }: { article: CardArticleParams }) => {
	const cardArticle: CardArticleParams = article;

	return (
		<Card
			className={`${cardArticle.category}-card news-card`}
			sx={{ width: 210, height: 400, marginLeft: 0 }}>
			<CardContent>
				<Link
					key={cardArticle.slug}
					href={`/${cardArticle?.category.toLowerCase()}/${cardArticle.slug}`}>
					<a>
						<Hero
							title={cardArticle.title}
							imageSrc={`${cardArticle.image?.url}`}
							bgColor='#f2f0e4'
							bgSize='cover'
						/>
						<Grid
							container
							rowSpacing={1}
							columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 3 }}
							marginTop={{ xs: 1, sm: 2, md: 3 }}>
							<Grid key={1} item xs={6} sm={6} md={3}>
								<Typography
									variant='h4'
									color='text.primary'
									className='std-size__font'
									fontFamily='protipo, sans-serif'>
									{dayjs(`${cardArticle.createdAt}`).format("DD/MM/YYYY")}
								</Typography>
							</Grid>
							<Grid key={2} item xs={6} sm={6} md={3}>
								<Typography
									variant='body1'
									color='text.primary'
									className='lun-primary'
									fontFamily='protipo, sans-serif'>
									{`${cardArticle.category}`}
								</Typography>
								{cardArticle.category == "sport" ? (
									<IconButton>
										<SportsFootball></SportsFootball>
									</IconButton>
								) : cardArticle.category == "culture" ? (
									<IconButton>
										<MusicNoteSharp></MusicNoteSharp>
									</IconButton>
								) : (
									<IconButton>
										<Science></Science>
									</IconButton>
								)}
							</Grid>
							<Grid key={3} item xs={12} sm={12} md={6}>
								<Typography
									variant='body1'
									color='text.primary'
									className='lun-secondary'
									fontFamily='protipo, sans-serif'>
									{`${cardArticle.author}`}
								</Typography>
							</Grid>
							<Grid key={4} item xs={12} sm={12} md={12}>
								<Typography
									variant='body1'
									color='text.primary'
									className='std-size__font'
									fontFamily='protipo, sans-serif'>
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
	props: PropTypes.node,
	articles: PropTypes.node,
	image: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string,
	category: PropTypes.string,
	content: PropTypes.string,
	author: PropTypes.string,
};

export default NewsCard;
