import React from 'react'
import { Link } from 'react-router-dom'

export default function Team({teams}) {
    return (
        <div>
            <Link to = {`/teams/${teams.id}`}> <p>{teams.name}</p></Link>
            {/* <p> {teams.name} </p> */}
            <p> {teams.img_source} </p>
        </div>
    )
}