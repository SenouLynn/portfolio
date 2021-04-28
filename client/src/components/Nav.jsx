import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {


    return (
        <nav id='nav'>

            <div>

                <h3 className="nav-link-menu  marg-1 pad-1">Menu</h3>
                <Link className="nav-link marg-1 pad-1">Home</Link>
                <Link className="nav-link marg-1 pad-1">About</Link>
                <Link className="nav-link marg-1 pad-1">Projects</Link>
                <Link className="nav-link marg-1 pad-1">CV</Link>
                <Link className="nav-link marg-1 pad-1">Contact</Link>
            </div>
        </nav>
    )
}
