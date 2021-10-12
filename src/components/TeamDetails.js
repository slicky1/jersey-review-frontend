import React, {useEffect, useState} from 'react'
import { BASE_URL } from '../constraints';

export default function TeamDetails() {

    const [team, setTeam] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'countries/' + id + '/teams/' + id)
        .then(res => res.json())
        .then(json => setTeam(json))

    }, [team]);

    useEffect(() =>{
        console.log(team)
    }, [id]);


    return (
        <div>
            {team && (
                <>
                     <p>{team.name}</p>
                     <p>{team.img_source}</p>
                </>
            )}
        </div>
    )
}
