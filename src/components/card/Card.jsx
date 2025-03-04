import './styles.css'

const Card = (props) => {
  return (
    <>
      <li className="lista">
        <div className="card">
          <div className="front">
            <h2>{props.title}</h2>
            <img src={props.image} alt="" />
          </div>

          <div className="back">
            <h2>BACK</h2>
          </div>
        </div>
      </li>
    </>
  )
}

export default Card
