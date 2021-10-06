import React from 'react'
import { useParams } from 'react-router-dom'

export default function BrandDetails() {
    const {id} = useParams()

    return (
        <div>
            Brand Details: Brand id {id}
        </div>
    )
}
