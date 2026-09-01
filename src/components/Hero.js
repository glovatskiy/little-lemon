import restaurantFood from "../assets/restauranfood.jpg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <p className="hero-location">Chicago</p>
        <p className="hero-description">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="hero-btn" type="button">Reserve a table</button>
      </div>
      <img className="hero-img" src={restaurantFood} alt="Chef holding food" />
    </section>
  );
};
export default Hero