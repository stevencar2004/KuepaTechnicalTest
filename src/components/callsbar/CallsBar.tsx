import React, { useContext } from "react";
import { ContextKuepa } from "../../context/Context";

export const CallsBar = () => {
  const { users } = useContext(ContextKuepa);
  return (
    <div className="callsbar col-12 col-md-2 col-lg-2">
      <div className="callsbar__content d-flex  flex-row flex-md-column align-items-center">
        {users.map((user, i) => {
          return (
            <div className="msg mb-3 mx-3 mx-md-0" key={i}>
              <div className="msg__header d-flex justify-content-center align-items-baseline">
                {i === 0 || i === 10 ? (
                  <>
                    <i className="fa-brands fa-whatsapp-square callsbar__icon icon--whatsapp"></i>
                    <p className=" fw-bolder">Whatsapp</p>
                  </>
                ) : i % 2 === 0 ? (
                  <>
                    <i className="fa-brands fa-facebook-square callsbar__icon icon--facebook"></i>
                    <p className=" fw-bolder">Facebook</p>
                  </>
                ) : (
                  <>
                    <i className="fa-brands fa-envelope-square callsbar__icon icon--message"></i>
                    <p className=" fw-bolder">Message</p>
                  </>
                )}
              </div>

              <div className="msg__content">{user.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
