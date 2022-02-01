/** @format */

import React, { ReactElement } from "react";
import Head from "next/head";
import Header from "./navigation/Header";
import PropTypes from "prop-types";

type QueryParams = {
	title: string;
	keywords: string;
	descrip: string;
	gsv: string;
	children: any;
};

export default function Layout({
	title,
	keywords,
	descrip,
	gsv,
	children,
}: QueryParams) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={descrip}></meta>
				<meta name='keywords' content={keywords}></meta>
				<meta name='google-site-verification' content={gsv}></meta>
			</Head>
			<Header></Header>
			<div className='container'>{children}</div>
		</div>
	);
}

type HeadingParams = {
	color?: string;
	size?: string;
	content?: string;
};

export function Heading({ color, size, content }: HeadingParams): any {
	const VariableHeading: string | any = `h${size}`;
	return <VariableHeading style={{ color }}>{content}</VariableHeading>;
}

Heading.propTypes = {
	size: PropTypes.string,
	content: PropTypes.string.isRequired,
	color: PropTypes.string,
	VariableHeading: PropTypes.node,
};

Layout.defaultProps = {
	title: " Level up news  | All thats Positive ",
	descrip:
		"Be informed about local news, leverage positive information and your increase your profile",
	keywords: "Current affairs, Local News, Science, Sport, Politics, events ",
	gsv: "wenrVQYITXvXIH9sNnSmiBaOZ941XPPzAvnupQrq6RQ",
};
