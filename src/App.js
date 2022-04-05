import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";
import Modal from "./Components/Modal";



function App() {
  return (
    <div className="parent" >
    <Nav />
    <Header />
    <Main />
    <Footer />
  {/*  <Modal />*/}
    </div>
  )
}

export default App;
