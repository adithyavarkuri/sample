import React, { Component } from 'react';
import {useParams} from "react-router-dom";

function UserDetails(){
    let { name } = useParams();
    return(
        <div>
            <h1>welcome {name}</h1>
        </div>
    )
}

class User extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <UserDetails></UserDetails>
        )
    }
}

export default User