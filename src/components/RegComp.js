import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log("I'm Regular Components")

        return (
            <div>

                I' m a regular component {this.props.name}
                
            </div>
        )
    }
}

export default RegComp;
