/** @format */

import Typography from "@mui/material/Typography";
import { Flex, Box } from "reflexbox";
import NextLink from "next/link";

const BoxList = ({ article }) => {
	return (
		<Box key={article.id} p={10}>
			<NextLink href={`${article?.category}/${article?.slug}`} passHref>
				{article.title}
			</NextLink>
			{"  "}
			{article.category ? article.category : null}
			<br />
		</Box>
	);
};

export default BoxList;
