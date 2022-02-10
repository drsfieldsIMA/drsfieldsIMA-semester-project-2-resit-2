/** @format */

export type ArticleParams = {
	id: Array<string> | string;
	title: Array<string> | string;
	slug: Array<string> | string;
	date: Array<string> | string;
	time: Array<string> | string;
	image: Array<string> | string;
	content: Array<string> | string;
	category: Array<string> | string;
	author: Array<string> | string;
};

export type HeadingParams = {
	color?: string;
	size?: string;
	content?: string;
};

export const HeadingDefaults: HeadingParams = {
	color: "#33069e",
	size: "1",
	content: "",
};
