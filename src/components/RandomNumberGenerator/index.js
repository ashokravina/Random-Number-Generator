// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count : 0}
  
  
  RandomNumberGenerate = () => {
    const randomNumber = Math.ceil(Math.random() * 100) 
    this.setState({count:randomNumber})
    console.log(randomNumber)

  }

  render() {
    const {count}=this.state
    return (
      <div className="bg-container">
        <div className="card-container shadow">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.RandomNumberGenerate}>
            Generate
          </button>
          <h1 className="heading h">{count}</h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
