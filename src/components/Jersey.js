import React from 'react'
import { Link } from 'react-router-dom'

export default function Jersey({jerseys}) {
    return (
        <div>
            <Link to = {`/jerseys/${jerseys.id}`}> <p>{jerseys.name}</p></Link>
            {/* <p> {jerseys.name} </p> */}
            <p> {jerseys.img_source} </p>
            <p> {jerseys.description} </p>
        </div>
    )
}


