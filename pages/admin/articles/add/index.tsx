/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseCookies  } from 'nookies';
import { Box, Button, Container,MenuItem,InputLabel, Grid, Link, TextField, Typography,Input,Select } from '@mui/material';
import { API_MONGOOSE_URL, API_URL } from 'pages/comps/config';
import FormError from 'pages/comps/common/formError';

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
  content:yup.string().required("Description is required"),
	category:yup.string().required("Category is required"),
});

export default function AddArticlePage({props}:any) {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);
  const [category, setCategory] = useState(null);

	const { register, handleSubmit, setError, formState: { errors }  }  = useForm({
		resolver: yupResolver(schema),
	});

	const handleChange = (event:any) => {
		setCategory(event.target.value);
	}

	
	async function onSubmit() {
		console.log("submit")
		const formElement = document.querySelector('form');
		setSubmitting(true);
		setServerError(null);

		const cookies = parseCookies()
		console.log("cookies",cookies)
	//	const http = useAxios(jwt);
	 const jwt=cookies.jwt
	 const request = new XMLHttpRequest();
	//	console.log("data",data);

		const formData = new FormData();

    const formElements = formElement?.elements;

		console.log("formElements",formElements)

 const	data = {};

	for (let i = 0; i < formElements.length; i++) {
		console.log("i",formElements[i])
		const currentElement = formElements[i];
		if (!['submit', 'file'].includes(currentElement.type) && i > 0) {
			data[currentElement.name] = currentElement.value;
		} else if (currentElement.type === 'file') {
			for (let i = 0; i < currentElement.files.length; i++) {
				const file = currentElement.files[i];
				console.log("file",file)
				console.log("current Element",currentElement.name)
				formData.append(`files.${currentElement.name}`, file,file.name);
		//		data[`files.${currentElement.name}`]=file;
				console.log("formdata0",formData)
			}
		}
	}
  
	console.log("data",data)
	data["content"] = data["description"];
	data["category"] = category;
	data["slug"] = data["title"].replaceAll(' ', '_');

	console.log("data =====>",data)

	try {
	const add = await fetch(`${API_MONGOOSE_URL}/articles`, {
		method: "POST",
		headers: {
			 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTVmMjZjNWNkOGY2MDAxNjE1YWU4ZCIsImlhdCI6MTY0MzEwNTMyMSwiZXhwIjoxNjQ1Njk3MzIxfQ._BHP_NAFaBQDea6FZamkiL321yKtO9v1dTBW5Nc0_Mo`,
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
})

console.log("add fetch==>",add)

const addResponse = await add.json()
console.log("sent file successfull?==>",addResponse)

		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
    <>
			<Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
        className="height-75"
      >
        <Container    sx={{
          backgroundColor:'white',
					maxWidth:"800"}} >
			<form>
				{serverError && <FormError>{serverError}</FormError>}
				<fieldset className="form__fieldset" disabled={submitting}>
				<Grid container  className="form__fieldset__grid"  rowSpacing={7} columnSpacing={{ xs: 1, sm: 1, md: 2, lg:3 }} marginTop={{xs:1, sm:2,md:3}}>
				<Grid   item  xs={12} md={12}>
				<label style={{
          color:'black',
        }} className="form-label" >Title</label>
						<Input {...register('title', { required: true })} placeholder="Title e.g. local author publishes to a worldwi....." className="formInput" name="title"  />
						{errors.title && <FormError>{errors.title.message}</FormError>}
				<label style={{
          color:'black',
        }} className="form-label"  >Description</label>
						<textarea {...register('content', { required: true })}  placeholder="Content e.g. This local author has secured a publisher....." className="formInput__content"  style={{width:500,height:90}} name="description" />
					<InputLabel id="demo-simple-select-label" className="form-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={category}
    label="category"
    onChange={handleChange}
		placeholder='Category of story e.g sport, science, culture.........'
		className="form-input__dropdown"
  >
    <MenuItem value={"science"}>Science</MenuItem>
    <MenuItem value={"sport"}>Sport</MenuItem>
    <MenuItem value={"culture"}>Culture</MenuItem>
		<MenuItem value={"nature"}>Nature</MenuItem>
		<MenuItem value={"business"}>Business</MenuItem>
  			</Select>
				</Grid>

				</Grid>

					<div style={{marginBottom:30}}>
					<label htmlFor="filePicker" style={{ background:"cream", padding:"5px 10px" }}>
					Upload image
					</label>
					<input  id="filePicker" type="file"  name="Image" />
					</div>
            <div className="form-input">
					<Button onClick={onSubmit} type="submit" style={{marginLeft:"30px"}} className="btn-primary">{submitting ? "Submitting..." : "Submit"}</Button>
					</div>
				</fieldset>
			</form>
			</Container>
			</Box>
     </>
	);
}


