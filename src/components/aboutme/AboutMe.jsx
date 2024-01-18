/* 
Create a new folder called aboutme within the components folder.
Create a new file inside the folder called AboutMe.jsx.
Create a <p> tag that notes where you grew up. 
Use variables for city and state.
Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
Export the component.
Import the component into App.jsx and mount it between the Header and Footer components.
*/

import React from 'react'

function AboutMe() {

    const city = "Athens"
    const state = "PA"

    let styles = {
        ul: {
            textAlign: 'left',
            color: 'red',
        },
        p: {
            fontSize: '20pt'
        }
    }

    return (
        <div>
            <p style={styles.p}>{city}, {state}</p>
            <ul style={styles.ul}>
                <li>Work</li>
                <li>Home</li>
                <li>Work Again</li>
            </ul>
        </div>

    )
}

export default AboutMe

// let ul = document.querySelector('ul');
// ul.style.textAlign = "left";
// ul.style = `
//     text-align: "left"
// `