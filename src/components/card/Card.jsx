import './styles.css'

const Card = (props) => {
  return (
    <>
      <li class="lista">
        <div class="card">
          <div class="front">
            <h2>{props.title}</h2>
            <img src={props.image} alt="" />
          </div>

          <div class="back">
            <h2>BACK</h2>
          </div>
        </div>
      </li>
    </>
  )
}

export default Card
