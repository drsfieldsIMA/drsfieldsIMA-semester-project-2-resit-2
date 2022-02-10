/** @format */

import { ALL_ARTICLE_ENTRIES } from "../constants/articleEntries";
import { ArticleParams } from "../utils/typeLibrary";

const SearchArticles = (query: Array<string>): Promise<string[]> => {
	return new Promise((resolve) => {
		const matchingArticles: string[] = ALL_ARTICLE_ENTRIES.filter(
			({ title, content, category, author }) =>
				title.toLowerCase().includes(query[0].toLowerCase()) ||
				content.toLowerCase().includes(query[1].toLowerCase()) ||
				category.toLowerCase().includes(query[2].toLowerCase()) ||
				author.toLowerCase().includes(query[3].toLowerCase())
		).map(({ title }) => title);
		// Artificial timeout for demonstration purposes
		setTimeout(() => {
			resolve(matchingArticles);
		}, 500);
	});
};

export default SearchArticles;
