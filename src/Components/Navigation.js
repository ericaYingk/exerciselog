import React from 'react';
import { Link } from 'react-router-dom';

function NavPage({dest}) {
    if (dest === "HomePage"){
        return (<Link className="App-link" to="/"> Go to the Home Page </Link>);
    }
    if (dest === "EditPage"){
        return (<Link className="App-link" to="/edit"> Go to the Edit Page </Link>);
    }
    if (dest === "CreatePage"){
        return (<Link className="App-link" to="/create"> Add Exercise </Link>);
    }
}

export default NavPage