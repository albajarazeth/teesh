import React from "react";
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import "./Main.css";

function MyReason({ title, children }) {
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div className="mReason">
      <div className="mCircle"></div>
      <h3>{title}</h3>
      <div onClick={toggleShown}>
        {isShown ?  <FiChevronDown/> :  <FiChevronUp /> }
      </div>

      <p  className= { isShown ? 'mInfo mHide' : 'mInfo'}>{children}</p>
    </div>
  );
}

export const Main = () => {
  return (
    <section className="mainSection">
      <h2 className="mTitle">Why Us</h2>
      <div className="mContainer">
        <MyReason title="Tea Personalization">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          tortor lorem, vehicula eget est sed, malesuada suscipit magna.
          Curabitur eu consectetur augue.
        </MyReason>

        <MyReason title="Home Delivery">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          tortor lorem, vehicula eget est sed, malesuada suscipit magna.
          Curabitur eu consectetur augue.
        </MyReason>

        <MyReason title="Home Delivery">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          tortor lorem, vehicula eget est sed, malesuada suscipit magna.
          Curabitur eu consectetur augue.
        </MyReason>
      </div>
    </section>
  );
};