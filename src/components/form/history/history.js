import React from 'react'
import "./history.scss";

//history.push(api url)

function History(props) {
  return (
    <div className='history'>
      {props.trackHistory.map((x, index) => <h3 key={index}>{x}</h3>)}
    </div>
    //map through history array and each element is called x and h3 element around each of th

  )
}

export default History







{/* <History />: Iterates the history array in state and shows the previous API calls
When one is clicked on, show the results in the results component
Note: the results component renders whatever is in state … */}
