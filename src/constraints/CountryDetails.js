import React from 'react'
import { useParams } from 'react-router-dom'

export default function CountryDetails() {
    const {id} = useParams()

    return (
        <div>
            Country Details: Brand id {id}
        </div>
    )
}