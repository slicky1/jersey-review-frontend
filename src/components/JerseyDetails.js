import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../constraints';
import Review from './Review'

export default function JerseyDetails()  {

    const [jerseys, setJerseys] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'jerseys/' + id)
        .then(res => res.json())
        .then(json => setJerseys(json))

    }, [id]);

    useEffect(() => {
        console.log(jerseys)
    }, [jerseys])


return (
    <div>
        Jersey Details: Jersey id: {id}
       
        {jerseys && (
            <>
            <p>{jerseys.name}</p>
            <h3>Reviews</h3>
            {jerseys.reviews.map(reviews => <Review reviews ={reviews} />)}
               

            </>
        )}
    </div>
)
}