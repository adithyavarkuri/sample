import React, { Component } from 'react';

class About extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <h1>welcome {this.props.name}</h1>
            </div>
        )
    }

}

export default About