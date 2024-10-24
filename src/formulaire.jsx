import { useState } from "react";
function Formulaire({ville,pays}) {
    
    const [nom,setNom]=useState("");
    const [prenom,setPreNom]=useState("");
   
    const handleSubmit=(event)=>{
        event.preventDefault(); 
        console.log("Nom et Prénom : ",nom, prenom)
    }
        return ( 
        <>
        <div>ville : {ville}</div>
        <div>pays : {pays}</div>
        Nom : 
        <input 
        type="text" 
        value={nom}
        onChange={(event)=>setNom(event.target.value)}
        />
        <div>
          {
            nom ? <span>Vous êtes {nom} </span>:null
          }
            
        </div>
        Prénom : 
        <input 
        type="text" 
        value={prenom}
        onChange={(event)=>setPreNom(event.target.value)}
        />
        <div>
          {
            prenom ? <span>Vous êtes {prenom} </span>:null
          }
            
        </div>
        <button className="btn btn-success"
        onClick={(event)=>handleSubmit(event)}
        >
        Valider
        </button>
        </>
     );
}

export default Formulaire;