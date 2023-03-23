import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='loader'>
        <ThreeCircles
          height="100"
          width="100"
          color="#2A5C43"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
    </div>
  )
}

export default Loader