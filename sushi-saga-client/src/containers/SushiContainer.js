import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          
          props.loadedSushis.map(sushi => <Sushi  sushi={sushi} />)
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer