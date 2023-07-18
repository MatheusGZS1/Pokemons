
import Image from "next/image"
import Link from "next/link"
import styles from "../Card.module.css"

export default function Card({naruto}){

    return(
        <div className={styles.card}>
            <Image src={`${naruto.images}`}
            width="120"
            height="120"
            alt="{naruto.name}"/>

            <p className={styles.id}>#{naruto.id}</p>
            <h3 className={styles.title}>{naruto.name}</h3>
            <Link href={`/naruto/${naruto.id}`} className={styles.btn}>
            Detalhes
            </Link>
        </div>
    )
}