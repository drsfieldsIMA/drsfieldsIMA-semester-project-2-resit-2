/** @format */

import React, { ReactElement } from "react";
import Head from "next/head";
import Header from "./navigation/Header";
import PropTypes from "prop-types";
import { HeadingParams } from "../utils/typeLibrary";
import useSWR, { SWRConfig } from "swr";
import { API_HEROKU_URL } from "../utils/env";
import { isError } from "react-query";
import searchArticles from "./common/lists/renderResultList";
import ArticleSearchResult from "../comps/ArticlesSearchResults";
import nookies, { parseCookies } from "nookies";
import { AuthProvider, useAuth } from "./config/AuthContext";
import useLocalStorage from "./config/useLocalStorage";
import theme from "../theme/theme";
import { ThemeProvider } from "@material-ui/core";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import ReadingProgress from "utils/readingProgress";
import { createRef } from "react";

export const fetcher = (args) =>
	fetch(args).then((response) => response.json());

type QueryParams = {
	title: string;
	keywords: string;
	descrip: string;
	gsv: string;
	children: any;
};

export default function Layout({ title, keywords, descrip, gsv, children }) {
	const args: any = `${API_HEROKU_URL}/articles`;
	const { data, error } = useSWR(args, fetcher, {
		loadingTimeout: 2000,
	});
	const target: any = React.createRef();
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Head>
					<title>{title}</title>
					<meta name='description' content={descrip}></meta>
					<meta name='keywords' content={keywords}></meta>
					<meta name='google-site-verification' content={gsv}></meta>
				</Head>
				<Header articles={data}></Header>
				<ReadingProgress target={target} />
				<main ref={target}>
					<div className='container'>{children}</div>
				</main>
				<footer className={styles.footer}>
					<a
						href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'>
						Powered by{" "}
						<span className={styles.logo}>
							<Image
								src='/vercel.svg'
								alt='Vercel Logo'
								width={72}
								height={16}
							/>
						</span>
					</a>
				</footer>
			</div>
		</ThemeProvider>
	);
}

export function Heading({ color, size, content }: HeadingParams): any {
	const VariableHeading: string | any = `h${size}`;
	return (
		<div className='heading-block'>
			<VariableHeading style={{ color }}>{content}</VariableHeading>
		</div>
	);
}

Heading.propTypes = {
	size: PropTypes.string,
	content: PropTypes.string.isRequired,
	color: PropTypes.string,
	VariableHeading: PropTypes.node,
	articles: PropTypes.any,
};

Layout.defaultProps = {
	title: " Level up news  | All thats Positive ",
	descrip:
		"Be informed about local news, leverage positive information and your increase your profile",
	keywords: "Current affairs, Local News, Science, Sport, Politics, events ",
	gsv: "wenrVQYITXvXIH9sNnSmiBaOZ941XPPzAvnupQrq6RQ",
};
