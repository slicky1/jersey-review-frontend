import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../src/styles/Country.css';

export default function Country({country, deleteCountry, updateCountry}) {
        const [newCountry, setNewCountry] = useState({...country}) 

        function handleChange(e) {
           const updatedValue = {...newCountry}
            updatedValue[e.target.name] = e.target.value
            setNewCountry({...updatedValue})
        }

            // function handleUpdate(e){
            //     e.preventDefault()
            //     updateCountry(newCountry)
            // }


    return (
    <div className= "card">
            <br />
        <div className= "img-conatiner">
                <Link to = {`/countries/${country.id}`}> 
                <p>{country.name}</p>
                </Link>
            
                     <div className= "country-img"> 
                        <img src={country.img_source} ></img>
                    
        </div>

    </div>
                
                
                
                
                
               
                
               

                {/* <button onClick={() => deleteCountry(country)}> Delete country</button> */}

                
                {/* <form onSubmit={handleUpdate}>
                    <input name="name" value={newCountry.name} onChange={handleChange} />
                    <button type="submit">Update country</button>
                    
                </form> */}
                
            <br />
        </div>
    )
}
