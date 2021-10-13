import React, {useEffect, useState} from 'react'
import { BASE_URL } from '../constraints'
import Country from '../Country'
import CountryForm from '../CountryForm'

export default function CountryContainer() {
    const [countries, setCountries] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'countries')
            .then(res => res.json())
            .then(json => setCountries(json))
    }, [])

    //READ MEATHOD
    function populateCountries() {
        return countries.map(country => <Country country={country} deleteCountry={deleteCountry} updateCountry={updateCountry} key={country.id} />)
    }

    //CREATE METHOD

    function createCountry(country) {
        fetch (BASE_URL + 'countries', {
            method: "POST",
            body: JSON.stringify(country),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        const newCountries = countries.map(con => {
            if (con.id === country.id) {
                con = country
            }
            return con
        })
        setCountries([...newCountries])
    }
    
    //DELETE METHOD
    function deleteCountry(country) {
        fetch(BASE_URL + 'countries/' + country.id, {
                method: "DELETE"

        })
        const newCountries = countries.filter(con => con.id !==country.id)
        setCountries(newCountries)
    }
        //UPDATE
    function updateCountry(country){
        fetch(BASE_URL + 'countries/' + country.id, {
            method: "PATCH",
            body: JSON.stringify(country),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const newCountries = countries.map(con => {
            if (con.id === country.id) {
                con = country
            }
            return con
        })
        setCountries([...newCountries])
    }
    return (
        <div>
            <h1>Jersey Reivew</h1>
            {countries && populateCountries() }
            {/* <CountryForm createCountry={createCountry} /> */}
        </div>
    )
}