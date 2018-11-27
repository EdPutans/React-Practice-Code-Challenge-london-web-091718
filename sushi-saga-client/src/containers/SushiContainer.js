import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.loadedSushis.map(sushi => <Sushi  
            sushi={sushi} 
            addSushiToTable={ props.addSushiToTable }
            loadedSushis={ props.loadedSushis }
            />)
        }
        <MoreButton loadFourRandomSushis={ props.loadFourRandomSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer