import React from 'react'
import "../styles/TimeLine.css"
import TimeLineSteps from '../components/TimelineSteps'



function TimeLine() {
  return (
    <div className='timeline-wrapper'>
    <div className='timeline-steps' id='steps'>
        <TimeLineSteps ></TimeLineSteps>

    </div>
    </div>
  )
}

export default TimeLine