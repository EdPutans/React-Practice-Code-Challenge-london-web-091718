import React from 'react'

export default class SushiWallet extends React.Component{

state={
    value: 0
}

handleSubmit = (event) =>{
 event.preventDefault()
    this.props.increaseCash(this.state.value)
}


render(){
    return(
        <form onSubmit={event => this.handleSubmit(event)}>
                <input type="number" name="money" placeholder="Add more moneys!!" onChange ={event => this.setState({value: event.target.value})}/><br></br>
            <input type="submit" value="Add to Sushi Wallet" />
        </form>

    )
}
}