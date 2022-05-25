import React from 'react';
//import {connect} from 'react-redux';

class FavoriteColor extends React.Component{

    constructor(props){
        super(props);
        this.state = {color: ''};
    }

    blue = () => {
        this.setState({
            color: 'blue'
        })
    }

    black = () => {
        this.setState({
            color: 'black'
        })
    }

    green = () => {
        this.setState({
            color: 'green'
        })
    }

    purple = () => {
        this.setState({
            color: 'purple'
        })
    }

    render(){
        return(
            <div>
               <h3> and your favorite color?
                   <br /> <span style={{backgroundColor: this.state.color, color: this.state.color}}> .... </span>    
                </h3>
                <button onClick={this.blue}>Blue</button>
                <button onClick={this.black}>Black</button>
                <button onClick={this.green}>Green</button>
                <button onClick={this.purple}>Purple</button>
            </div>
        )
    }
}

export default FavoriteColor