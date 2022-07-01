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
import api from "./api/news/posts";
import NextLink from "next/link";

const { API_URL } = process.env;

type objectParams = {
	label: string;
	value: string;
};

	// if (categoryId) {
	// 	if (categoryId) {
	// 		newData = `fields name,version_title, genres,cover.*,screenshots.*,artworks.*;where genres=${categoryId}; limit 20;`;

	// 		if (categoryId == "all") {
	// 			newData = `fields name,version_title,genres,cover.*,screenshots.*,artworks.*; limit 10;`;
	// 		}
	// 	}
	// }
	//	const request = await api.post("/games", newData);
    //let newData = `fields name,version_title,genres,cover.*,screenshots.*,artworks.*; limit 7;`;

const API_TWITCH = "https://cors-anywhere.herokuapp.com/api.igdb.com/v4/games";
const getArticles = async (key) => {
	console.log("the key==>", key?.queryKey[1]?.category?.value);
	console.log("typeof the key==>", typeof key?.queryKey[1]?.category?.value);
	let categoryId = key?.queryKey[1]?.category?.value;
	
    let newData:string = `fields name,genres;where genres=${categoryId}; limit 7;`
	try {
		const add = await fetch(API_TWITCH, {
			method: "POST",
			headers: {
                'Accept': 'application/json',
		'Client-ID': '7x83kcnwo57vwmiyv8mf901oe5p9fq',
		'Authorization': 'Bearer kduk2s4usqlqzobcb8x415yp6iv6k5'
			},
			body:JSON.stringify(newData),
		});
		const addResponse = await add.json();
		return addResponse;
	} catch (err) {
		console.log("error==>",err);
		return;
	} finally {
		console.log("finally==>");
	}
};

const Browse = ({ articles }) => {
	console.log("articles Lentgth==>", articles);
	const options: Array<any> | any = [
		{ label: "point_click", value: "2" },
		{ label: "fighting", value: "4" },
		{ label: "shooting ", value: "5" },
		{ label: "music", value: "6 " },
		{ label: "platform", value: "7" },
		{ label: "puzzle", value: "8" },
		{ label: "racing", value: "9" },
		{ label: "realTimeStrategy", value: "10" },
		{ label: "rolePlayingGame", value: "11" },
		{ label: "simulation", value: "12" },
		{ label: "all", value: "all" },
	];

	const queryClient = useQueryClient();
	const [category, setCategory] = useState("all");
	const [author, setAuthor] = useState([]);
	const [selected, setSelected] = useState([]);

	const handleChange = (selected) => {
		setCategory(selected);
		setSelected(selected);
	};

	const debouncedSearchValue = useDebounce(category, 1000);

const { data, status } = useQuery(
		["articles", { category: category }],
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
						{status === "error" && articles?.length > 0 ? (
							articles?.map((article) => (
								<Box key={article?.id} p={10}>
									<NextLink href={`/${article?.id}`} passHref={false}>
										{article?.name}
									</NextLink>
									{"  "}
									{article.genres ? article.genres : null}
									<br />
								</Box>
							))
						) : (
							<div>Something went wrong</div>
						)}

						{status === "success" && data?.length > 0 ? (
							data?.map((article) => (
								<Box key={article?.id} p={10}>
									<NextLink href={`/${article?.id}`} passHref={false}>
										{article?.name}
									</NextLink>
									{"  "}
									{article.genres ? article.genres : null}
									<br />
								</Box>
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
	const dataFetch =
		"fields name,version_title,genres,cover.*,screenshots.*,artworks.*; limit 12;";
	const response = await api.post("games", dataFetch);
	//console.log("response==>",response.data)
	const articlesData = response.data;

	return {
		props: {
			articles: articlesData,
		},
	};
}

export default Browse;
