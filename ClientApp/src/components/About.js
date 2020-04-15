import React from "react"
import { Link } from "react-router-dom"

function About(){
    return(
        <div>
            <h1>By buying our products toy help people</h1>
            <p>The money from our products let you help the people that are suffering</p>
            <Link className="about_link" to="./shop">Here's a selection of products</Link>
        </div>
    )
}

export default About