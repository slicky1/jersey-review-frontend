import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../constraints';
import Jersey from './Jersey';

export default function TeamDetails() {

    const [teams, setTeams] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'teams/' + id)
        .then(res => res.json())
        .then(json => setTeams(json))

    }, [id]);

    useEffect(() => {
        console.log(teams)
    }, [teams])


return (
    <div>
        Team Details: Team id: {id}
       
        {teams && (
            <>
            <p>{teams.name}</p>
            <h3>Jersey</h3>
            {teams.jerseys.map(jerseys => <Jersey jerseys ={jerseys} />)}
               

            </>
        )}
    </div>
)
}