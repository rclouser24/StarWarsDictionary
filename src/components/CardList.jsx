import { useState, useEffect } from "react";
import Card from "./Card";

const url = "https://swapi.py4e.com/api/";

function CardList({ endpoint }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${url}${endpoint}/`) 
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setItems(data.results || [])) 
      .catch((error) => console.error("Error fetching data:", error));
  }, [endpoint]); 
  return (
    <>
      <h1>Star Wars Encyclopedia</h1>
      <div className="card-list">
        {items.map((item) => (
          <Card key={item.url} character={item} />
        ))}
      </div>
    </>
  );
}

export default CardList;
