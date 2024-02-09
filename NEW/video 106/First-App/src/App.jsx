import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {
  return (
    <>
      <Navbar />
      <div className='App-Card'>

        <Card title='Card 1' desc='Lorem ipsum dolor sit amet consectetur adipisic elit. Magnam qui expedita laudantium ea aliquid neque aliquam? Asperiores est dolor illum?' />
        <Card title='Card 2' desc='Lorem ipsum dolor sit amet consectetur adipisic elit. Magnam qui expedita laudantium ea aliquid neque aliquam? Asperiores est dolor illum?' />
        <Card title='Card 3' desc='Lorem ipsum dolor sit amet consectetur adipisic elit. Magnam qui expedita laudantium ea aliquid neque aliquam? Asperiores est dolor illum?' />
        <Card title='Card 4' desc='Lorem ipsum dolor sit amet consectetur adipisic elit. Magnam qui expedita laudantium ea aliquid neque aliquam? Asperiores est dolor illum?' />

      </div>

      <Footer />
    </>
  )
}

export default App
