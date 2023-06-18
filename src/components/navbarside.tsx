import styles from './navbarside.module.css'
import {HiHome} from "react-icons/hi"
import {BsBookHalf} from "react-icons/bs"
import {GiNotebook} from "react-icons/gi"
import {MdHistory} from "react-icons/md"
import { AiFillHeart } from "react-icons/ai"
import {IoExitOutline} from 'react-icons/io5'

export default function Navbarside(){
  return(
    <nav className={styles.navbar}>
      <ul className={styles.nav}>
        <li><a href=""><HiHome size="2.5rem" color="#3EB489"></HiHome></a></li>
        <li><a href=""><BsBookHalf size="2.5rem" color="#3EB489" ></BsBookHalf></a></li>
        <li><a href=""><GiNotebook size="2.5rem" color="#3EB489"></GiNotebook></a></li>
        <li><a href=""><MdHistory  size="2.5rem" color="#3EB489"> </MdHistory></a></li>
        <li><a href=""><AiFillHeart size="2.5rem" color="#3EB489"></AiFillHeart></a></li>
        <li><a href=""><IoExitOutline size="2.5rem" color="#3EB489"></IoExitOutline></a></li>
      </ul>
    </nav>

  )
}