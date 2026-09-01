import TestimonialCard from "./TestimonialCard";
import MistyBerry from "../assets/reviewers/MistyBerry.jpg";
import IsaiahMitchell from "../assets/reviewers/IsaiahMitchell.jpg";
import MelvinTurner from "../assets/reviewers/MelvinTurner.jpg";
import MiriamSteward from "../assets/reviewers/MiriamSteward.jpg";
import PeytonWeaver from "../assets/reviewers/PeytonWeaver.jpg";
const Testimonials = () => {
  const reviews = [
    {
      userPhoto: MistyBerry,
      rating: 4.5,
      userName: "Misty Berry",
      review:
        '"Fresh food, friendly service, and a wonderfully relaxed atmosphere."',
    },
    {
      userPhoto: IsaiahMitchell,
      rating: 4.8,
      userName: "Isaiah Mitchell",
      review: '"The Greek salad was delicious, and our order arrived quickly."',
    },
    {
      userPhoto: MelvinTurner,
      rating: 5,
      userName: "Melvin Turner",
      review: '"A perfect place for a relaxed dinner with friends."',
    },
    {
      userPhoto: MiriamSteward,
      rating: 4.2,
      userName: "Miriam Steward",
      review: '"Booking was simple, and the staff made us feel welcome."',
    },
    {
      userPhoto: PeytonWeaver,
      rating: 4.9,
      userName: "Peyton Weaver",
      review:
        '"Authentic flavors, generous portions, and excellent service every time."',
    },
  ];
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-container">
        {reviews.map((review) => {
          return (
            <TestimonialCard
              key={review.userName}
              userPhoto={review.userPhoto}
              rating={review.rating}
              userName={review.userName}
              review={review.review}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Testimonials;
