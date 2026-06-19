import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import QuoteForm from "../components/QuoteForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Home;
