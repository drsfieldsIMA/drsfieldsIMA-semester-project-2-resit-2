import React from 'react'
import Head from 'next/head'
import { Grid } from '@mui/material'
import Link from 'next/link'
import NewsCard from 'pages/comps/common/NewsCard'
import { API_URL } from 'pages/comps/config'
import Hero from './comps/common/Hero'

export default function Science({news}) {
  const scienceNews = news.filter(item => ((item.category?.name ==="science")));
   console.log("science news==>", scienceNews)
  return (
    <>
    <Head>
      <title>ScienceNews App</title>
      <meta name="description" content='Welcome to the Science news"'></meta>
    </Head>
    <Hero title="Here is your science news" imageSrc="/images/science_hero.png" classString="hero_banner"/>
    <div>
    <Link href="/"><a>Back to Home</a></Link>
    <h2>Science Page</h2>
    </div>
    <Grid container spacing={2} px={2} marginLeft={0}>
    {scienceNews.map((item):any=>( 
      <Grid key={item.id} item xs={12}  sm={6} md={4}  lg={3} xl={2}>
         <Link key={item.id} href={`/sport/${item.slug}`}>
           <a >
										 <NewsCard key={item.id}  card={item}/>
					</a>
		</Link>
    </Grid>
))}
</Grid>

    </>
  )
}


export async function getStaticProps() {

  //const  res=await fetch(`${API_URL}/api/news`);
  const  res=await fetch(`${API_URL}/articles`);
  const news =await res.json();
return          {
  props: {news},
}
  
}