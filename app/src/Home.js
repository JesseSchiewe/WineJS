import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import {auth} from "./Firebase";

export default function Home() {
    return(
        <Fragment>
            <div className="WineJS Wine Review"></div>
                <h1>Home Page</h1>
                <h2>Thanks for visiting</h2>
                <h2>Click on a link below</h2>
                <h2><Link to="/review">Review</Link></h2>
                <h2><Link to="/reviewresult">Review Results</Link></h2>
                <h2><Link to="/about">About</Link></h2>
                <h2><Link to="/contact">Contact</Link></h2>
                <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick = {() => {auth.signOut()}}>Sign out</button>
        </Fragment>
    )
};