/** @format */

import React from "react";
import API_URL, { API_MONGOOSE_URL } from "utils";
import { Heading } from "comps/Layout";
import { HeadingDefaults } from "utils/typeLibrary";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import Link from "next/link";
import ArrowBackSharp from "@material-ui/icons/ArrowBackSharp";
import Image from "next/image";
import BoxList from "@/comps/common/lists/BoxList";

function SingleAuthor({ articles, authors, slug }) {
	console.log("Authors slug==>", slug);
	const AuthorAssets: Array<any> = articles.filter((article) =>
		article?.author?.toLowerCase().replace(/\s+/g, "").includes(slug)
	);
	const AuthorProf: Array<any> | any = authors.filter((author) =>
		author?.name.toLowerCase().replace(/\s+/g, "").includes(slug)
	);
	const AuthorProfile = AuthorProf[0];
	console.log("Authors Assets==>", AuthorProfile);

	return (
		<main>
			<Button component='a' startIcon={<ArrowBackSharp fontSize='small' />}>
				Home
			</Button>
			<section>
				<h1>{AuthorProfile.name}</h1>
				<h2>{AuthorProfile.name}</h2>
				<h3>{dayjs(`${AuthorProfile.createdAt}`).format("DD/MM/YYYY")}</h3>
				<h3>{dayjs(`${AuthorProfile.updatedAt}`).format("DD/MM/YYYY")}</h3>
				<h3>{AuthorProfile?.email}</h3>
				{AuthorProfile.picture?.url ? (
					<div className='author-image'>
						<Image
							src={AuthorProfile.picture.url}
							layout='fill'
							alt={AuthorProfile.name}></Image>
					</div>
				) : null}

				<ul className='listed-articles'>
					{AuthorAssets &&
						AuthorAssets.map((article, index) => (
							<Link
								href={`/${article.category.toLowerCase()}/${article.slug}`}
								key={article.slug}
								passHref={false}>
								<a>
									<BoxList key={index} article={article} />
								</a>
							</Link>
						))}
				</ul>
			</section>
		</main>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`${API_MONGOOSE_URL}/writers`);
	//const articles = ALL_ARTICLE_ENTRIES;
	const authors = await res.json();
	let slugString = "404";
	const paths = authors.map((item) => ({
		params: { slug: item?.name?.toLowerCase().replace(/\s+/g, "") },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	const resNews = await fetch(`${API_MONGOOSE_URL}/articles`);
	const singleNews = await resNews.json();
	const resAuthors = await fetch(`${API_MONGOOSE_URL}/writers`);
	const authors = await resAuthors.json();
	return {
		props: {
			articles: singleNews,
			authors: authors,
			slug: slug,
		},
	};
}

export default SingleAuthor;
