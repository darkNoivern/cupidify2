import React, { useEffect, useState } from 'react';
import AnimatedNumber from "animated-number-react";
import party from "party-js";
import '../styles/lovecalculator.css'

const LoveCalculator = () => {

    const [name,setName] = useState('');
    const [cname,setCName] = useState('');
    const [unlock, setUnlock] = useState(false);
    const [num, setNum] = useState(0);
    const [fixColor, setFixColor] = useState("text-valentine");
    

    const animate = () => {
        let xi = Math.floor((Math.random()*101));
        if(name==='Mahadev' || cname==='Mahadev'){
            if(!((name==='Mahadev' && cname==='Shriti') || (cname==='Mahadev' && name==='Shriti'))){
                xi = 0;
            }
        }

        if(xi<=30){
            setFixColor("text-danger");
        }
        else if(xi<=60){
            setFixColor("text-warning");
        }
        else if(xi<=90){
            setFixColor("text-lime");
        }
        else {
            setFixColor("text-success");
            setInterval(2000);
            party.confetti(document.querySelector('.animate'), {
                count: party.variation.range(20, 40),
            });
        }
        setNum(xi);
        setUnlock(false);
    }

    const formatValue = (value) => {
        return (`${value.toFixed(0)} %`);
    }

    const myname = (event) => {
        setUnlock(true);
        setName(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1));
    }
    
    const mycname = (event) => {
        setUnlock(true);
        setCName(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1));
    }

    return (
        <>
            <div className="lcbg">
                <div className="row mx-0 my-5">
                    <div className="col col-6 flexy">
                        <input 
                        type="text" 
                        value={name}
                        onChange={myname}
                        className='form-control mouserat text-dark lover-input' 
                        placeholder='Enter your name' />
                    </div>
                    <div className="col col-6 flexy">
                        <input 
                        type="text" 
                        value={cname}
                        onChange={mycname}
                        className='form-control mouserat text-dark lover-input' 
                        placeholder="Enter Crush's name" />
                    </div>
                </div>
                <div className="flexy my-5">
                { 
                    ((name!=='') && (cname!=='') && unlock) ? 
                    <button onClick={() => { 
                        animate();    
                        }} className="button ui bg-valentine text-white">
                        Click
                    </button>
                    :
                    <button onClick={() => { animate(); }} disabled className="button ui bg-valentine text-white">Click</button>
                }
                </div>
                <div className="row mx-0 my-5 sp-section">
                    <div className="col col-12 col-md-4 flexy text-valentine lovername">{(name === '') ? `Your Name` : name}</div>
                    <div className="col col-12 col-md-4 flexy">
                        <AnimatedNumber className={`animate ${fixColor}`} value={num} duration={1000} formatValue={formatValue} />
                    </div>
                    <div className="col col-12 col-md-4 flexy text-valentine lovername">{(cname === '') ? `Crush's Name` : cname}</div>
                </div>
            </div>
        </>
    )
}

export default LoveCalculator