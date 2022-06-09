import React, { useContext } from "react";
import { ContextKuepa } from "../../context/Context";
import { FilterBar } from "../filterbar/FilterBar";

export const DashBoard = () => {
  const { users } = useContext(ContextKuepa);

  return (
    <div className="dashboard col-12 col-lg-8 col-lg-10 p-4">
      <div className="dashboard__header w-100">
        <FilterBar />
      </div>

      <div className="dashboard__main d-flex flex-column">
        <section className="dashboard__info">
          <h2 className="fs-1 mb-4">Hola, User</h2>

          <div className="d-flex flex-column flex-lg-row">
            <div className="metrics row justify-content-center align-items-center">
              <div className="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center">
                <div className="metrics__progress d-flex align-items-center justify-content-center">
                  50%
                </div>
              </div>

              <div className="metrics__goals col-12 col-lg-8 row">
                <div className="metrics__item col-12 col-lg-6 d-flex justify-content-between align-items-center">
                  <p>Leads obtenidos</p>
                  <p className="fs-5 mx-2">50/{users.length}</p>
                </div>

                <div className="metrics__item col-12 col-lg-6 d-flex justify-content-between align-items-center">
                  <p>Matriculas finalizadas</p>
                  <p className="fs-5 mx-2">10/{users.length / 2}</p>
                </div>

                <div className="metrics__item col-12 col-lg-6  d-flex justify-content-between align-items-center">
                  <p>Cola de llamados</p>
                  <p className="fs-5 mx-2">50/{users.length}</p>
                </div>
              </div>
            </div>

            <div className="postInfo mx-lg-5">
              <h4 className="postInfo__title">Metal Grupal</h4>

              <div className="postInfo__content">
                <div className="postInfo__result mb-3">
                  <div className="d-flex justify-content-between">
                    <p>Leads obtenidos</p>
                    <span>
                      {users.length / 2}/{users.length}
                    </span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar w-50" arial-role="progressbar"></div>
                  </div>
                </div>

                <div className="postInfo__result">
                  <div className="d-flex justify-content-between">
                    <p>Matriculas realizadas</p>
                    <span>50/{users.length}</span>
                  </div>

                  <div className="progress">
                    <div className="progress-bar w-50" arial-role="progressbar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard__tasks d-flex flex-column flex-lg-row mt-5 justify-content-between align-items-baseline">
          <div className="me-lg-5">
            <h5>Conexiones de agenda para hoy</h5>
            <table className="table table-striped usersCalls">
              <tbody>
                {users.slice(0, 10).map((user) => {
                  return (
                    <tr key={user.account_id}>
                      <td>{user.name}</td>

                      <td className="userCalls__info">
                        <p>
                          Llamar
                          <br></br>
                          <span className="text-muted">Descuento temporada</span>
                        </p>
                      </td>

                      <td className="usersCalls__actions ">
                        <div className="d-flex justify-content-evenly align-items-center">
                          <span
                            className={`status-user ${
                              user.fh_unavailable && "status-user--active"
                            }`}
                          ></span>
                          <i className="fa-solid fa-phone mx-2"></i>
                          <i className="fa-solid fa-message"></i>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-3 goals">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-baseline">
              <h2>Tu plan de hoy</h2>
              <p className="goals__link">
                Ir a la gestion de llamados
                <i className="fa-solid fa-angle-right mx-2"></i>
              </p>
            </div>

            <div className="p-2 d-flex flex-column flex-lg-row goals__list">
              <div className="infoCard text-center text-lg-start d-flex flex-column flex-lg-row">
                <div className="goals__indicator d-flex justify-content-center align-items-center">
                  <span>30</span>
                </div>

                <div className="goals__info mt-3 mt-lg-0">
                  <p className="goals__text">
                    leasd de <br /> primer contacto
                  </p>
                  <p>
                    <i className="fa-solid fa-phone"></i>
                    <span className="mx-2">15</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-message"></i>
                    <span className="mx-2">15</span>
                  </p>
                </div>
              </div>

              <div className="infoCard text-center text-lg-start infoCard--blue d-flex flex-column flex-lg-row">
                <div className="goals__indicator d-flex justify-content-center align-items-center">
                  <span>30</span>
                </div>

                <div className="goals__info mt-3 mt-lg-0">
                  <p className="goals__text">
                    leasd por <br /> confirmar cita
                  </p>
                  <p>
                    <i className="fa-solid fa-phone"></i>
                    <span className="mx-2">15</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-message"></i>
                    <span className="mx-2">15</span>
                  </p>
                </div>
              </div>

              <div className="infoCard text-center text-lg-start infoCard--purple d-flex flex-column flex-lg-row">
                <div className="goals__indicator d-flex justify-content-center align-items-center">
                  <span>30</span>
                </div>

                <div className="goals__info mt-3 mt-lg-0">
                  <p className="goals__text">
                    leasd de <br /> ultimo intento
                  </p>
                  <p>
                    <i className="fa-solid fa-phone"></i>
                    <span className="mx-2">15</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-message"></i>
                    <span className="mx-2">15</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
