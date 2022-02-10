/** @format */

import React from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { API_MONGOOSE_URL } from "utils";
import { ArticleParams } from "utils/typeLibrary";
import useDebounce from "utils/useDebounce";
import ArticlesSearchResult from "../comps/ArticlesSearchResults";
import Modal from "react-modal";

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
					title.toLowerCase().includes(truncString.toLowerCase())
			)
			.map((articles: Array<any>) => articles);
		// Artificial timeout for demonstration purposes
		setTimeout(() => {
			resolve(matchingArticles);
		}, 700);
	});
};

const Search = ({ articles }) => {
	const [input, setInput] = React.useState<string>("");
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

	const debouncedSearchValue: string | Array<any> = useDebounce(
		searchTerm,
		500
	);
	console.log("searchTerm==>", searchTerm);

	const { isLoading, isError, isSuccess, data, status } = useQuery(
		searchTerm && ["searchArticles", debouncedSearchValue],
		() => searchArticles(debouncedSearchValue, articles),
		{
			enabled: debouncedSearchValue.length > 0,
		}
	);

	const renderResult = () => {
		if (isLoading) {
			return <div className='search-message'> Loading... </div>;
		}

		if (isError) {
			return <div className='search-message'>Something went wrong</div>;
		}

		if (isSuccess) {
			return <ArticlesSearchResult articles={data} />;
		}

		return <></>;
	};

	return (
		<div>
			<ReactQueryDevtools />
			<input onChange={(e) => setInput(e.target.value)} />
			<button onClick={() => (setModalIsOpen(true), setSearchTerm(input))}>
				Search
			</button>
			<Modal isOpen={modalIsOpen}>
				<strong>Searching Articles for {searchTerm}</strong>
				{renderResult()}
				<button onClick={() => setModalIsOpen(false)}>Go Back</button>
			</Modal>
		</div>
	);
};

export async function getServerSideProps() {
	const res = await fetch(`${API_MONGOOSE_URL}/articles`);
	const articlesData = await res.json();

	return {
		props: {
			articles: articlesData,
		},
	};
}

export default Search;
