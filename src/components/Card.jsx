function Card ({character}) {
    return(
        <div className="card">
            <h2>{character.name || character.title}</h2> {/* Title for planets/starships */}
            {character.height && <p>Height: {character.height} cm</p>}
            {character.birth_year && <p>Birth Year: {character.birth_year} kg</p>}
            {character.model && <p>Model: {character.model}</p>} {/* Starships */}
            {character.terrain && <p>Terrain: {character.terrain}</p>} {/* Planets */}
        </div>
    )
}

export default Card