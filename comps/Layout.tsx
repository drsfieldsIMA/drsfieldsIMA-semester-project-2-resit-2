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
import { createRef } from "react";
import NextLink from "next/link";
import { Button } from "@mui/material";
import PermContactCalendar from "@mui/icons-material/PermContactCalendar";

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

				<main>
					<div className='container'>{children}</div>
				</main>

				<footer className={styles.footer}>
					<div style={{ marginLeft: "5rem" }}>
						<h5>Powered by Positivity </h5>
					</div>
					<NextLink href='/contact' passHref={false}>
						<Button
							component='a'
							startIcon={<PermContactCalendar fontSize='small' />}>
							Contact Page
						</Button>
					</NextLink>
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
			<p> [Powered by Positivity]</p>
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
	title: " Level up news  | Powered by Positivity ",
	descrip:
		"Be informed about local news, leverage positive information and your increase your profile",
	keywords:
		"Breaking News, Current headlines, Local News, Science, Sport, Culture and Nature, musical events ",
	gsv: "wenrVQYITXvXIH9sNnSmiBaOZ941XPPzAvnupQrq6RQ",
};
