/**
 * /* eslint-disable no-mixed-spaces-and-tabs
 *
 * @format
 */

import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseCookies } from "nookies";
import {
	Box,
	Button,
	Container,
	MenuItem,
	InputLabel,
	Grid,
	Link,
	TextField,
	Typography,
	Input,
} from "@mui/material";
import API_URL, { API_HEROKU_URL } from "../../../../utils/env";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import FormError from "../../../../comps/common/FormError";
import ReactSelect from "react-select";
import { Router } from "react-router";
import DeletePostButton from "./DeletePostButton";
import Select from "react-select";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
	content: yup.string().required("Description is required"),
	category: yup.string().required("Category is required"),
});

export default function EditArticlePage({ single }: any) {
	const articleID = single.id;
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState<any>();
	const [category, setCategory] = useState(null);
	const [title, setTitle] = useState(single.title);
	const [slug, setSlug] = useState(single.slug);
	const [content, setContent] = useState(single.content);

	const {
		register,
		handleSubmit,
		control,
		setError,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleCategory = (event: any) => {
		setCategory(event.value);
	};

	const handleTitle = (event: any) => {
		setTitle(event.target.value);
	};

	const handleContent = (event: any) => {
		setContent(event.target.value);
	};

	async function onSubmit() {
		setSubmitting(true);

		const cookies = parseCookies();
		const jwt = cookies?.jwt;

		let data = {};

		data = {
			title: title,
			description: title,
			slug: slug,
			content: content,
			category: category,
		};

		try {
			const add = await fetch(`${API_URL}/articles`, {
				method: "PUT",
				headers: {
					Authorization: `Bearer ${jwt}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const addResponse = await add.json();
			if (add.status === 200) {
				alert("Success article uploaded");
			} else {
				alert(`Backend error ${add.statusText} `);
			}
		} catch (errors) {
			setServerError("error");
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
			<Box
				sx={{
					alignItems: "center",
					display: "flex",
					flexGrow: 1,
					minHeight: "100%",
					minWidth: "90%",
				}}
				className='height-75'>
				<Container
					sx={{
						backgroundColor: "white",
						maxWidth: "800",
					}}>
					<form onSubmit={onSubmit}>
						{serverError && <FormError>{serverError}</FormError>}
						<fieldset className='form__fieldset' disabled={submitting}>
							<Grid
								container
								className='form__fieldset__grid'
								rowSpacing={7}
								columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 3 }}
								marginTop={{ xs: 1, sm: 2, md: 3 }}>
								<Grid item xs={12} md={12}>
									<label>Title</label>
									<Input
										{...register("title", { required: true })}
										placeholder={`${single?.title}`}
										className='formInput'
										name='title'
										onChange={handleTitle}
									/>

									<label>Content</label>
									<textarea
										{...register("content", { required: true })}
										placeholder={`${single?.content}`}
										className='formInput__content'
										style={{ width: 500, height: 90 }}
										name='description'
										onChange={handleContent}
									/>

									<label>Category</label>
									<div className='controller-dropdown'>
										<Select
											name='category'
											options={[
												{ value: "Science", label: "science" },
												{ value: "Sport", label: "sport" },
												{ value: "Culture", label: "culture" },
												{ value: "Nature", label: "nature" },
											]}
											instanceId='category'
											placeholder='Select this articles topic'
											isClearable
											onChange={handleCategory}
										/>
									</div>
								</Grid>
							</Grid>

							<div className='form-input'>
								<Button
									type='submit'
									style={{ marginLeft: "30px" }}
									className='btn-primary'>
									{submitting ? "Submitting..." : "Submit"}
								</Button>
							</div>

							<hr />
							<DeletePostButton articleID={articleID} />
						</fieldset>
					</form>
				</Container>
			</Box>
		</>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`${API_HEROKU_URL}/articles`);
	const articles = await res.json();
	//const articles = ALL_ARTICLE_ENTRIES;
	//const sportNews = articles.filter((item) => item.category === "sport");
	const paths = articles.map((item) => ({
		params: { slug: item.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	const res = await fetch(`${API_HEROKU_URL}/articles/${slug}`);
	const singleArticle = await res.json();
	return {
		props: {
			single: singleArticle,
		},
	};
}
