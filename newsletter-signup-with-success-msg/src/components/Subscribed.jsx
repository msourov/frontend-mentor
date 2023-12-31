import { useNavigate } from "react-router-dom";
import "./subscribed.css";
import icon from "../assets/images/icon-list.svg";

function Subscribed() {
  const navigate = useNavigate();
  return (
    <div className="sub-container">
      <div className="icon">
        <img src={icon} alt="success" className="success-icon" />
      </div>
      <div className="text">
        <h1>Thanks for subscribing!</h1>
        <p>{`A confirmation email has been sent to $email. Please open it and click the button inside to confirm your subscription.`}</p>
      </div>
      <button className="dismiss-btn" onClick={() => navigate("/")}>
        Dismiss message
      </button>
    </div>
  );
}

export default Subscribed;
