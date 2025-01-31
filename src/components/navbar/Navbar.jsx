import React from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'
import {GoChecklist} from 'react-icons/go'
import './navbar.css'

function Navbar({ setCurrentPage }) {
    return (
        <nav>
                <span onClick={() => setCurrentPage("about")}><AiOutlineHome/></span>
                <span onClick={() => setCurrentPage("experience")}><FaLaptopCode/></span>
                <span onClick={() => setCurrentPage("myprojects")}><GoChecklist/></span>
        </nav>
    );
}

export default Navbar;
