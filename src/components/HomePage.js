import React from 'react'
import '../styles/HomePage.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (

        <div className= "home-page">

        <div className="big-image">
            <div className="overlay">
                
                    <h2> Welcome to Jersey Review</h2>
                    
                    <Link to="/countries"> <button className="bnt-1">ENTER</button> </Link>
            </div>    
        </div>
       
        </div>
        
    )
}
