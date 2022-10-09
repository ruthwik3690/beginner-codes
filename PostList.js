import React, { Component } from 'react'
import axios from'axios'

class PostList extends Component{
    constructor(){
        super()
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        return( 
            <div>
                const { posts } = this.state
                List of Posts
            
            </div>
        )
    }
}
export default PostList
