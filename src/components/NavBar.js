import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <Link to="/brands">All Brands</Link>
            <Link to="/countries">All Countries</Link>
            
        </div>
    )
}
