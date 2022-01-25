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
import { API_URL,API_MONGOOSE_URL } from './comps/config'
import { useQuery } from "react-query";
import theme from './theme/theme';
import { ThemeProvider } from '@material-ui/core'

const Home: NextPage = ({news}) => {
  console.log("news==>",news)
  
console.log("news==>",news)

   const sportNews = news.filter(item => item.category?.name ==="sport");
   const scienceNews = news.filter(item => ((item.category?.name ==="science") || (item.category?.name ==="nature" )));
   const cultureNews= news.filter(item => ((item.category?.name ==="culture")));
   const natureNews= news.filter(item => ((item.category?.name ==="nature")));
   
   // sort by value
  console.log("Sciencenews",scienceNews)
  scienceNews.sort(function(a, b) {
    const keyA = new Date(a.createdAt),
    keyB = new Date(b.createdAt);
  
    // nulls sort before anything else
    if (a.length === 0 || b.length === 0) return -1;
  
    // Compare the 2 dates
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
  });


   const headlineNews = news.filter(item => item.category?.name ==="news");
 
  
  return (
    <ThemeProvider theme={theme}>
      <main>
      <h1 >Headlines and Science</h1>
  <Grid container spacing={2} px={2} marginLeft={0}>
    {scienceNews.slice(0, 4).map((item):any=>( 
      <Grid key={item.id} item xs={12}  sm={6} md={6}  lg={6} xl={4}>
										 <NewsCard key={item.id}  card={item}/>
    </Grid>
))}
</Grid> 

<h2>Sport News</h2>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {sportNews.map((item):any=>( 
    <Grid key={item.id} item xs={6}>
										 <NewsCard key={item.id}  card={item}/>
  </Grid>))}
</Grid> 

<h3>Cultural and Musical Highlights</h3>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {cultureNews.map((item):any=>( 
    <Grid key={item.id} item xs={6}>
										 <NewsCard key={item.id}  card={item}/>
  </Grid>))}
</Grid>

<h3>Nature and gardening news</h3>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {natureNews.map((item):any=>( 
    <Grid key={item.id} item xs={6}>
										 <NewsCard key={item.id}  card={item}/>
  </Grid>))}
</Grid> 

</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      </ThemeProvider>
    
  )
}

export async function getStaticProps() {

  //const  res=await fetch(`${API_URL}/api/news`);
  const  res=await fetch(`${API_MONGOOSE_URL}/articles`);
  const news =await res.json();
return          {
  props: {news},
}
  
}


export default Home
