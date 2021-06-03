import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to={'/user/Adithya'}>
                    <h1>User Adithya</h1>
                    </Link>
                </div>
                <div>
                    <Link to={'/user/Adithya1'}>
                    <h1>User Adithya1</h1>
                    </Link>
                </div>
                <div>
                    <Link to={'/user/Adithya2'}>
                    <h1>User Adithya2</h1>
                    </Link>
                </div>
                <div>
                    <Link to={'/user/Adithya3'}>
                    <h1>User Adithya3</h1>
                    </Link>
                </div>
                <h1>Home</h1>
            </div>
        )
    }

}

export default Home