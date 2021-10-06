import React, {useState} from 'react'

export default function Brand({brand, deleteBrand}) {
        const [newBrand, setNewBrand] = useState({...brand}) 

        function handleChange(e) {
            updatedValue = {...newBrand}
            updatedValue[e.target.name] = e.target.value
            setNewBrand(updatedValue)
        }


    return (
        <div>
            <br />
                <p> {brand.name} </p>

                <button onClick={() => deleteBrand(brand)}> Delete Brand</button>
                <form> 
                    <input name={name} value={newBrand
                    '/l} />
                </form>
                
            <br />
        </div>
    )
}
