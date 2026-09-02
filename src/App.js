import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<BookingPage/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
