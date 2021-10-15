import React from 'react'
import { Link } from 'react-router-dom'

export default function Review(reviews) {
    return (
        <div>
            <Link to = {`/reviews/${reviews.id}`}> <p>{reviews.title}</p></Link>
          
            <p> {reviews.description} </p>
            <p> {reviews.rating} </p>
        </div>
    )
}
