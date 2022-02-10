/** @format */

import { Flex, Box } from "reflexbox";
import Select from "react-select";
import { useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { API_MONGOOSE_URL } from "utils";
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

const getArticles = async (key) => {
	const categoryId = key?.queryKey[1]?.category?.value;
	//const authorId = key?.queryKey[1]?.author?.value;
	let searchUrl = categoryId
		? `${API_MONGOOSE_URL}/articles?category=${categoryId}`
		: `${API_MONGOOSE_URL}/articles`;

	if (categoryId == "all") {
		searchUrl = `${API_MONGOOSE_URL}/articles`;
	}

	const res = await fetch(searchUrl);

	return res.json();
};

const Filter = ({ articles }) => {
	const options: Array<any> | any = [
		{ label: "All", value: "all" },
		{ label: "Science", value: "science" },
		{ label: "Sport", value: "sport" },
		{ label: "Culture", value: "culture" },
		{ label: "Nature", value: "nature" },
	];
	const queryClient = useQueryClient();
	const [category, setCategory] = useState(null);
	const [author, setAuthor] = useState([]);
	const [selected, setSelected] = useState([]);

	const handleChange = (selected) => {
		setCategory(selected);
	};

	const debouncedSearchValue = useDebounce(category, 300);

	const { data, status } = useQuery(
		["articles", { category: debouncedSearchValue }],
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
						{/* 						<Select
							getOptionLabel={(option) => `${optionAuthor.author}`}
							getOptionValue={(option) => optionAuthor.id}
							options={author}
							instanceId='author'
							isMulti
							placeholder='Filter by Author'
							onChange={(values) =>
								setAuthor(values.map((author) => author.id))
							}
						/> */}
						<Box width={200} mr={20}>
							<br />
							<Select
								getOptionLabel={(option: objectParams) => `${option.label}`}
								getOptionValue={(option: objectParams) => option.value}
								options={options}
								instanceId='category'
								placeholder='Filter by category'
								isClearable
								value={selected}
								onChange={handleChange}
							/>
						</Box>
					</Grid>
				</Box>
				<Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
					<Box>
						{status === "loading" && <div> I am loading your articles</div>}
						{status === "error" && <div>Something went wrong</div>}

						{status === "success" &&
							data.map((article) => (
								<BoxList key={article.slug} article={article}></BoxList>
							))}
					</Box>
				</Grid>
			</Grid>
		</>
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

export default Filter;
