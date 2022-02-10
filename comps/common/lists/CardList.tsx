/** @format */

import React from "react";
import Grid from "@mui/material/Grid";
import NewsCard from "../NewsCard";

const CardList = ({ News }) => {
	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			{News.slice(0, 4).map((item: any, index: string) => (
				<Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={4}>
					<NewsCard key={item.id} article={item} />
				</Grid>
			))}
		</Grid>
	);
};

export default CardList;
