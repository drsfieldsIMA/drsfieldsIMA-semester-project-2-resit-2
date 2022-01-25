import PropTypes from "prop-types";
import {Heading} from "../comps/Layout";
import Link from "next/link"
import { useState, useContext } from "react";
import AuthContext from  "../comps/config/AuthContext"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useLocalStorage from "../comps/config/useLocalStorage";
import { parseCookies  } from 'nookies';
import { API_URL } from '../comps/config'

export default function AdminIndex({news}) {
 const articles=news;
	return (
		<>
				<Heading content="Admin Page" />
			<nav className="dashboard">
			Sections: <Link href="/admin/articles"><a>Manage your articles</a></Link>
		</nav>
    <Heading size="3" content="Articles" />
		<div>
      <ul className="whiteText">
	{articles && articles.map((item) => (
			<a key={item.Slug} className="single-article">	<h3 key={item.slug}>{item.slug}</h3> </a>
  ))} 
		</ul>
    </div>
		</>
	)
}

export async function getStaticProps() {
  const  res = await fetch(`${API_URL}/articles`);
  const news  = await res.json();
	return {
    props: {news}, // will be passed to the page component as props
  }
}

AdminIndex.propTypes = {
	children: PropTypes.node,
};