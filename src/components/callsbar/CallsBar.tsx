import React from "react";

export const CallsBar = () => {
  return (
    <div className="callsbar">
      <div className="callsbar__content">
        {/* <i className="fa-brands fa-facebook-square"></i>
        <i className="fa-brands fa-whatsapp-square"></i>
        <i className="fa-solid fa-square-envelope"></i> */}

        <div className="msg">
          <div className="msg__header">
            <i className="fa-brands fa-whatsapp-square callsbar__icon"></i>
            <p>Facebook</p>
          </div>

          <div className="msg__contetn">Jorge Garcia</div>
        </div>
      </div>
    </div>
  );
};
