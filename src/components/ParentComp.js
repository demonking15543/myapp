import React, { Component } from 'react';
import PureComp from "./PureComp";
import RegComp from "./RegComp";
export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : "Rex"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Rex"
            });
        }, 10000);
    }
    
    render() {
        console.log("I'm Parent Component")

        return (
            <div>

                I' m parent Component
                <RegComp name ={this.state.name} />
                <PureComp name ={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
