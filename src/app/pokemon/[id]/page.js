import Image from 'next/image'
import styles from '../../pokeID.module.css'
import Card from '../../components/Card';

export default async function PokeID({params}){

 
    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const poke2 = await res2.json();

    console.log(poke2)

    return(
        <>

        <div className={styles.pokemon_container}>
        <h1 className={styles.title}>{poke2.name}</h1>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.id}.png`}
            width="200"
            height="200"
            alt="{pokemon.name}"/>

   

            <div>
                <h3>Número: </h3>
                <p>#{poke2.id}</p>

            </div>

            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    {poke2.types.map((item,index)=>(
                        <span key={index} className={`${styles.type} ${styles['type_'+ item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>

            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Altura:</h4>
                    <p>{poke2.height *10} cm</p>
                </div>

                <div className={styles.data_weight}>
                    <h4>Peso:</h4>
                    <p>{poke2.weight /10} kg</p>
                </div>

            </div>
            
            </div>              
        </>
    )

}