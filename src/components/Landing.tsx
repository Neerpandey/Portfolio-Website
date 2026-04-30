import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { BRAND } from "../constants";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Welcome to</h2>
            <h1>
              NEXTGEN
              <br />
              <span>WEB AGENCY</span>
            </h1>
            <p className="landing-subtitle">{BRAND.tagline}</p>
          </div>
          <div className="landing-info">
            <h3>Founded by</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{BRAND.founder}</div>
              <div className="landing-h2-2">{BRAND.role}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{BRAND.location}</div>
              <div className="landing-h2-info-1">Premium Development</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
