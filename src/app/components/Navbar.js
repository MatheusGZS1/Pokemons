import Link from "next/link";
import Image from "next/image";
import styles from '../Navbar.module.css'

export default function Navbar(){

return(

    <nav className={styles.navbar}>
        <div className={styles.logo}>

          <image src="/images/pokeball2.png" 
          width="30" 
          height="30"
           alt="Pokeball">
           </image>

           <image src="/images/kunai.png" 
          width="30" 
          height="30"
           alt="PokeNext">
           </image>

           <h1>AnimeView</h1>
        </div>

        <ul className={styles.link_items}>
            <li>
               <Link href="/">Home</Link>
            </li>
             <li>
               <Link href="/pokemon">Pokemons</Link>
            </li>
            <li>
               <Link href="/naruto">Naruto</Link>
            </li>
            <li>
               <Link href="/about">Sobre</Link>
            </li>

        </ul>

    </nav>
)

}