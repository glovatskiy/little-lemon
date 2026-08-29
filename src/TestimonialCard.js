const TestimonialCard = ({ userPhoto, rating, userName, review }) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-info">
        <div>
          <img className="reviewer-photo" src={userPhoto} alt={userName} />
        </div>
        <div className="review-body">
          <p className="rating">Rating: {rating} ⭐️</p>
          <p className="review-text">{review}</p>
        </div>
      </div>
      <h3 className="reviewer-name">{userName}</h3>
    </article>
  );
};
export default TestimonialCard;
