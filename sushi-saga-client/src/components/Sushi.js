import React, { Fragment } from 'react'

class Sushi extends React.Component{ 

  render(){
  const { sushi, addToTable } = this.props
  return (
    <div className="sushi">
      <div className="plate" 
           >
        { 
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}
}

export default Sushi