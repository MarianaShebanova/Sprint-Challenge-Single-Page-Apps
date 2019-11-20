
import React, { useState, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";

export default function CharacterCard(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    return (
        <div className="characterCard" key={props.character.id}>
            <Link to={`/character/${props.character.id}`}>
            <h1>{props.character.name}</h1>
            </Link>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret className="button">
                Info
        </DropdownToggle>
            <DropdownMenu>
            <DropdownItem >Gender: {props.character.gender}</DropdownItem>
            <DropdownItem >Location: {props.character.location.name}</DropdownItem>
            <DropdownItem >Species: {props.character.species}</DropdownItem>
            <DropdownItem >Status: {props.character.status}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </div>
    );
}
