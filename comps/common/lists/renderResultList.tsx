/** @format */

import React from "react";
import ArticlesSearchResult from "@/comps/ArticlesSearchResults";
import useDebounce from "utils/useDebounce";
import { useQuery } from "react-query";
import { API_HEROKU_URL } from "utils/env";
import { resolve } from "node:path/win32";
import useSWR from "swr";

const searchArticles = (
	query: string,
	articles: Array<any>
): Promise<number | void> => {
	return new Promise((resolve) => {
		let queryLength = query.length;
		let truncString = query.substring(0, queryLength - 1);
		const matchingArticles: any = articles
			.filter(
				({ title, content, author, category, slug }: Array<any> | any) =>
					title.toLowerCase().includes(query.toLowerCase()) ||
					title.toLowerCase().includes(truncString.toLowerCase()) ||
					category.toLowerCase().includes(query.toLowerCase()) ||
					category.toLowerCase().includes(truncString.toLowerCase()) ||
					content.toLowerCase().includes(query.toLowerCase()) ||
					content.toLowerCase().includes(truncString.toLowerCase())
			)
			.map((articles: Array<any>) => articles);
		// Artificial timeout for demonstration purposes
		setTimeout(() => {
			resolve(matchingArticles);
		}, 700);
	});
};

export default searchArticles;
