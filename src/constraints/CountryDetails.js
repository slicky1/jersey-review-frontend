import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../constraints'
import Team from '../components/Team'

export default function CountryDetails() {
    const [country, SetCountry] = useState(null)
    

    const {id} = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'countries/' + id)
        .then(res => res.json())
        .then(json => SetCountry(json))

    }, [id]);

    useEffect(() => {
        console.log(country)
    }, [country])


    return (
        <div>
            {/* Country Details: Country id: {id} */}
           
            {country && (
                <>
                <p>{country.name}</p>
                <h3>Teams</h3>
                {country.teams.map(teams => <Team teams ={teams} />)}
                   
 
                </>
            )}
        </div>
    )
}