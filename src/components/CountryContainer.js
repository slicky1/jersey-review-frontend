import React from 'react'
import { BASE_URL } from '../constraints'

export default function CountryContainer() {
    const [countries, setCountries] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'countries')
            .then(res => res.json())
            .then(json => setCountries(json))
    }, [])

    //READ MEATHOD
    function populatecountries() {
        return countries.map(country => <Country country={country} deletecountry={deletecountry} updatecountry={updatecountry} key={country.id} />)
    }

    //CREATE METHOD

    function createcountry(country) {
        fetch (BASE_URL + 'countries', {
            method: "POST",
            body: JSON.stringify(country),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        const newcountries = countries.map(con => {
            if (con.id === country.id) {
                con = country
            }
            return con
        })
        setCountries([...newcountries])
    }
    
    //DELETE METHOD
    function deletecountry(country) {
        fetch(BASE_URL + 'countries/' + country.id, {
                method: "DELETE"

        })
        const newcountries = countries.filter(con => con.id !==country.id)
        setCountries(newcountries)
    }
        //UPDATE
    function updatecountry(country){
        fetch(BASE_URL + 'countries/' + country.id, {
            method: "PATCH",
            body: JSON.stringify(country),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const newcountries = countries.map(con => {
            if (con.id === country.id) {
                con = country
            }
            return con
        })
        setCountries([...newcountries])
    }
    return (
        <div>
            <h1>Jersey Reivew</h1>
            {countries && populatecountries() }
            <CountryForm createCountry={createcountry} />
        </div>
    )
}