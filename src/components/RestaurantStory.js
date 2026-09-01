import MarioAdrianA from "../assets/about/Mario and Adrian A.jpg";
import MarioAdrianB from "../assets/about/Mario and Adrian b.jpg";

const RestaurantStory = () => {
    return (
      <section className="restaurant-story">
        <div className="restaurant-story-content">
          <h2 className="restaurant-story-heading">Little Lemon</h2>
          <p className="restaurant-story-location">Chicago</p>
          <p className="restaurant-story-text">
            Little Lemon started in our family kitchen, a pile of recipes
            written on napkins. When my brother Adrian and I moved to Chicago,
            we brought the tastes of the Mediterranean with us and set out to
            translate the food that is at the heart of our family. Our
            restaurant is our childhood brought to life. A place where we invite
            you to sit, chat and feel completely at home.
          </p>
        </div>
        <div className="about-images">
          <img
            className="about-image "
            src={MarioAdrianA}
            alt="Owners of the restaurant Mario and Adrian in the Little Lemon restaurant."
          />
          <img
            className="about-image about-image-front"
            src={MarioAdrianB}
            alt="Owners of the restaurant Mario and Adrian in the Little Lemon restaurant."
          />
        </div>
      </section>
    );
}
export default RestaurantStory;