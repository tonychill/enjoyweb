//join/step2.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const FlowStep2 = (props) => {
  console.log(props);
  useEffect(() => {});

  return (
    <div className="sign-up-wrap m-auto">
      <div className="fm-head">
        <h2 className="">Choose your plan.</h2>
        <button>
          <div className="pl-choose-btn-wrp">
            <div
              onClick={() => {
                props.chooseMembershipLevel(2);
              }}
              className="pl-btn"
            >
              Choose
            </div>
          </div>
        </button>
      </div>

      <div className="wrapper mt-4">
        <div id="pl-ct" className="row d-none">
          <div className="col-md-4 px-0 d-flex justify-content-center">
            <div id="plan1" className="pl-wrp bx-sdw bd-rad ml-2 mr-2">
              <div className="pl-ct=wrp m-3">
                <section className="pl-top-sec ">
                  <div className="sec2">
                    <h5 className="pl-title">CHO</h5>
                    <div className="u-line mt-2"></div>
                    <div className="row mt-2 pl-price-wrp">
                      <div className="empty col-5 pr-0"></div>
                      <div className="empty col-6 pl-0">
                        <div className="pl-price">$259</div>
                        <p className="pl-rate ml-2">per year</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="planContent">
                  <article className="planinformation ">
                    <div className="pl-features bord ">
                      <ul className="pl-0">
                        <li className="pl-item pt-2" role="none">
                          {/*<i className="pl-item-icon col-1">
                            <strong>O</strong>
                          </i>*/}
                          <p className="pl-item-description">Chill on your own beach all day long.</p>
                        </li>
                        <li className="pl-item pt-2" role="none">
                          {/*<i className="pl-item-icon col-1">
                            <strong>O</strong>
                          </i>*/}
                          <p className="pl-item-description">Chill on your own beach all day long.</p>
                        </li>
                        <li className="pl-item pt-2" role="none">
                          {/*<i className="pl-item-icon col-1">
                            <strong>O</strong>
                          </i>*/}
                          <p className="pl-item-description">Chill on your own beach all day long.</p>
                        </li>
                        <li className="pl-item pt-2" role="none">
                          {/*<i className="pl-item-icon col-1">
                            <strong>O</strong>
                          </i>*/}
                          <p className="pl-item-description">Chill on your own beach all day long.</p>
                        </li>
                      </ul>
                    </div>
                  </article>
                </section>
                <section className="calltoaction">
                  <div className="pl-choose-btn-wrp">
                    <div
                      onClick={() => {
                        props.chooseMembershpLevel(1);
                      }}
                      className="pl-btn"
                    >
                      Choose
                    </div>
                  </div>
                </section>
                <section className="learn more link">
                  <a href="#" className="lkb m-auto">
                    <span>Learn more</span>
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-0 d-flex justify-content-center">
            <div id="plan2" className="pl-wrp bx-sdw bd-rad ml-2 mr-2">
              <div className="pl-ct=wrp m-3">
                <section className="pl-top-sec ">
                  <div className="sec2">
                    <h5 className="pl-title">CHO</h5>
                    <div className="u-line mt-2"></div>
                    <div className="row mt-2 pl-price-wrp">
                      <div className="empty col-5 pr-0"></div>
                      <div className="empty col-6 pl-0">
                        <div className="pl-price">$259</div>
                        <p className="pl-rate ml-2">per year</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="planContent">
                  <article className="planinformation ">
                    <div className="pl-features bord ">
                      <ul className="pl-0">
                        <li className="pl-item pt-2" role="none">
                          {/*<i className="pl-item-icon col-1">
                            <strong>O</strong>
                          </i>*/}
                          <p className="pl-item-description">Chill on your own beach all day long.</p>
                        </li>
                        <li className="pl-item pt-2" role="none">
                          {/*<i className="pl-item-icon col-1">
                            <strong>O</strong>
                          </i>*/}
                          <p className="pl-item-description">Chill on your own beach all day long.</p>
                        </li>

                        <li className="pl-item pt-2" role="none">
                          {/*<i className="pl-item-icon col-1">
                            <strong>O</strong>
                          </i>*/}
                          <p className="pl-item-description">Chill on your own beach all day long.</p>
                        </li>
                        <li className="pl-item pt-2" role="none">
                          {/*<i className="pl-item-icon col-1">
                            <strong>O</strong>
                          </i>*/}
                          <p className="pl-item-description">Chill on your own beach all day long.</p>
                        </li>
                      </ul>
                    </div>
                  </article>
                </section>
                <section className="calltoaction">
                  <div className="pl-choose-btn-wrp">
                    <button
                      onClick={() => {
                        props.chooseMembershpLevel(2);
                      }}
                      type="button"
                      className="btn btn-primary m-auto d-block"
                    >
                      Coffee
                      <span></span>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-0 d-flex justify-content-center">
            <div id="plan3" className="pl-wrp bx-sdw bd-rad ml-2 mr-2">
              <div className="pl-ct=wrp m-3">
                <section className="pl-top-sec ">
                  <div className="sec2">
                    <h5 className="pl-title">CHO</h5>
                    <div className="u-line mt-2"></div>
                    <div className="row mt-2 pl-price-wrp">
                      <div className="empty col-5 pr-0"></div>
                      <div className="empty col-6 pl-0">
                        <div className="pl-price">$259</div>
                        <p className="pl-rate ml-2">per year</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="planContent">
                  <article className="planinformation ">
                    <div className="pl-features bord ">
                      <ul className="pl-0">
                        <li className="pl-item pt-2" role="none">
                          {/*<i className="pl-item-icon col-1">
                            <strong>O</strong>
                          </i>*/}
                          <p className="pl-item-description">Chill on your own beach all day long.</p>
                        </li>
                        <li className="pl-item pt-2" role="none">
                          {/*<i className="pl-item-icon col-1">
                            <strong>O</strong>
                          </i>*/}
                          <p className="pl-item-description">Chill on your own beach all day long.</p>
                        </li>

                        <li className="pl-item pt-2" role="none">
                          {/*<i className="pl-item-icon col-1">
                            <strong>O</strong>
                          </i>*/}
                          <p className="pl-item-description">Chill on your own beach all day long.</p>
                        </li>
                        <li className="pl-item pt-2" role="none">
                          {/*<i className="pl-item-icon col-1">
                            <strong>O</strong>
                          </i>*/}
                          <p className="pl-item-description">Chill on your own beach all day long.</p>
                        </li>
                      </ul>
                    </div>
                  </article>
                </section>
                <section className="calltoaction">
                  <div className="pl-choose-btn-wrp">
                    <div
                      onClick={() => {
                        props.chooseMembershpLevel(3);
                      }}
                      className="pl-btn"
                    >
                      Choose
                    </div>
                  </div>
                </section>
                <section className="learn more link">
                  <Link href="#" as="/the-club">
                    <a className="lkb">
                      <span>Learn more</span>
                    </a>
                  </Link>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* I think the following div is pointless. Each plan should have thier own "learn more link" */}
      <div className="mt-4">
        <section className="learn more link">
          <div className="d-flex justify-content-center m-auto d-block">
            <div className="mt-3">
              <Link href="club" as="/club">
                <a className="lkb">
                  <span>Learn more</span>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default FlowStep2;
