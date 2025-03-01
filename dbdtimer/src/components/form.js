import './css/form.css';
import { useState } from "react";

export default function Form({}) {
    const [survivorName, setsurvivorName] = useState('');
    const [killerName, setkillerName] = useState('');
    const [killerUsed, setkillerUsed] = useState('');

    return (
        <section>
        
        <form>
            <label>
                Survivor Name:
                <input type="text" value={survivorName} onChange={(e) => setsurvivorName(e.target.value)} />
            </label>
            <label>
                Killer Name:
                <input type="text" value={killerName} onChange={(e) => setkillerName(e.target.value)} />
            </label>
            <label>
                Killer Used:
                <input type="text" value={killerUsed} onChange={(e) => setkillerUsed(e.target.value)} />
            </label>

        </form>
        </section>
    );
    }