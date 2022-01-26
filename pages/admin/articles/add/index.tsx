/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseCookies  } from 'nookies';
import { Box, Button, Container,MenuItem,InputLabel, Grid, Link, TextField, Typography,Input,Select } from '@mui/material';
import { API_MONGOOSE_URL, API_URL } from 'pages/comps/config';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import FormError from '../../../../pages/comps/common/FormError';
import ReactSelect from "react-select";
import { Router } from 'react-router';

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
  content:yup.string().required("Description is required"),
	category:yup.string().required("Category is required"),
});

export default function AddArticlePage({props}:any) {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);
  const [category, setCategory] = useState(null);
	const [title, setTitle] = useState("unknown title");
  const [content, setContent] = useState("unknown-slug");
	const { register, handleSubmit, control, setError, formState: { errors }  }  = useForm({
		resolver: yupResolver(schema),
		defaultValues:{
			title: "unknown title",
			content:'',
			description:'',
	   	slug:"unknown-slug",
      category: { value: "science", label: "Science" }
		}
	});
 
	const handleCategory= (event:any) => {
		setCategory(event.value);
	}

	const handleTitle= (event:any) => {
		setTitle(event.target.value);
	}

	const handleContent= (event:any) => {
		setContent(event.target.value);
	}

	const filehandler=(event:any)	=> {
	}

	async function onSubmit(data:any) {
		setSubmitting(true); 
		setServerError(null);

	const cookies = parseCookies();
	 const jwt=cookies?.jwt;

	  let formData = new FormData();
		let	slug ="unknown_slug"
		if (title){
		slug = title?.replaceAll(' ', '_');
	//	   slug =title?.replace(/\s+/g,  '_');
		}
	  

	formData={
  	title:title,
	 description:title,
	content:content,
	 slug:slug,
	 section_category:category
	}
	console.log("formData===>",formData); 

	try {
		const add = await fetch(`${API_MONGOOSE_URL}/articles`, {
			method: "POST",
			headers: {
				 'Authorization': `Bearer ${jwt}`,
					'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});
		
			const addResponse = await add.json()
			if (add.status === 200) {
				alert('Success article uploaded')
			}
	} catch (error) {
		setServerError(add?.error?.toString());
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
			
			
						<form onSubmit={onSubmit} >
							{serverError && <FormError>{serverError}</FormError>}
							<fieldset className="form__fieldset" disabled={submitting}>


						<Grid container  className="form__fieldset__grid"  rowSpacing={7} columnSpacing={{ xs: 1, sm: 1, md: 2, lg:3 }} marginTop={{xs:1, sm:2,md:3}}>
						<Grid   item  xs={12} md={12}>
				
				    	<label>Title</label>
					 	   <Input {...register('title', { required: true })} placeholder="Title e.g. local author publishes to a worldwi....." className="formInput" name="title" onChange={handleTitle}   />
						
						   <label>Content</label>
						   <textarea {...register('content', { required: true })}  placeholder="Content e.g. This local author has secured a publisher....." className="formInput__content"  style={{width:500,height:90}} name="description" onChange={handleContent} />
					
					     					 <label>Category</label>
													<div className="controller-dropdown">
													<Controller
													  id="controller-dropdown__menu"
														name="category"
														control={control}
														render={({ field:onChange }) => (
																		<ReactSelect
																		onChange={handleCategory}
																		isClearable
																		options={[
																				{ value: "science", label: "science" },
																				{ value: "sport", label: "sport" },
																				{ value: "culture", label: "culture" },
																				{ value: "nature", label: "nature" }
																									]}
																								/>
																							)}
																			/>
																</div>
								</Grid>
								</Grid>

								<div className="form-input">
								<Button type="submit" style={{marginLeft:"30px"}} className="btn-primary">{submitting ? "Submitting..." : "Submit"}</Button>
								</div>
				
				
				</fieldset>
			</form>
			
			
			</Container>
			</Box>
     </>
	);
}


