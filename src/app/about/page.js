
import Image from "next/image";
import Link from "next/link";
import styles from "../sobre.module.css";



export default function About(){

    return(
        <>


        <div className={styles.sobre}>

                <image src="/images/pokemon1.png" 
                width="328" 
                height="363"
                alt="Pikachu">
                </image>

            <h1>Pagina para visualizar POKEMONS em Next.JS</h1>
            <h1><Link href="/">Voltar</Link></h1>
        </div>
        </>
    )
}