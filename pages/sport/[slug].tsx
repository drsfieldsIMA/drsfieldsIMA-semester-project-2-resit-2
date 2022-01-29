/** @format */

import { useRouter } from "next/router";
import { API_MONGOOSE_URL } from "utils";
import { ALL_ARTICLE_ENTRIES } from "constants/articleEntries";

export default function SingleSport() {
	const router = useRouter();
	console.log("router===>", router.query.slug);
	return (
		<div>
			<h1>Singular Sport Page</h1>
			<h2>{router.query.slug}</h2>
		</div>
	);
}

export async function getStaticPaths() {
	/* const res = await fetch(`${API_MONGOOSE_URL}/articles`);
	const articles = await res.json(); */
	const articles = ALL_ARTICLE_ENTRIES;
	const sportNews = articles.filter((item) => item.category === "sport");
	const paths = sportNews.map((item) => ({
		params: { slug: item.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	//const  res=await fetch(`${API_URL}/api/news`);
	// const res = await fetch(`${API_MONGOOSE_URL}/articles/${slug}`);
	// const singleNews = await res.json();
	const ith = ALL_ARTICLE_ENTRIES.findIndex((x) => x.slug === slug);
	const singleNews = ALL_ARTICLE_ENTRIES[ith];
	return {
		props: {
			single: singleNews,
		},
	};
}
