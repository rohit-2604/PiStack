import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "Your Acess Key");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={msg_icon} alt="Message icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Email icon" /> Contact@PiStack.dev
          </li>
          <li>
            <img src={phone_icon} alt="Phone icon" /> +91 9874561239
          </li>
          <li>
            <img src={location_icon} alt="Location icon" /> Akshya Nagar 1st
            Block 1st Cross, Rammurthy Nagar
            <br /> Bangalore-560016
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Contact No.</label>
          <input
            type="tel"
            name="contact "
            placeholder="Enter contact no. "
            required
          />
          <label>Write Your Message Here!</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Text"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            {" "}
            Submit Now
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result} </span>
      </div>
    </div>
  );
};

export default Contact;
