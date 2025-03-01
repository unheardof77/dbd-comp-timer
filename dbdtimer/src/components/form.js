import './css/form.css';
import { useState } from "react";

export default function Form({survivorName, setsurvivorName, killerName, setkillerName, killerUsed, setkillerUsed}) {

    const inputHandler = (e) =>{
        e.preventDefault();
        switch(e.target.name){
            case'survivorName':setsurvivorName(e.target.value);break;
            case'killerName':setkillerName(e.target.value);break;
            case'killerUsed':setkillerUsed(e.target.value);break;
            default: break;
        }
    }
    return (
        <section>
        
        <form>
            <label>
                Survivor Name:
                <input name='survivorName' type="text" value={survivorName} onChange={inputHandler} />
            </label>
            <label>
                Killer Name:
                <input name='killerName' type="text" value={killerName} onChange={inputHandler} />
            </label>
            <label>
                Killer Used:
                <input name='killerUsed' type="text" value={killerUsed} onChange={inputHandler} />
            </label>

        </form>
        </section>
    );
    }