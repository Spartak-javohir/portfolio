import "./app.scss";
import About from "./pages/about/about";
import Contacts from "./pages/contacts/contacts";
import Navbar from "./pages/navbar/navbar";
import Header from "./pages/header/header";
import Experiemce from "./pages/experience/experience";
import Services from "./pages/services/services";
import Portfolio from "./pages/portfolio/portfolio";
import Testimonials from "./pages/testimonials/testimonials";
import Footer from "./pages/footer/footer";
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experiemce />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
