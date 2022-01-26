import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import dayjs from 'dayjs';
import Hero from './Hero';
import ButtonLink from "./ButtonLink"
import Grid from '@mui/material/Grid';
import Link from 'next/link';

type ButtonLinkParams = {
  className?: any;
  href?:any;
  hrefAs?:any;
  label?:any;
};


const NewsCard=(props) => {
  console.log("props==>",props)
  const card = props.card;
  return (
		<Card className="news-card" sx={{ width: 210, height:400, marginLeft:0 }}>
			
			<CardContent>
			<Link key={card.id} href={`/${card.category?.name}/${card.slug}`}>
           <a >
				<Hero title={card.title} imageSrc={`${card.image?.url}`} bgColor="#000080" bgSize="contain"    />
				<Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2, lg:3 }} marginTop={{xs:1, sm:2,md:3}}>
				<Grid key={card.id} item xs={6} sm={5} md={3}>
				<Typography variant="h4" color="text.primary" className="std-size__font">
				{dayjs(`${card.createdAt}`).format('DD/MM/YYYY') }
				</Typography>
				</Grid>
				<Grid key={card.id} item xs={6} sm={7} md={9}>
				
				<ButtonLink href={`/${card.author?.name}`} label={`${card.author?.name}`} className="btn-secondary" > </ButtonLink> 
				</Grid>
				<Grid key={card.id} item xs={12} sm={4} md={3}>
				<ButtonLink href={`/${card.category.name}`} label={`${card.category.name}`} className="btn-primary"> </ButtonLink> 
        </Grid>
				<Grid key={card.id} item xs={12} sm={8}  md={9}>
				<Typography variant="body1" color="text.primary" className="std-size__font">
          {card.description}
				</Typography>
				</Grid>
				</Grid>
				</a>
				</Link>
			</CardContent>
		</Card>
	);
}

export default NewsCard