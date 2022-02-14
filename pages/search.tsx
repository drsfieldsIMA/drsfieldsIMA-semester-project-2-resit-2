/** @format */

import { Flex, Box } from "reflexbox";
import Select from "react-select";
import { useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { API_HEROKU_URL } from "utils/env";
import useDebounce from "utils/useDebounce";
import BoxList from "@/comps/common/lists/BoxList";
import { Grid } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Router } from "react-router";

const { API_URL } = process.env;

type objectParams = {
	label: string;
	value: string;
};

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

const getArticles = async (key) => {
	let categoryId = key?.queryKey[1]?.category?.value;
	let authorId = key?.queryKey[2]?.author?.value;
	let searchUrl = `${API_HEROKU_URL}/articles`;
	if (categoryId || authorId) {
		if (categoryId) {
			searchUrl = `${API_HEROKU_URL}/articles?category=${categoryId}`;

			if (categoryId == "all") {
				searchUrl = `${API_HEROKU_URL}/articles`;
			}
		}

		if (authorId) {
			searchUrl = `${API_HEROKU_URL}/articles?author=${authorId}`;

			if (authorId == "all") {
				searchUrl = `${API_HEROKU_URL}/articles`;
			}
		}
	}

	if (categoryId && authorId) {
		searchUrl = `${API_HEROKU_URL}/articles?category=${categoryId}&author=${authorId}`;
	}

	const res = await fetch(searchUrl);
	return res.json();
};

const Search = ({ articles }) => {
	const options: Array<any> | any = [
		{ label: "All", value: "all" },
		{ label: "Science", value: "science" },
		{ label: "Sport", value: "sport" },
		{ label: "Culture", value: "culture" },
		{ label: "Nature", value: "nature" },
	];

	const optionAuthor: Array<any> | any = [
		{ label: "All", value: "all" },
		{ label: "David Doe", value: "David Doe" },
		{ label: "Sarah Baker", value: "Sarah Baker" },
		{ label: "Super Admin", value: "super admin" },
		{ label: "Jannne Cathrin Lillenes", value: "jannne cathrin lillenes" },
	];

	const queryClient = useQueryClient();
	const [category, setCategory] = useState(null);
	const [author, setAuthor] = useState([]);
	const [selected, setSelected] = useState([]);
	const [selectedAuthor, setSelectedAuthor] = useState([]);

	const handleChange = (selected) => {
		setCategory(selected);
		setSelected(selected);
	};

	const handleAuthor = (selectedAuthor) => {
		setAuthor(selectedAuthor);
		setSelectedAuthor(selectedAuthor);
	};

	const debouncedSearchValue = useDebounce(category, 300);
	const debouncedAuthorValue = useDebounce(author, 300);

	const { data, status } = useQuery(
		[
			"articles",
			{ category: debouncedSearchValue },
			{ author: debouncedAuthorValue },
		],
		getArticles,
		{ initialData: articles }
	);

	return (
		<>
			<Grid container spacing={2} px={2} marginLeft={0}>
				<Box variant='container'>
					<Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
						<Box width={200} as='h2' my={40}>
							Filter Articles
						</Box>
						<Box width={200} mr={20}>
							<Select
								getOptionLabel={(optionAuthor: objectParams) =>
									`${optionAuthor.label}`
								}
								getOptionValue={(optionAuthor: objectParams) =>
									optionAuthor.value
								}
								options={optionAuthor}
								instanceId='author'
								value={selectedAuthor}
								isClearable
								placeholder='Filter by Author'
								onChange={(value) => handleAuthor(value)}
							/>
							<br />
							<Select
								getOptionLabel={(option: objectParams) => `${option.label}`}
								getOptionValue={(option: objectParams) => option.value}
								options={options}
								instanceId='category'
								placeholder='Filter by category'
								isClearable
								value={selected}
								onChange={(value) => handleChange(value)}
							/>
						</Box>
					</Grid>
				</Box>
				<Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
					<Box>
						{status === "loading" && <div> I am loading your articles</div>}
						{status === "error" && <div>Something went wrong</div>}

						{status === "success" && data.length > 0 ? (
							data.map((article) => (
								<BoxList key={article.slug} article={article}></BoxList>
							))
						) : (
							<Box p={10}>
								<div>Sorry no articles found</div>
							</Box>
						)}
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export async function getServerSideProps() {
	const res = await fetch(`${API_HEROKU_URL}/articles`);
	const articlesData = await res.json();

	return {
		props: {
			articles: articlesData,
		},
	};
}

export default Search;
