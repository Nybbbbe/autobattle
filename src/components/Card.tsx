import './Card.scss';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="header-block">
          <h2>{1}</h2>
        </div>
        <div className="header-block">
          <h2>{1}</h2>
        </div>
        <div className="header-block">
          <h2>{1}</h2>
        </div>
      </div>
      <div className="card-img">
        <img src='./images/peasant.png'></img>
      </div>
      {/* <div className="card-description">
        
      </div> */}
      {/* <div className="card-title">
        <div className="header-block">
          <h2>{"Peasant"}</h2>
        </div>
      </div> */}
    </div>
  )
}

export default Card;