import deliveryIcon from "../assets/takeaway-fill-svgrepo-com.svg"
const SpecialCard = ({ image, foodName, price, description }) => {
  return (
    <article className="specials-card">
      <img className="special-card-img" src={image} alt={foodName} />
      <div className="special-card-header">
        <h3 className="special-card-title">{foodName}</h3>
        <p className="special-card-price">{price}</p>
      </div>
      <p className="special-card-description">{description}</p>
      <div className="card-delivery">
        <a className="order-delivery-link" href="/">
          Order a delivery
        </a>
        <img className="order-delivery-img" src={deliveryIcon} alt="Delivery scooter icon"/>
      </div>
    </article>
  );
};
export default SpecialCard;
