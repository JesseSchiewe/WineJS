import React, {Fragment, useContext} from 'react';
import { Link } from "react-router-dom";
import {auth} from "../Firebase";
import { UserContext } from '../providers/UserProvider';

export default function PageHeader() {
    const user = useContext(UserContext);
    return(
        <div className="SiteHeader">                
            <Link to="/review">
                <button type="menubutton" className="headerbutton" >Review</button>
            </Link>
            <Link to="/reviewresult">
                <button type="menubutton" className="headerbutton" >Review Results</button>
            </Link>
            <Link to="/about">
                <button type="menubutton" className="headerbutton" >About</button>
            </Link>
            <Link to="/contact">
                <button type="menubutton" className="headerbutton" >Contact</button>
            </Link>
            <button type="signoutbutton" className ="signoutbutton" onClick = {() => {auth.signOut()}}>Sign out</button>
        </div>
    )
};
