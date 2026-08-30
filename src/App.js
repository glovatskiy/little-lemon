import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import RestaurantStory from "./RestaurantStory";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Main />
        <Specials />
        <Testimonials />
        <RestaurantStory />
        <Footer />
      </div>
    </>
  );
}

export default App;
