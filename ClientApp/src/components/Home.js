import React from "react"
import {Link} from "react-router-dom"

function Home(){
    return(    
        <div className="home">
            <div className="home_content">                
                <div className="home_header">
                    <h1>Did you know?</h1>
                    <h2>People are suffering</h2>
                </div>
                <div className="home_text">
                    <p>They are 1000 of.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="help_btn">
                <Link className="link" to="./about">How can i help?</Link>
            </div>
        </div>
    )
}

export default Home