import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import "./style.css";
import $ from "jquery";
import states from "./states.js";
import ScrollReveal from "scrollreveal";

(function () {
  const doc = document;
  const rootEl = doc.documentElement;
  const body = doc.body;
  const lightSwitch = $(".lights-toggle").val();
  /* global ScrollReveal */
  const sr = (window.sr = ScrollReveal());

  rootEl.classList.remove("no-js");
  rootEl.classList.add("js");

  window.addEventListener("load", function () {
    body.classList.add("is-loaded");
  });

  // Reveal animations
  function revealAnimations() {
    sr.reveal(".feature", {
      duration: 600,
      distance: "20px",
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      origin: "right",
      viewFactor: 0.2,
    });
  }

  if (body.classList.contains("has-animations")) {
    window.addEventListener("load", revealAnimations);
  }

  // Light switcher
  if (lightSwitch) {
    window.addEventListener("load", checkLights);
    lightSwitch.addEventListener("change", checkLights);
  }

  function checkLights() {
    let labelText = lightSwitch.parentNode.querySelector(".label-text");
    if (lightSwitch.checked) {
      body.classList.remove("lights-off");
      if (labelText) {
        labelText.innerHTML = "dark";
      }
    } else {
      body.classList.add("lights-off");
      if (labelText) {
        labelText.innerHTML = "light";
      }
    }
  }
})();

function App() {
  const doc = document;
  const body = doc.body;
  let checkLights = (e) => {
    console.log("click");
    let labelText = $(".label-text").html("dark");
    console.log($("#lights-toggle").is(":checked"));
    if ($("#lights-toggle").is(":checked")) {
      body.classList.add("lights-off");
      if (labelText) {
        $(".label-text").html("light");
      }
    } else {
      body.classList.remove("lights-off");
      if (labelText) {
        $(".label-text").html("dark");
      }
    }
  };

  return (
    <div class="body-wrap boxed-container">
      <header class="site-header">
        <div class="container">
          <div class="site-header-inner">
            <div class="brand header-brand">
              <h1 class="m-0">
                <a href="#">
                  <img
                    class="header-logo-image asset-light"
                    src="images/logo-light.svg"
                    alt="Logo"
                  />
                  <img
                    class="header-logo-image asset-dark"
                    src="images/logo-dark.svg"
                    alt="Logo"
                  />
                </a>
              </h1>
            </div>
            <div class="lights-toggle">
              <input
                id="lights-toggle"
                type="checkbox"
                name="lights-toggle"
                class="switch"
                onChange={checkLights}
              />
              <label for="lights-toggle" class="text-xs"></label>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="hero">
          <div class="container">
            <div class="hero-inner">
              <div class="hero-copy">
                <h1 class="hero-title mt-0">
                  Tired of checking availability of vaccine?
                </h1>
                <p class="hero-paragraph">
                  Sit back and relax. We will do it for you. We will check every
                  minute and if there is a slot available you will get a
                  notification by mail. Yup, it's that easy.
                </p>
                <div class="hero-cta">
                  <a
                    class="button button-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/vasantakmr/cowin-frontend"
                  >
                    <svg
                      class="github-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span class="p">Github Repo</span>
                  </a>
                </div>
              </div>
              <div class="hero-media">
                <div class="header-illustration">
                  <img
                    class="header-illustration-image asset-light"
                    src="images/header-illustration-light.svg"
                    alt="Header illustration"
                  />
                  <img
                    class="header-illustration-image asset-dark"
                    src="images/header-illustration-dark.svg"
                    alt="Header illustration"
                  />
                </div>
                <div class="hero-media-illustration">
                  <img
                    class="hero-media-illustration-image asset-light"
                    src="images/hero-media-illustration-light.svg"
                    alt="Hero media illustration"
                  />
                  <img
                    class="hero-media-illustration-image asset-dark"
                    src="images/hero-media-illustration-dark.svg"
                    alt="Hero media illustration"
                  />
                </div>
                <div class="hero-media-container">
                  <img
                    class="hero-media-image asset-light"
                    src="images/hero-media-light.png"
                    alt="Hero media"
                  />
                  <img
                    class="hero-media-image asset-dark"
                    src="images/hero-media-dark.png"
                    alt="Hero media"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="features section">
          <div class="container">
            <div class="features-inner section-inner has-bottom-divider">
              <div class="features-header text-center">
                <div class="container-sm">
                  <h2 class="section-title mt-0">How it Works?</h2>
                  <p class="section-paragraph">
                    You just need to add your Pincode or select your state and
                    district, and date. That's all. We will check availability
                    for the next 7 days till you get your slot.
                  </p>
                  <div class="features-image">
                    <img
                      class="features-illustration asset-dark"
                      src="images/features-illustration-dark.svg"
                      alt="Feature illustration"
                    />
                    <img
                      class="features-box asset-dark"
                      src="images/features-box-dark.png"
                      alt="Feature box"
                    />
                    <img
                      class="features-illustration asset-dark"
                      src="images/features-illustration-top-dark.svg"
                      alt="Feature illustration top"
                    />
                    <img
                      class="features-illustration asset-light"
                      src="images/features-illustration-light.svg"
                      alt="Feature illustration"
                    />
                    <img
                      class="features-box asset-light"
                      src="images/features-box-light.png"
                      alt="Feature box"
                    />
                    <img
                      class="features-illustration asset-light"
                      src="images/features-illustration-top-light.svg"
                      alt="Feature illustration top"
                    />
                  </div>
                </div>
              </div>
              <div class="features-wrap">
                <div class="feature">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img
                        class="asset-light"
                        src="images/feature-01-light.svg"
                        alt="Feature 01"
                      />
                      <img
                        class="asset-dark"
                        src="images/feature-01-dark.svg"
                        alt="Feature 01"
                      />
                    </div>
                    <div class="feature-content">
                      <h3 class="feature-title mt-0">Is this data genuine?</h3>
                      <p class="text-sm mb-0">
                        Government has made COWIN API public(with some usage
                        limits) and free. We make use of that api and give
                        Notifications.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="feature ">
                  <div class="feature-inner">
                    <div class="feature-icon is-revealing">
                      <img
                        class="asset-light"
                        src="images/feature-02-light.svg"
                        alt="Feature 02"
                      />
                      <img
                        class="asset-dark"
                        src="images/feature-02-dark.svg"
                        alt="Feature 02"
                      />
                    </div>
                    <div class="feature-content">
                      <h3 class="feature-title mt-0">How are we doing it?</h3>
                      <p class="text-sm mb-0">
                        Let's just say that we have a robot working 24 hours non
                        stop for us and he is the real hero who is doing this
                        for all of us.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="feature">
                  <div class="feature-inner">
                    <div class="feature-icon  is-revealing">
                      <img
                        class="asset-light"
                        src="images/feature-03-light.svg"
                        alt="Feature 03"
                      />
                      <img
                        class="asset-dark"
                        src="images/feature-03-dark.svg"
                        alt="Feature 03"
                      />
                    </div>
                    <div class="feature-content ">
                      <h3 class="feature-title mt-0">Open-Source</h3>
                      <p class="text-sm mb-0">
                        Open-source is LOVE. Check our repo and contribute if
                        possible
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container-smm">
            <div class="cta-inner section-inner">
              <div class="cta-header text-center ">
                <h2 class="section-title mt-0 py-6" id="helloo">
                  Subscribe for availability
                </h2>
                <div className="section-paragraph pt-4">
                  <div className="row">
                    <div className="col-sm-5">
                      <PinForm />
                    </div>
                    <b className="col-sm-2">or</b>
                    <div className="col-sm-5">
                      <LoginForm />
                    </div>
                    <br />
                    {/*district*/}
                  </div>
                </div>
                <div className="py-6">
                  <table className="table table-striped py-6">
                    <thead id="thead">
                      {/* <tr>
                                                <th scope="col">Centre Name</th>
                                                <th scope="col">First Day</th>
                                                <th scope="col">Second Day</th>
                                                <th scope="col">Third Day</th>
                                                <th scope="col">Fourth Day</th>
                                                <th scope="col">Fifth Day</th>
                                                <th scope="col">Sixth Day</th>
                                                <th scope="col">Seventh Day</th>
                                              </tr> */}
                    </thead>
                    <tbody id="tbody"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="cta section">
          <div class="container-sm">
            <div class="cta-inner section-inner">
              <div class="cta-header text-center">
                <h2 class="section-title mt-0">
                  Visit Cowin Portal and Register
                </h2>
                <p class="section-paragraph">
                  Cowin is a government website that allows us to register, book
                  a slot for vaccination, get the vaccination certificate and
                  much more. Pay a visit.
                </p>
                <div class="cta-cta">
                  <a
                    class="button button-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.cowin.gov.in/"
                  >
                    Open COWIN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br />
      </main>
      <footer class="site-footer has-top-divider">
        <div class="container">
          <div class="site-footer-inner">
            <div class="brand footer-brand">
              <a href="#">
                <img
                  class="asset-light"
                  src="images/logo-light.svg"
                  alt="Logo"
                />
                <img class="asset-dark" src="images/logo-dark.svg" alt="Logo" />
              </a>
            </div>
            <ul class="footer-links list-reset">
              <li>
                <a href="mailto:cowin-availability@gmail.com">Contact</a>
              </li>
            </ul>
            <ul class="footer-social-links list-reset">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/anujjha30/"
                >
                  <span class="screen-reader-text">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </li>
            </ul>
            <div class="footer-copyright">
              &copy;{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/vasantakmr"
              >
                {" "}
                Vasant{" "}
              </a>{" "}
              &{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/anujjha30/"
              >
                Anuj
              </a>
              , all rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PinForm(props) {
  var origDT;
  var todaysDate;
  var n = new Date();
  var y = n.getFullYear();
  var m = n.getMonth() + 1;
  var d = n.getDate();
  todaysDate = d + "-" + m + "-" + y;
  origDT = y + "-" + m + "-" + d;
  let [pinCode, setPinCode] = useState("");
  let [date, setDate] = useState(todaysDate);
  let [orDate, setOrDate] = useState(origDT);
  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url:
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=" +
        pinCode +
        "&date=" +
        date,
      success: function (result) {
        console.log(result.centers);
        var topStr = "<tr> <th scope='col'><b class='bbb'>Centre Name</b></th>";
        var dt = new Date(orDate);
        for (var i = 0; i < 7; i++) {
          var str = dt.toDateString().substring(4, 16);
          topStr += "<th scope='col'><b class='bbb'>" + str + "</th>";
          dt.setDate(dt.getDate() + 1);
        }
        topStr += "</tr>";
        $("#thead").html(topStr);
        var auxArr2 = [];
        var sessionArr = [];
        $.each(result.centers, function (i, option) {
          console.log(result.centers[i].sessions);
          for (var j = 0; j < 7; j++) {
            if (result.centers[i].sessions[j] == null) {
              sessionArr[j] = "<td><p class='ppp'>NA</p></td>";
            } else {
              sessionArr[j] =
                "<td><div class='container'><div class='row'>" +
                "<span class='badge  bg-primary my-1'>" +
                result.centers[i].sessions[j].available_capacity +
                " </span>" +
                "</div><div class='row'><span class='badge  bg-danger my-1'>Age " +
                result.centers[i].sessions[j].min_age_limit +
                "+ </span>" +
                "</div></div> " +
                "</td>";
            }
          }
          $.each(result.centers[i].sessions, function (j, option2) {});
          auxArr2[i] =
            "<tr>" +
            "<td>" +
            "<b class='ppp'>" +
            result.centers[i].name +
            ", " +
            result.centers[i].block_name +
            ", " +
            result.centers[i].state_name +
            ", " +
            result.centers[i].pincode +
            "</b></td>" +
            sessionArr.join("") +
            "</tr>";
        });
        $("#tbody").html(auxArr2.join(""));
        //$(".insideTable").html(auxArr2.join(""));
      },
    });
  };
  let handlePinCodeChange = (e) => {
    setPinCode(e.target.value);
  };
  let handleDateChange = (e) => {
    origDT = e.target.value;
    setOrDate(e.target.value);
    var res =
      origDT.substring(8) +
      "-" +
      origDT.substring(5, 7) +
      "-" +
      origDT.substring(0, 4);
    setDate(res);
  };
  function activateLasers(e) {
    e.preventDefault();
    var date = $(".date").val();
    var email = $(".email").val();
    var pincode = $(".pincode").val();
    $.post(
      "https://cowin-realpython.herokuapp.com/addP",
      { email: email, pincode: pincode, date: date },
      function (result) {
        $("#helloo").html(result.success);
      }
    );
  }
  return (
    <form onSubmit={activateLasers}>
      <div class="container">
        <div class="row">
          <input
            class="form-control mr-sm-2 pincode my-1"
            name="pincode"
            required
            type="text"
            onChange={handlePinCodeChange}
            placeholder="Enter your PinCode"
            aria-label="PinCode"
          />
          <input
            class="form-control mr-sm-2 date my-1"
            name="date"
            required
            type="date"
            onChange={handleDateChange}
            placeholder="Date (dd-mm-yyyy)"
            aria-label="Date (dd-mm-yyyy)"
          />
          <input
            class="form-control mr-sm-2 email my-1"
            name="email"
            required
            type="email"
            placeholder="Enter your E-mail"
            aria-label="E-mail"
          />
        </div>
        <div class="row pb-4">
          <button
            type="submit"
            className="button button-primary col-sm shadow-none"
          >
            Subscribe
          </button>
          <button
            onClick={handleSubmit}
            className="button button-danger col-sm shadow-none"
          >
            Check Availability
          </button>
        </div>
      </div>
    </form>
  );
}

function LoginForm(props) {
  var allDists = [];
  var origDT;
  var todaysDate;
  var n = new Date();
  var y = n.getFullYear();
  var m = n.getMonth() + 1;
  var d = n.getDate();
  todaysDate = d + "-" + m + "-" + y;
  origDT = y + "-" + m + "-" + d;
  let [district, setDistrict] = useState("⬇️ Select a District ⬇️");
  let [date, setDate] = useState(todaysDate);
  let [orDate, setOrDate] = useState(origDT);
  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url:
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=" +
        district +
        "&date=" +
        date,
      success: function (result) {
        console.log(result.centers);
        var topStr = "<tr> <th scope='col'><b class='bbb'>Centre Name</b></th>";
        var dt = new Date(orDate);
        for (var i = 0; i < 7; i++) {
          var str = dt.toDateString().substring(4, 16);
          topStr += "<th scope='col'><b class='bbb'>" + str + "</b></th>";
          dt.setDate(dt.getDate() + 1);
        }
        topStr += "</tr>";
        $("#thead").html(topStr);
        var auxArr2 = [];
        var sessionArr = [];
        $.each(result.centers, function (i, option) {
          console.log(result.centers[i].sessions);
          for (var j = 0; j < 7; j++) {
            if (result.centers[i].sessions[j] == null) {
              sessionArr[j] = "<td><p class='ppp'>NA</p></td>";
            } else {
              sessionArr[j] =
                "<td><div class='container'><div class='row'>" +
                "<span class='badge  bg-primary my-1'>" +
                result.centers[i].sessions[j].available_capacity +
                " </span>" +
                "</div><div class='row'><span class='badge  bg-danger my-1'>Age " +
                result.centers[i].sessions[j].min_age_limit +
                "+ </span>" +
                "</div></div> " +
                "</td>";
            }
          }
          $.each(result.centers[i].sessions, function (j, option2) {});
          auxArr2[i] =
            "<tr>" +
            "<td>" +
            "<b class='bbb'>" +
            result.centers[i].name +
            ", " +
            result.centers[i].block_name +
            ", " +
            result.centers[i].state_name +
            ", " +
            result.centers[i].pincode +
            "</b></td>" +
            sessionArr.join("") +
            "</tr>";
        });
        $("#tbody").html(auxArr2.join(""));
        //$(".insideTable").html(auxArr2.join(""));
      },
    });
  };
  let handleStateChange = (e) => {
    $("#districtdd").empty();
    $("#districtdd").append("<option>-- Select a District --</option>");
    $.ajax({
      url:
        "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" +
        e.target.value,
      success: function (result) {
        if (result.isOk === false) alert(result.message);
        var auxArr2 = [];
        $.each(result.districts, function (i, option) {
          auxArr2[i] =
            "<option value='" +
            result.districts[i].district_id +
            "'>" +
            result.districts[i].district_name +
            "</option>";
        });
        $("#districtdd").append(auxArr2.join(""));
      },
    });
  };
  let handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };
  let handleDateChange = (e) => {
    origDT = e.target.value;
    setOrDate(e.target.value);
    var res =
      origDT.substring(8) +
      "-" +
      origDT.substring(5, 7) +
      "-" +
      origDT.substring(0, 4);
    setDate(res);
  };
  function activateLasers(e) {
    e.preventDefault();
    var date = $("#date").val();
    var email = $("#email").val();
    var distict = $("#districtdd").val();
    $.post(
      "https://cowin-realpython.herokuapp.com/addD",
      { email: email, district: district, date: date },
      function (result) {
        $("#helloo").html(result.success);
        console.log(result);
      }
    );
  }
  return (
    <form className="pinformm" onSubmit={activateLasers}>
      {/*statee*/}
      <div class="container">
        <div class="row">
          <select
            id="state-dd"
            name="state"
            className="form-select col-sm state  my-1"
            onChange={handleStateChange}
          >
            <option value="⬇️ Select a State ⬇️">Select a State</option>
            {states.map((state) => (
              <option value={state.state_id}>{state.state_name}</option>
            ))}
          </select>
          <select
            id="districtdd"
            name="district"
            className="form-select col-sm distict my-1"
            onChange={handleDistrictChange}
          >
            <option value="⬇️ Select a District ⬇️">Select a District</option>

            {allDists.map((fruit) => (
              <option value={fruit.district_id}>{fruit.district_name}</option>
            ))}
          </select>
          <input
            class="form-control mr-sm-2 my-1"
            name="date"
            required
            id="date"
            type="date"
            onChange={handleDateChange}
            placeholder="Date (dd-mm-yyyy)"
            aria-label="Date (dd-mm-yyyy)"
          />
          <input
            class="form-control mr-sm-2 email my-1"
            name="email"
            required
            type="email"
            id="email"
            placeholder="Enter your E-mail"
            aria-label="Enter your E-mail"
          />
        </div>
        <div class="row">
          <button
            type="submit"
            className="button button-primary myButton col-sm shadow-none"
          >
            Subscribe
          </button>
          <button
            onClick={handleSubmit}
            className="button button-danger col-sm shadow-none"
          >
            Check Availability
          </button>
          {/*district*/}
        </div>
      </div>
    </form>
  );
}

export default App;

