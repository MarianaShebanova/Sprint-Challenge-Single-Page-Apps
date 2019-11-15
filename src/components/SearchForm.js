import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CharacterCard from "./CharacterCard";

 export default function SearchForm(props) {
    // searchTerm will save the data from the search input on every occurance of the change event.
     const [searchTerm, setSearchTerm] = useState("");
    // searchResults is used to set the search result.
    const [searchResults, setSearchResults] = useState([]);
     console.log(props.items);
    useEffect(() => {
        const results = props.items.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    }, [searchTerm]);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
    return (
        <div className="App">
            <form>
                <div className="search">
                <label htmlFor="name">Search:</label>
                <input
                    id="name"
                    type="text"
                    name="textfield"
                    placeholder="Search"
                    onChange={handleChange}
                    value={searchTerm}
                />
                </div>
            </form>
            <div className="character-list">
                {searchResults.map(character => (
                    <CharacterCard character={character} />
                ))}
            </div>
        </div>
    );
}

