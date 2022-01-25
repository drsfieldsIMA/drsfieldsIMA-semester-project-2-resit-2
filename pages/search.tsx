import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Layout from './comps/Layout'
import NewsCard from './comps/common/NewsCard'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { API_URL } from './comps/config'
import { useQuery } from "react-query";
import useDebounce from "../utils/useDebounce";
import searchArticles from 'utils/searchArticles';
import ArticlesSearchResult from './comps/ArticlesSearchResults';
import Dropdown from './comps/navigation/Dropdown'
import { MultiSelect } from 'react-multi-select-component'
import { ALL_ARTICLE_ENTRIES } from 'constants/articleEntries'

const searchCategories = (query: Array): Promise<string[]> => {
  return new Promise((resolve) => {
    const matchingCategories = ALL_ARTICLE_ENTRIES.filter(({ title,content,category,author }) =>
    category.toLowerCase().includes(query[0].value.toLowerCase()) || category.toLowerCase().includes(query[1]?.value.toLowerCase())  || category.toLowerCase().includes(query[2]?.value.toLowerCase()) || category.toLowerCase().includes(query[3]?.value.toLowerCase()) || category.toLowerCase().includes(query[4]?.value.toLowerCase()) 
    ).map(({ title }) => title);
    // Artificial timeout for demonstration purposes
    setTimeout(() => {
      resolve(matchingCategories);
    }, 1000);
  });
};

const Search: NextPage = ({news}) => {

  const options = [
    { label: "Science", value: "science" },
    { label: "Sport", value: "sport" },
    { label: "Culture", value: "culture" },
    { label: "Nature", value: "nature" },
  ];
   
  const [selected, setSelected] = useState([]);
   
  const [searchValue, setSearchValue] = useState([]);

  const handleChange = (selected) => {
    console.log("selected==>",selected)
    setSearchValue(selected)
	}

  const debounedSearchValue = useDebounce(searchValue, 900);

 /*  const { isLoading, isError, isSuccess, data } = useQuery(
    ["searchArticles", debounedSearchValue],
    () => searchArticles(debounedSearchValue),
    {
      enabled: debounedSearchValue.length > 0
    }
  ); */

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["searchCategories", debounedSearchValue],
    () => searchCategories(debounedSearchValue),
    {
      enabled: debounedSearchValue.length > 0
    }
  );

  const renderResult = () => {
    if (isLoading) {
      return <div className="search-message"> Loading... </div>;
    }

    if (isError) {
      return <div className="search-message">Something went wrong</div>;
    }

    if (isSuccess) {
      return <ArticlesSearchResult articles={data} />;
    }

    return <></>;
  };

  return (
    <div className="home">
      <h1>Search by keywowrds Select Categories or Authors </h1>
      <pre>{JSON.stringify(selected)}</pre>
      <h1>Search Some Good News</h1>
{/*     <input
        type="text"
        onChange={({ target: { value } }) => {setSearchValue(value)
          console.log("value==>",value)}}
        value={searchValue}
        placeholder='Keyword'
      />
      {renderResult()} */}
     <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={handleChange}
        labelledBy={"Select"}
      />
      {renderResult()}
    </div>
  )
}

export async function getStaticProps() {

  const  res=await fetch(`${API_URL}/articles`);
  const news =await res.json();
return          {
  props: {news},
}
  
}


export default Search
