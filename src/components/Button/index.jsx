import React from 'react'
import "./styles.scss";

export default function index({onClick}) {
    return (
        <div>
            <button className="bubbly-button" onClick={onClick}>Buscar Pokémon</button>
        </div>
    )
}
