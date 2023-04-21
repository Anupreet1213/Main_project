import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Roadmap from "./Roadmap/Roadmap";
import Utility from "./Utility/Utility";
import Service from "./Service/Service";
import Draggable from "./Drag/Draggable";
import Feature from "./Feature/Feature";
import Buy from "./Buy/Buy";
import Footer from "./Footer/Footer";
import Product from "./Product/Product";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Feature />
      {/* <Draggable />  */}
      <Buy />
      <Product />
      {/* <Draggable /> */}
      <Roadmap />
      <Utility />
      <Service />
      {/* <Feature /> */}
      <Footer />
    </div>
    // Anupreet :❤dya
  );
}

export default App;
