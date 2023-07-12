"use client"

import Image from 'next/image'
import styles from '../Pokemons.module.css'
import Card from '../components/Card';

export default async function Pokemons() {

    const maxPokemons = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon'

    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const poke = await res.json()

    poke.results.forEach((item,index) => {
        
        item.id = index +1

    });

    console.log(poke)

  return (

   <>

        <div className={styles.title_container}> 
            <h1 className={styles.title}>Poke<span>Next</span></h1>

            <Image src="/images/pokeball2.png" width="50" height="50"></Image>
        </div>

    <div className={styles.pokemon_container}>
    {poke.results.map((pokes)=>(
        <Card key={pokes.id} pokemon={pokes}/>
      // <p key={pokes.id}>{pokes.name}</p> 
    ))}
    </div>

   </>

  )
}
