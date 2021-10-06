import React, {useState} from 'react'

export default function Brand({brand, deleteBrand, updateBrand}) {
        const [newBrand, setNewBrand] = useState({...brand}) 

        function handleChange(e) {
           const updatedValue = {...newBrand}
            updatedValue[e.target.name] = e.target.value
            setNewBrand({...updatedValue})
        }

            function handleUpdate(e){
                e.preventDefault()
                updateBrand(newBrand)
            }


    return (
        <div>
            <br />
                <p> {brand.name} </p>

                <button onClick={() => deleteBrand(brand)}> Delete Brand</button>

                
                <form onSubmit={handleUpdate}>
                    <input name="name" value={newBrand.name} onChange={handleChange} />
                    <button type="submit">Update Brand</button>
                    
                </form>
                
            <br />
        </div>
    )
}
