import React, { Component } from 'react'

export default class AddToCart extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  handleDecrement = () => {
    this.setState(prevState => {
        if (prevState.count > 0) {
            return {
                count: prevState.count - 1
            }
        } else {
            return {
                count: 0
            }
        }
    })
  };

  handleIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  };

  handleCart = () => {
    if (this.state.count >= parseInt(this.props.min) && this.state.count <= parseInt(this.props.max)) {  
        alert(this.state.count + ' ' + this.props.item + ' Added in cart');
    } else if (this.state.count >= parseInt(this.props.max)){
        alert('Only limited stocks ' + this.props.max + ' ' + this.props.item + ' available');
    } else {
        alert('Please select atleast ' + this.props.min + ' ' + this.props.item + ' to add.');
    }
  };

    render() {
    return (
        <>
        <table>
            <tr>
                
            </tr>
            <tr>
                <td><img width={200} height={150} src={this.props.imgUrl} alt={this.props.item}></img></td>
                <td>
                    <h3>{this.props.item}</h3>
                    <p>{this.props.desc}</p>
                </td>
                <td>
                    <button onClick={this.handleDecrement}>-</button>
                    {this.state.count}
                    <button onClick={this.handleIncrement}>+</button>
                </td>
                <td>$ {this.props.price} /-</td>
                <td><button onClick={this.handleCart}>Add Cart</button></td>
            </tr>
        </table></>
    )
  }
}

