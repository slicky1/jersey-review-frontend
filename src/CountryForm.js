import React, {useState} from 'react'

export default function CountryForm({createCountry}) {
    const [countries, setCountries] = useState({name: "", img_source: ""})

    function handleChange(e) {
        const updatedValue = {...countries}
        updatedValue[e.target.name] = e.target.value
        updatedValue[e.target.img_source] = e.target.value
        setCountries(updatedValue)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createCountry(countries)
    } 


    return (
        <div>
            <h2>Create New Country</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={countries.name} onChange={handleChange} />
                <input img_source="img_source" value={countries.img_source} onChange={handleChange} />
                <button type="submit">Create Country</button>
            </form>
        </div>
    )
}