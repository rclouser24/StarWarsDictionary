function Navbar ({ setEndpoint }) {
    return(
        <div>
            <button onClick={() => setEndpoint('people')} className="people">All Characters</button>
            <button onClick={() => setEndpoint('starships')}className="starships">All Starships</button>
            <button onClick={() => setEndpoint('planets')} className="planets">All Planets</button>
        </div>
    )
}

export default Navbar