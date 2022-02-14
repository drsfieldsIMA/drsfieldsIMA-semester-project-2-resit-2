/** @format */

// * /* /** @format
import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseCookies } from "nookies";
import API_URL, { API_HEROKU_URL } from "../utils/env";
import {
	Box,
	Button,
	Container,
	MenuItem,
	InputLabel,
	Grid,
	TextField,
	Typography,
	Input,
} from "@mui/material";
import Link from "next/link";
import FormError from "@/comps/common/FormError";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
	content: yup.string().required("Message Content is required"),
	category: yup.string().required("Topic is required"),
});

export default function Contact() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState<any>();
	const [category, setCategory] = useState<string>();
	const [title, setTitle] = useState<string>();
	const [topic, setTopic] = useState<string>();
	const [content, setContent] = useState<string>();

	const {
		register,
		handleSubmit,
		control,
		setError,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleTopic = (event: any) => {
		setTopic(event.value);
	};

	const handleTitle = (event: any) => {
		setTitle(event.target.value);
	};

	const handleContent = (event: any) => {
		setContent(event.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		setServerError(null);

		const data = {
			title: title,
			content: content,
			topic: topic,
		};

		try {
			const add = await fetch(`${API_HEROKU_URL}/correspondence`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const addResponse = await add.json();
			if (add.status === 200) {
				alert("Success message sent");
			} else {
				alert(`Backend error ${add.statusText} `);
			}
		} catch (errors) {
			setServerError("error");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Box
			component='main'
			sx={{
				alignItems: "center",
				display: "flex",
				flexGrow: 1,
				minHeight: "100%",
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
								<label>Message Title</label>
								<Input
									{...register("title", { required: true })}
									placeholder='Title of your Message.'
									className='formInput'
									name='title'
									onChange={handleTitle}
								/>

								<label>Message Content</label>
								<textarea
									{...register("content", { required: true })}
									placeholder='the content of your message.'
									className='formInput__content formContact__content'
									style={{ width: 500, height: 40 }}
									name='description'
									onChange={handleContent}
								/>

								<label>Message topic</label>
								<div className='controller-dropdown'>
									<Select
										name='topic'
										options={[
											{ value: "employment", label: "employment" },
											{
												value: "Editorial Philosophy",
												label: "editorial philosophy",
											},
											{ value: "Complaints", label: "complaints" },
											{ value: "Suggestions", label: "suggestions" },
											{ value: "other", label: "other" },
										]}
										instanceId='topic'
										placeholder='Select a topic of your contact Message'
										isClearable
										onChange={handleTopic}
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
					</fieldset>
				</form>
			</Container>
		</Box>
	);
}
