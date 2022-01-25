import Link from "next/link"
import Layout from "./comps/Layout"

export default function about() {
  return (
    <div>
      <Layout>
     <h1>About</h1>    
     <Link href="/">Index</Link>
     <p>App that displays positive news stories for our entropic existence</p>
     </Layout>  
    </div>
  )
}
