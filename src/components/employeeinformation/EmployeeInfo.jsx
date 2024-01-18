import React from 'react'

function EmployeeInfo(props) {
    return (
        <>
            <h1>{props.name}</h1>
            <ul style={({listStyle: "none", textAlign: "left"})}>
                <li>From: {props.city}/{props.state}</li>
                <li>Position: {props.position}</li>
                <li>Favorite Food: {props.food}</li>
            </ul>
        </>
    )
}

export default EmployeeInfo