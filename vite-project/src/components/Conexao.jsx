import React, {useEffect, useState} from 'react'

export default function Conexao(){

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => { 
        const fetchCharacters = (name) => {   
            setLoading(true);
               fetch(`https://rickandmortyapi.com/api/character/?page=1`)
                 .then(response => response.json())
                 .then(data => {
                   setCharacters(data.results || []);
                   setLoading(false);
                 })
                 .catch(error => {
                   setError(error);
                   setLoading(false);
                 });
             };
             fetchCharacters();
            }, [])
        return(
            <div>
                {loading && <p>Carregando...</p>}
                {error && <p>Erro: {error.message}</p>}
                <ul>
                    {characters.map(character => (
                        <li key={character.id}>
                            <h2>{character.name}</h2>
                            <img src={character.image} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
        )
}