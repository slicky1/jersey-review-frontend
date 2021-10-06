import React, {useState} from 'react'

export default function BrandForm({createBrand}) {
    const [brands, setBrands] = useState({name: ""})

    function handleChange(e) {
        const updatedValue = {...brands}
        updatedValue[e.target.name] = e.target.value
        setBrands(updatedValue)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createBrand(brands)
    } 


    return (
        <div>
            <h2>Create New Brand</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={brands.name} onChange={handleChange} />
                <button type="submit">Create Brand</button>
            </form>
        </div>
    )
}