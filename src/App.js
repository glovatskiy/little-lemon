import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/menu"
            element={
              <ComingSoon
                title="Menu"
                message="We are currently updating our menu."
              />
            }
          />
          <Route path="/reservation" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route
            path="/order-online"
            element={
              <ComingSoon
                title="Order Online"
                message="This feature is coming soon."
              />
            }
          />

          <Route
            path="/login"
            element={
              <ComingSoon
                title="Login"
                message="This feature is coming soon."
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
