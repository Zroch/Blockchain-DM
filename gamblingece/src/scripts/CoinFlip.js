import React,{ Component } from 'react'
import Coin from './Coin'
import Withdraws from './Withdraws'

class CoinFlip extends Component{
  
  static defaultProps = {
    coins : [
     
      // Sides of the coin
      {side:'head', imgSrc:
'https://www.dejete.com/images/graphic/face.png?ezimgfmt=ng%3Awebp%2Fngcb1'},
      {side:'tail', imgSrc:
'https://www.dejete.com/images/graphic/pile.png?ezimgfmt=ng%3Awebp%2Fngcb1'}
    ]
  }
 
  constructor(props){
    super(props)
     
    // Responsible to render current updated coin face
    this.state = {
       
      // Track total number of flips
      currFace : null,
      heads: 0,
      tails: 0
    }
     
    // Binding context of this keyword
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }
 
   // Function takes array of different faces of a coin
  //  and return a random chosen single face
  choice(arr){
    const randomIdx = Math.floor(Math.random() * arr.length)
    return arr[randomIdx]
  }
   
  // Function responsible to update the states
  // according to users interactions
  flipCoin(){
    const newFace = this.choice(this.props.coins)
    this.setState(curState => {
      const heads = curState.heads + (newFace.side === 'head' ? 1 : 0)
      return {
        currFace:newFace,
        heads:heads, 
      }
    })
  }

  flipCoin2(){
    const newFace = this.choice(this.props.coins)
    this.setState(curState => {
      const tails = curState.heads + (newFace.side === 'head' ? 1 : 0)
      return {
        currFace:newFace,
        tails:tails, 
      }
    })
  }
 
  handleClick(){
    this.flipCoin()
  }
  handleClick2(){
    this.flipCoin2()
  }
  render(){
    var msg = ""
    var t = null
    const {currFace,heads,tails} = this.state
    if (heads === 1 && tails === 0){
      global.config.i18n.valeur = global.config.i18n.valeur*2;
      msg = "C'EST GAGNE";
      t=<Withdraws/>
    }
    if (heads === 0 && tails === 1){
      global.config.i18n.valeur = global.config.i18n.valeur*2;
      msg = "C'EST GAGNE";
      t=<Withdraws/>
    }
    if (heads === 0 && tails === 0){
      global.config.i18n.valeur = 0;
      t="rien a withdraw"
    }
    return(
      <div>
        <h2>Let's flip a coin</h2>
         
        {/* If current face exist then show current face */}
        {currFace && <Coin info={currFace} />}
         
        {/* Button to flip the coin  */}
        <button onClick={this.handleClick} >Pile</button>
        <button onClick={this.handleClick2} >Face</button>
         
 
        <p>
           tails {global.config.i18n.valeur} {msg} {t}
        </p>
 
 
      </div>
    )
  }
}
 
export default CoinFlip