/** @format */

import { ALL_ARTICLE_ENTRIES } from "../constants/articleEntries";

const SearchArticles = (query: string): Promise<string[]> => {
	return new Promise((resolve) => {
		const matchingArticles = ALL_ARTICLE_ENTRIES.filter(
			({ title: string, content: string, category: string, author: string }) =>
				title.toLowerCase().includes(query.toLowerCase()) ||
				content.toLowerCase().includes(query.toLowerCase()) ||
				category.toLowerCase().includes(query.toLowerCase()) ||
				author.toLowerCase().includes(query.toLowerCase())
		).map(({ title }) => title);
		// Artificial timeout for demonstration purposes
		setTimeout(() => {
			resolve(matchingArticles);
		}, 500);
	});
};

export default SearchArticles;
