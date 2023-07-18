
import Image from "next/image";
import styles from '../../narutoID.module.css'

export default async function narutoID({params}){


    const res = await fetch (`https://api.narutodb.xyz/character/${params.id}`);
    const data = await res.json();

    console.log(data);

    return(
        <>
            <div className={styles.container}>

            <div className={styles.dados}>  

                <Image src={`${data.images}`}
                width="300"
                height="300"
                alt="{personagem.name}"/>


                    <div>
                    <h1 className={styles.title}>{data.name}</h1> 

                    <div>
                        <ul>
                        <div>
                        <li>Aniversario:{data.personal.birthdate}</li>
                        <li>sexo:{data.personal.sex}</li>
                        <li>Altura:{JSON.stringify(data.personal.height)}</li>
                        <li>Peso:{JSON.stringify(data.personal.weight)}</li>
                        <li>Familia:{JSON.stringify(data.family)}</li>
                        </div>
                        </ul>

                        </div>  
                    </div>

            </div>

            </div>
        </>
    )

}