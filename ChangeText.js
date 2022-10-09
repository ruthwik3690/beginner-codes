import React, { Component } from 'react'

class ChangeText extends Component{
    constructor() {
        super()
        this.state = {
            message : 'Welcome visitor'
        }
    }
    changeDisplayText(){
        this.setState({
            message : 'Thank you for subscribing!'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeDisplayText()}>Subscribe!</button>
            </div>
        )
    }
}

export default ChangeText
