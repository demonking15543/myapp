import React, { Component } from 'react'

export class ClassProps extends Component {
    render() {
        return (
            <div>
                <h4>Hi, This is {this.props.name} and do {this.props.do}</h4>
                <p>{this.props.children}</p>
            </div>
            
        );
    }
}

export default ClassProps;
