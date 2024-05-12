import "./General-resume.css";
import emailSvg from "../../../assets/svgs/email.svg";
import phoneSvg from "../../../assets/svgs/phone.svg";

function GeneralResume({ generalInfo }) {
  return (
    <header className="general-section">
      <h1 className="name">{generalInfo.fullName}</h1>
      <div className="contacts">
        {generalInfo.email && (
          <h2 className="email">
            <img className="svg" src={emailSvg} alt="Email" />{" "}
            {generalInfo.email}
          </h2>
        )}
        {generalInfo.phoneNumber && (
          <h2 className="phone">
            {" "}
            <img className="svg" src={phoneSvg} alt="Email" />
            {generalInfo.phoneNumber}
          </h2>
        )}
      </div>
    </header>
  );
}

export default GeneralResume;
