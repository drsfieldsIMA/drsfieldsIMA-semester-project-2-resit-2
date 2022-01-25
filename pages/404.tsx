import {FaExclamationTriangle} from "react-icons/fa"
import Link from "next/link"
import { Styles } from "@material-ui/core/styles/withStyles"

export default function NotFound(){

  return(
      <div>

        <h1><FaExclamationTriangle/>404</h1>
        <h4>Sorry, Nothing is here </h4>
        <Link href="/"> Go back home</Link>
      </div>

  )


}