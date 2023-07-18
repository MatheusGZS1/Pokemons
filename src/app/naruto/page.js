
import CardNaruto from '../components/CardNaruto';
import styles from '../Naruto.module.css'
import Image from 'next/image';

export default async function naruto(){

    //const api = 'https://api.narutodb.xyz/character'

    const maxPersonagens = 251;

    const res = await fetch (`https://api.narutodb.xyz/character/?limit=${maxPersonagens}`);
    const data = await res.json();

    console.log(data);

    return(
        <>
        <div className={styles.title_container}> 
            <h1 className={styles.title}>Anime<span>View</span></h1>

            <Image src="/images/pokeball2.png" width="50" height="50"></Image>
            <Image src="/images/kunai.png" width="50" height="50"></Image>
        </div>

        <div className={styles.naruto_container}>
           {data.characters.map((infos)=>(
              <CardNaruto key={infos.id} naruto={infos}/>
              // <p key={infos.id}>{infos.name}</p>  
            ))}
            </div>
        </>
    )



}