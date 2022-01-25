import { useRouter } from 'next/router'
import { API_URL,API_MONGOOSE_URL } from '../comps/config'
import Link from 'next/link';
import Image from 'next/image';
import { Box,Card,Stack, Divider,Item } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function singleScience({single}) {
  const maxL=single.content.length
  console.log("maxL",maxL)
  const one = single.content.slice(1,2);
  console.log("maxL",one)
  const two = single.content.slice(2,maxL);
  return (
    <>
    <img marginTop={0} src={single.image?.url} width={200} height={600} className="single-image"></img>
<Box>
      <Card className="singleNews">
      <h1>{single.title}</h1>
      <h2>{single.author?.name}</h2>
      <div className="singleNews-para" >

       <span className="firstLetter">{one}</span>
       {two}
      </div>
      </Card>
    </Box>
    </>
  )
}

export async function getServerSideProps({query:{slug}}) {
  //const  res=await fetch(`${API_URL}/api/news`);
  console.log("slug==>",slug)
  const  res=await fetch(`${API_MONGOOSE_URL}/articles/${slug}`);
  console.log("res==>",res)
  const singleNews= await res.json();
  console.log("res==>",res)
   return {
    props: {
      single:singleNews,
    },
  };
}
 
