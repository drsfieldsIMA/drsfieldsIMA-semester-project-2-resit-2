/** @format */

import React, { ReactElement } from "react";
import Head from "next/head";
import Header from "./navigation/Header";
import PropTypes from "prop-types";
import { HeadingParams } from "../utils/typeLibrary";
import useSWR, { SWRConfig } from "swr";
import { API_MONGOOSE_URL } from "utils";
import { isError } from "react-query";
import searchArticles from "./common/lists/renderResultList";
import ArticleSearchResult from "../comps/ArticlesSearchResults";
import nookies, { parseCookies } from "nookies";
import { AuthProvider, useAuth } from "./config/AuthContext";
import useLocalStorage from "./config/useLocalStorage";

export const fetcher = (args) =>
	fetch(args).then((response) => response.json());

type QueryParams = {
	title: string;
	keywords: string;
	descrip: string;
	gsv: string;
	children: any;
};

export default function Layout(
	{ title, keywords, descrip, gsv, children },
	cookies
) {
	const args: any = `${API_MONGOOSE_URL}/articles`;
	const { data, error } = useSWR(args, fetcher, {
		loadingTimeout: 2000,
	});
	console.log("Layout cookies==>", cookies);
	console.log("Layout title==>", title);
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={descrip}></meta>
				<meta name='keywords' content={keywords}></meta>
				<meta name='google-site-verification' content={gsv}></meta>
			</Head>
			<Header articles={data} cookies={cookies}></Header>
			<div className='container'>{children}</div>
		</div>
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

export async function getServerSideProps(ctx) {
	// Parse
	const cookies = window.localStorage.getItem("auth").jwt;
	// Destroy
	// nookies.destroy(ctx, 'cookieName')

	return { props: { cookies: cookies } };
}

Heading.propTypes = {
	size: PropTypes.string,
	content: PropTypes.string.isRequired,
	color: PropTypes.string,
	VariableHeading: PropTypes.node,
	articles: PropTypes.any,
	cookies: PropTypes.any,
};

Layout.defaultProps = {
	cookies: null,
	title: " Level up news  | All thats Positive ",
	descrip:
		"Be informed about local news, leverage positive information and your increase your profile",
	keywords: "Current affairs, Local News, Science, Sport, Politics, events ",
	gsv: "wenrVQYITXvXIH9sNnSmiBaOZ941XPPzAvnupQrq6RQ",
};
