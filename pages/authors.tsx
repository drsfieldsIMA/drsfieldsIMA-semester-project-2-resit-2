/** @format */
import API_URL, { API_MONGOOSE_URL } from "utils";
import { Heading } from "comps/Layout";
import { HeadingDefaults } from "utils/typeLibrary";
import { ArticleParams } from "../utils/typeLibrary";
import { Button } from "@mui/material";
import Link from "next/link";
import ArrowBackSharp from "@material-ui/icons/ArrowBackSharp";
import Image from "next/image";
import BoxList from "@/comps/common/lists/BoxList";

type AuthorParams = {
	id: object | Array<string> | string;
	name: object | Array<string> | string;
};

export default function AuthorsPage({
	authors,
	articles,
}: {
	authors: Array<any>;
	articles: Array<any>;
}) {
	const firstAuthorAssets: Array<string> = articles.filter((article) =>
		article?.author?.toLowerCase().includes(authors[0].name?.toLowerCase())
	);

	//console.log("Authors Assets==>", firstAuthorAssets);
	return (
		<main>
			<Button component='a' startIcon={<ArrowBackSharp fontSize='small' />}>
				Home
			</Button>
			{authors.map((author: Array<any> | any) => (
				<section key={author.id} className={`section-${author.name}`}>
					<h1 key={`${author.name}`}>{author.name}</h1>
					<div className='author-image'>
						<Image
							src={author.picture?.url}
							layout='fill'
							alt={author.name}></Image>
					</div>
					<ul className='listed-articles'>
						{articles &&
							articles
								.filter((article: Array<any> | any) =>
									article?.author
										?.toLowerCase()
										.includes(author.name?.toLowerCase())
								)
								.map((article, index) => (
									<Link href={`/${article.slug}`} key={article.slug} passHref>
										<BoxList key={index} article={article} />
									</Link>
								))}
					</ul>
				</section>
			))}
		</main>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_MONGOOSE_URL}/writers`);
	const authors = await res.json();
	const resArticles = await fetch(`${API_MONGOOSE_URL}/articles`);
	const articles = await resArticles.json();
	return {
		props: { authors, articles },
	};
}
