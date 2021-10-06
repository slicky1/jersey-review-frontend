import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import Brand from './Brand.js'
import BrandForm from './BrandForm.js'

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

    //CREATE METHOD

    function createBrand(brand) {
        fetch (BASE_URL + 'brands', {
            method: "POST",
            body: JSON.stringify(brand),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        const newBrands = brands.map(brd => {
            if (brd.id === brand.id) {
                brd = brand
            }
            return brd
        })
        setBrands([...newBrands])
    }
    
    //DELETE METHOD
    function deleteBrand(brand) {
        fetch(BASE_URL + 'brands/' + brand.id, {
                method: "DELETE"

        })
        const newBrands = brands.filter(brd => brd.id !==brand.id)
        setBrands(newBrands)
    }
        //UPDATE
    function updateBrand(brand){
        fetch(BASE_URL + 'brands/' + brand.id, {
            method: "PATCH",
            body: JSON.stringify(brand),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const newBrands = brands.map(brd => {
            if (brd.id === brand.id) {
                brd = brand
            }
            return brd
        })
        setBrands([...newBrands])
    }
    return (
        <div>
            <h1>Jersey Reivew</h1>
            {brands && populateBrands() }
            <BrandForm createBrand={createBrand} />
        </div>
    )
}
