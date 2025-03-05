import Card from "./components/card/Card"
import { data } from "./database/db";

// const erre = function() {
//   data.forEach(dato => {
//     console.log(dato);
//     return dato;
//   })
// }


// console.log(erre());




function App() {
const title = "Hello from props one more time";
const image = 'imgs/animals/bear.jpg';

  return (
    <>
      <Card title={title} image={image}/>
    </>
  )
}

export default App
