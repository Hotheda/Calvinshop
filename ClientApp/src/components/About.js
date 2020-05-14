import React from "react"
import { Link } from "react-router-dom"

function About(){
    return(
        <div className="about_main">
            <h1>Help people by buying our products</h1>
            <div className="about_section">
                <div className="about_image_container">
                    <img src="/img/About1.jpg"></img>
                </div>
                <p>Donec tristique iaculis ante, nec interdum velit laoreet a. Sed id massa tincidunt, euismod quam a, ultricies nisi. Maecenas nisi ipsum, porta non mollis non, elementum a ipsum. Duis lacinia imperdiet consequat. Pellentesque congue, augue ut ultrices malesuada, ligula sapien iaculis sapien, eget tristique magna ligula eu nulla. Nunc iaculis lacinia purus sit amet tristique. Sed sit amet congue orci, eget pretium nisl. Mauris molestie neque non hendrerit cursus. Nam feugiat magna id nulla pretium, at volutpat metus fringilla. Vivamus interdum sapien a consequat fringilla.</p>
            </div>
            <div className="about_section2">
                <p>Nulla facilisi. Etiam pulvinar ultricies pellentesque. Donec ac turpis id urna iaculis efficitur et nec purus. Donec nec enim nibh. Ut ante urna, luctus nec elit vel, pellentesque pulvinar ligula. Praesent interdum, purus quis pretium ullamcorper, arcu enim auctor lectus, vel finibus nibh ipsum nec nisl. Pellentesque sed venenatis dui. Fusce sit amet malesuada sem, eget suscipit nunc. Nam ut augue orci. Donec imperdiet risus a elit mattis tristique. Duis aliquam ullamcorper porttitor. Proin rhoncus sapien eu enim consectetur, eu tincidunt lorem molestie.</p>
                <div className="about_image_container">
                    <img src="/img/About2.jpg"></img>
                </div>
            </div>
            <Link className="about_link" to="./shop">Here's a selection of products</Link>
        </div>
    )
}

export default About