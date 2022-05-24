import React from 'react';

//import {connect} from 'react-redux';

class FavoriteFood extends React.Component{

    constructor(props){
        super(props);
        this.state = {food: ''};
    }

    pizza= () => {
        this.setState({
            food: '🍕'
        })
    }

    burger = () => {
        this.setState({
            food: '🍔'
        })
    }

    hotdog = () => {
        this.setState({
            food: '🌭'
        })
    }


    render(){

        return(
            <div>
               <h3> Among these 3 foods which is your favorite? <br /> {this.state.food} </h3>
                <button onClick={this.pizza}>Pizza</button>
                <button onClick={this.burger}>Burger</button>
                <button onClick={this.hotdog}>Hotdog</button>
            </div>
        )

    }

}

export default FavoriteFood