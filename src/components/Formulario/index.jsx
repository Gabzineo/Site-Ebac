import { use } from "react";
import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario  = () => {

    const  [peso, setPeso] = useState(0);
    const  [altura, setAltura] = useState(0);
    const  [imc, setIMC] = useState(null);

   const calcular = () => {

    if(peso > 0 && altura > 0 ){
        
        const calculo = Math.round(peso / (altura * altura))
        setIMC(calculo)

    }
    
    else {
        setIMC(null)
    }
   }

    return(


    <>
    <div className="container">
 <form className={styles.form}>
        <input type="number" placeholder="Altura (m)" onChange={evento => setAltura (parseFloat((evento.target.value))) }/>
        <input type="number" placeholder="Peso (kg)" onChange={evento =>  setPeso   (parseFloat((evento.target.value))) }/>
        <button onClick={calcular}>Calcular IMC</button>
    </form>
    {imc !== null && (
        <>
        {imc < 16 && <p style={{color: "white"}}>Seu IMC é <b>{imc}</b> você está em magreza grave</p>}
        {imc >= 16 && imc <= 16.9 && <p style={{ color: "white" }}>Seu IMC é <b>{imc}</b>. Você está em magreza moderada.</p>}
        {imc >= 17 && imc <=18.5 && <p style={{ color: "white" }}>Seu IMC é <b>{imc}</b>. Você está em magreza leve.</p>} 
        {imc >= 18.6  && imc <= 24.9  && <p style={{ color: "white" }}>Seu IMC é <b>{imc}</b>. peso ideal.</p>} 
        {imc >= 25 && imc <= 29.9 && <p style={{ color: "white" }}>Seu IMC é <b>{imc}</b>. Você está em sobrepeso</p>} 
        {imc >= 30 && imc <=34.9  && <p style={{ color: "white" }}>Seu IMC é <b>{imc}</b>. obesidade grau I ou severa.</p>} 
        {imc >= 35 && imc <=39.9  && <p style={{ color: "white" }}>Seu IMC é <b>{imc}</b>. obesidade grau II ou severa.</p>} 
        {imc >= 40 && <p style={{ color: "black" }}>Seu IMC é {imc}. Você está c obesidade grau III ou mórbida.</p>} 
        </>

    )}
    </div>
   
    
    </>
    
    )


}

export default Formulario;