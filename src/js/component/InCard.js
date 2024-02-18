import React from 'react'

//const styles = {width: "18rem"}

const InCard = (props) => {
  return <div className="card my-3 " style={{width: "18rem"}}>
  <img src={props.image} style={{height: '200px',}}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
}

export default InCard