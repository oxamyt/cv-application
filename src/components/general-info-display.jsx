import phoneSvg from "../assets/svgs/phone.svg";
import emailSvg from "../assets/svgs/email.svg";

function GeneralInfoDisplay({ generalValue }) {
  return (
    <div className="top-section">
      <h1 className="heading-name">{generalValue.fullName}</h1>
      <div className="contact">
        <h2>
          <span>
            <img className="svg" src={phoneSvg}></img>
          </span>
          {generalValue.email}
        </h2>
        <h2>
          {" "}
          <span>
            <img className="svg" src={emailSvg}></img>
          </span>{" "}
          {generalValue.phoneNumber}
        </h2>
      </div>
    </div>
  );
}

export default GeneralInfoDisplay;
