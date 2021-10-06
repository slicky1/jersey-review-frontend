import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import Brand from './Brand.js'

export default function BrandContainer() {

    const [brands, setBrands] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'brands')
            .then(res => res.json())
            .then(json => setBrands(json))
    }, [])

    //READ MEATHOD
    function populateBrands() {
        return brands.map(brand => <Brand brand={brand} deleteBrand={deleteBrand} updateBrand={updateBrand} key={brand.id} />)
    }
    //DELETE METHOD
    function deleteBrand(brand) {
        fetch(BASE_URL + 'brands/' + brand.id, {
                method: "DELETE"

        })
        const newBrands = brands.filter(brd => brd.id !==brand.id)
        setBrands(newBrands)
    }

    function updateBrand(brand){
        fetch(BASE_URL + 'brands/' + brand.id,{
            method: "UPDATE",
            body: JSON.stringify(brand)
        })

        const newBrands = brands.map(brd => {
            if (brd.id === brand.id) {
                brd = brand
            }
        })
        setBrands([...newBrands])
    }
    return (
        <div>
            {brands && populateBrands() }
        </div>
    )
}
