import SpecialCard from "./SpecialCard";
import greekSalad from "../assets/specials/greek-salad.jpg";
import bruchetta from "../assets/specials/bruchetta.svg";
import lemonDessert from "../assets/specials/lemon-dessert.jpg";
import { Link } from "react-router-dom";

const Specials = () => {
  const specials = [
    {
      image: greekSalad,
      foodName: "Greek salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      image: bruchetta,
      foodName: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
      image: lemonDessert,
      foodName: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <section className="specials">
      <header className="specials-header">
        <h2 className="specials-heading">This week's specials</h2>
        <Link className="specials-button" to="/menu" aria-label="On Click">
          Online menu
        </Link>
      </header>
      <div className="specials-cards-container">
        {specials.map((special) => {
          return (
            <SpecialCard
              key={special.foodName}
              image={special.image}
              foodName={special.foodName}
              price={special.price}
              description={special.description}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Specials;
