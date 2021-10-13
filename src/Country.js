import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Country({country, deleteCountry, updateCountry}) {
        const [newCountry, setNewCountry] = useState({...country}) 

        function handleChange(e) {
           const updatedValue = {...newCountry}
            updatedValue[e.target.name] = e.target.value
            setNewCountry({...updatedValue})
        }

            function handleUpdate(e){
                e.preventDefault()
                updateCountry(newCountry)
            }


    return (
        <div>
            <br />
                {/* <p> {country.name} </p>
                <p> {country.img_source} </p> */}

                {/* <Link to = {`/countries/${country.id}`}>  */}
                <Link to = {`/countries/${country.id}`}> 
                
                <p>{country.name}</p>
               </Link>
                
                <p>{country.img_source}</p>

                <button onClick={() => deleteCountry(country)}> Delete country</button>

                
                <form onSubmit={handleUpdate}>
                    <input name="name" value={newCountry.name} onChange={handleChange} />
                    <button type="submit">Update country</button>
                    
                </form>
                
            <br />
        </div>
    )
}
