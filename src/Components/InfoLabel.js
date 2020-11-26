import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function InfoLabel ({route}) {
    return (
        <div className="infoLabel">
            Don’t have an account yet? <Link  to={`/${route}`}><span>Register</span></Link>
        </div>
    )
}