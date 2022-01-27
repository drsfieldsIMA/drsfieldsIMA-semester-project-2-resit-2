import PropTypes from "prop-types";
import {Heading} from "../comps/Layout";
import Link from "next/link"
import { useState, useContext, ReactElement } from "react";
import AuthContext from  "../comps/config/AuthContext"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useLocalStorage from "../comps/config/useLocalStorage";
import { parseCookies  } from 'nookies';
import API_URL from '../../utils/index'

type HeadingParams = {
  color?: string;
  size?:string;
  content?:string;
  };

  const HeadingDefaults: HeadingParams = {
    color: "black",
    size: "1",
    content: ""
}

export default function AdminIndex({news,HeadingDefaults}:any):ReactElement {
 const articles:any=news;

	return (
		<>
				<Heading size ="1" content="Admin Page"  color={HeadingDefaults.color}/>

			<nav className="dashboard">
			Sections: <Link href="/admin/articles"><a>Manage your articles</a></Link>
		</nav>
    <Heading size="3" content="Articles" color={HeadingDefaults.color} />
		<div>
      <ul className="whiteText">
	{articles && articles.map((item:any) => (
			<a key={item.Slug} className="single-article">	<h3 key={item.slug}>{item.slug}</h3> </a>
  ))} 
		</ul>
    </div>
		</>
	)
}

export async function getStaticProps() {
  const  res = await fetch(`${API_URL}/articles`);
  const news:any  = await res.json();
	return {
    props: {news,
		HeadingDefaults}, // will be passed to the page component as props
  }
}

AdminIndex.propTypes = {
	children: PropTypes.node,
	news: PropTypes.any,
	HeadingDefaults:PropTypes.any
};