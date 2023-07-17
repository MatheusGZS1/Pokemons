import Image from 'next/image'
import styles from './home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
   <>
<div className={styles.head}>
<h1 className={styles.head}>AnimeView</h1>
</div>

    

<div className={styles.container}>
    <div className={styles.card}>
      
            <Image src={`/images/home.png`}
                        width="612"
                        height="484"
            alt="home pokemon"/>

            <p className={styles.id}>Pokemons</p>
            <h3 className={styles.title}>Informações sobre pokemons</h3>
            <Link href={`/pokemon/`} className={styles.btn}>
            Pokemons
            </Link>
        </div>

        <div className={styles.card}>

        <Image src={`/images/home-naruto2.png`}
                        width="612"
                        height="484"
            alt="home naruto"/>


      <p className={styles.id}>Naruto</p>
      <h3 className={styles.title}>Informações sobre Naruto</h3>
      <Link href={`/naruto/`} className={styles.btn}>
      Naruto
      </Link>
  </div>

  </div>

   </>

  )
}
