import React, { Component } from 'react'
import subscribe_bell from "../images/subscribe_bell.png";

import unsubscrib_bell from "../images/unsubscrib_bell.png";

class SubscribeComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "subscribe To xyz",
             sub: "Subscribe",
             image_url: unsubscrib_bell
        }
    }
    styles = {
        fontStyle: "italic",
        color: "purple"
    }
    ButtonChange = () => {
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed"
        })
    }
    imageChange = () => {
        this.setState({
            image_url: subscribe_bell,
            message: "Thank you for subscribing xyz"
        })
    }
    
    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <p>
                    <img style={{width: "30px", height:"30px"}} src={this.state.image_url} alt=""
                    onClick={this.imageChange} />
                </p>
            </div>
        )
    }
}

export default SubscribeComp
