import { useState } from "react"


const CookBody = ({frase}) =>{

    return(
        <article>
            <h1>Galleta de la Fortuna</h1>
            <section className="background">
               
               <p>"{frase.phrase}"</p>
               <p>Autor: {frase.author}</p>
            </section>
            

        </article>
    )
}

export default CookBody
