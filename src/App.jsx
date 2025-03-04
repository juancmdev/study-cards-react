import Card from "./components/card/Card"



function App() {
const title = "Hello from props one more time";
const image = 'src/assets/imgs/animals/bear.jpg';

  return (
    <>
      <Card title={title} image={image}/>
    </>
  )
}

export default App
