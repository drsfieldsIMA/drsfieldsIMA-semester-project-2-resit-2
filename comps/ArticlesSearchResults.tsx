/** @format */

import { NextPlan } from "@mui/icons-material";
import NextLink from "next/link";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

const ArticlesSearchResult = ({ articles }: { articles: any }) => {
	return articles?.length > 0 ? (
		<div className='search-grid'>
			{articles?.map((article) =>
				article.category ? (
					<NextLink href={`${article?.category}/${article?.slug}`} passHref>
						<Button className='single-asset' component='a'>
							{article.title}{" "}
						</Button>
					</NextLink>
				) : null
			)}
		</div>
	) : (
		<div className='search-message'> No articles found</div>
	);
};

export default ArticlesSearchResult;
