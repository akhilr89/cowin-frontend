import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import "./style.css";
import $ from "jquery";
import states from "./states.js";
import ScrollReveal from "scrollreveal"


(function () {
  const doc = document
  const rootEl = doc.documentElement
  const body = doc.body
  const lightSwitch = $(".lights-toggle").val();
  /* global ScrollReveal */
  const sr = window.sr = ScrollReveal()

  rootEl.classList.remove('no-js')
  rootEl.classList.add('js')

  window.addEventListener('load', function () {
    body.classList.add('is-loaded')
  })

  // Reveal animations
  function revealAnimations() {
    sr.reveal('.feature', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  }

  if (body.classList.contains('has-animations')) {
    window.addEventListener('load', revealAnimations)
  }

  // Light switcher
  if (lightSwitch) {
    window.addEventListener('load', checkLights)
    lightSwitch.addEventListener('change', checkLights)
  }

  function checkLights() {
    let labelText = lightSwitch.parentNode.querySelector('.label-text')
    if (lightSwitch.checked) {
      body.classList.remove('lights-off')
      if (labelText) {
        labelText.innerHTML = 'dark'
      }
    } else {
      body.classList.add('lights-off')
      if (labelText) {
        labelText.innerHTML = 'light'
      }
    }
  }
}())

function App() {
  const doc = document
  const body = doc.body
    let checkLights = (e) => {
      console.log("click");
          let labelText = $('.label-text').html('dark');
          console.log($('#lights-toggle').is(":checked"))
          if ($('#lights-toggle').is(":checked")) {
          body.classList.add('lights-off')
          if (labelText) {
            $('.label-text').html('light');
          }
            
          } else {
            body.classList.remove('lights-off')
            if (labelText) {
              $('.label-text').html('dark');
            }
          }
    };

  return (
    <body class="is-boxed has-animations">
      <div class="body-wrap boxed-container">
      <header class="site-header">
            <div class="container">
                <div class="site-header-inner">
                    <div class="brand header-brand">
                        <h1 class="m-0">
                            <a href="#">
								<img class="header-logo-image asset-light" src="images/logo-light.svg" alt="Logo"/>
								<img class="header-logo-image asset-dark" src="images/logo-dark.svg" alt="Logo"/>
                            </a>
                        </h1>
                    </div>
                         <div class="lights-toggle">
                          <input id="lights-toggle" type="checkbox" name="lights-toggle" class="switch" onChange={checkLights} />
                           <label for="lights-toggle" class="text-xs"></label>
                         </div>
                </div>
            </div>
        </header>
        <main>
          <section class="hero">
            <div class="container">
              <div class="hero-inner">
                ./<div class="hero-copy">
                  <h1 class="hero-title mt-0">Tierd of checking availability?</h1>
                  <p class="hero-paragraph">Sit back and relax. Our script will check for availability every minute and let you know if its available.</p>
                  <div class="hero-cta">
                    <a class="button button-primary"  href="#">Subscribe now</a>
               
                  </div>
                </div>
                <div class="hero-media">
                  <div class="header-illustration">
                    <img class="header-illustration-image asset-light" src="images/header-illustration-light.svg" alt="Header illustration" />
                    <img class="header-illustration-image asset-dark" src="images/header-illustration-dark.svg" alt="Header illustration" />
                  </div>
                  <div class="hero-media-illustration">
                    <img class="hero-media-illustration-image asset-light" src="images/hero-media-illustration-light.svg" alt="Hero media illustration" />
                    <img class="hero-media-illustration-image asset-dark" src="images/hero-media-illustration-dark.svg" alt="Hero media illustration" />
                  </div>
                  <div class="hero-media-container">
                    <img class="hero-media-image asset-light" src="images/hero-media-light.svg" alt="Hero media" />
                    <img class="hero-media-image asset-dark" src="images/hero-media-dark.svg" alt="Hero media" />
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
                    <h2 class="section-title mt-0">The Product</h2>
                    <p class="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                    <div class="features-image">
                      <img class="features-illustration asset-dark" src="images/features-illustration-dark.svg" alt="Feature illustration" />
                      <img class="features-box asset-dark" src="images/features-box-dark.svg" alt="Feature box" />
                      <img class="features-illustration asset-dark" src="images/features-illustration-top-dark.svg" alt="Feature illustration top" />
                      <img class="features-illustration asset-light" src="images/features-illustration-light.svg" alt="Feature illustration" />
                      <img class="features-box asset-light" src="images/features-box-light.svg" alt="Feature box" />
                      <img class="features-illustration asset-light" src="images/features-illustration-top-light.svg" alt="Feature illustration top" />
                    </div>
                  </div>
                </div>
                <div class="features-wrap">
                  <div class="feature">
                    <div class="feature-inner">
                      <div class="feature-icon">
                        <img class="asset-light" src="images/feature-01-light.svg" alt="Feature 01" />
                        <img class="asset-dark" src="images/feature-01-dark.svg" alt="Feature 01" />
                      </div>
                      <div class="feature-content">
                        <h3 class="feature-title mt-0">Where do we get data from?</h3>
                        <p class="text-sm mb-0">Government has made COWIN API public and free.</p>
                      </div>
                    </div>
                  </div>
                  <div id='some-id'>
                  </div>
                  
                  <div class="feature">
                    <div class="feature-inner">
                      <div class="feature-icon is-revealing">
                        <img class="asset-light" src="images/feature-02-light.svg" alt="Feature 02" />
                        <img class="asset-dark" src="images/feature-02-dark.svg" alt="Feature 02" />
                      </div>
                      <div class="feature-content ">
                        <h3 class="feature-title mt-0">Open-Source</h3>
                        <p class="text-sm mb-0">Open-source is LOVE. Check our repo and if contribute if possible</p>
                      </div>
                    </div>
                  </div>
                  <div class="feature ">
                    <div class="feature-inner">
                      <div class="feature-icon  is-revealing">
                        <img class="asset-light" src="images/feature-03-light.svg" alt="Feature 03" />
                        <img class="asset-dark" src="images/feature-03-dark.svg" alt="Feature 03" />
                      </div>
                      <div class="feature-content">
                        <h3 class="feature-title mt-0">Discover</h3>
                        <p class="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
            <section class="section">
                  <div class="container-sm">
                      <div class="cta-inner section-inner">
                          <div class="cta-header text-center ">
                              <h2 class="section-title mt-0 py-6" id="helloo">Subscribe for availability</h2>
                              <div className="section-paragraph pt-4">
                                <div className="row">
                                  <div className="col-sm-5">
                                    <PinForm />
                                  </div>
                                  <b className="col-sm-2">or</b>
                                  <div className="col-sm-5">
                                    <LoginForm />
                                  </div>
                          <br/>
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
                                            <tbody id="tbody">
                                            </tbody>
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
                            <h2 class="section-title mt-0">Visit Cowin Portal and Register</h2>
                            <p class="section-paragraph">Some paragraph.</p>
							<div class="cta-cta">
								<a class="button button-primary" target="_blank" href="https://www.cowin.gov.in/">Open COWIN</a>
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
							<img class="asset-light" src="images/logo-light.svg" alt="Logo"/>
							<img class="asset-dark" src="images/logo-dark.svg" alt="Logo"/>
                        </a>
                    </div>
                    <ul class="footer-links list-reset">
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">FAQ's</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                    <ul class="footer-social-links list-reset">
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Facebook</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Twitter</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Google</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div class="footer-copyright">&copy; 2021 Vasant & Anuj, all rights reserved</div>
                </div>
            </div>
        </footer>

      </div>
    </body>
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
        var topStr = "<tr> <th scope='col'>Centre Name</th>";
        var dt = new Date(orDate);
        for (var i = 0; i < 7; i++) {
          var str = dt.toDateString().substring(4, 16);
          topStr += "<th scope='col'>" + str + "</th>";
          dt.setDate(dt.getDate() + 1);
        }
        topStr += "</tr>"
        $("#thead").html(topStr);
        var auxArr2 = [];
        var sessionArr = [];
        $.each(result.centers, function (i, option) {
          console.log(result.centers[i].sessions);
          for (var j = 0; j < 7; j++) {
            if (result.centers[i].sessions[j] == null) {
              sessionArr[j] = "<td><p>NA</p></td>";
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
          $.each(result.centers[i].sessions, function (j, option2) { });
          auxArr2[i] =
            "<tr>" +
            "<p>" +
            "<td>" +
            result.centers[i].name +
            ", " +
            result.centers[i].block_name +
            ", " +
            result.centers[i].state_name +
            ", " +
            result.centers[i].pincode +
            "</p></td>" +
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
    var res = origDT.substring(8) + "-" + origDT.substring(5, 7) + "-" + origDT.substring(0, 4);
    setDate(res);
  };
  function activateLasers(e) {
    e.preventDefault();
    var date = $(".date").val();
    var email = $(".email").val();
    var pincode = $(".pincode").val();
    $.post("https://cowin-realpython.herokuapp.com/addP", { email: email, pincode: pincode, date: date }, function (result) {
      $("#helloo").html(result.success);
    });
  }
  return (
    <form onSubmit={activateLasers}>
      <div class="container">
        <div class="row">
          <input
            class="form-control mr-sm-2 pincode"
            name="pincode"
            required
            type="text"
            onChange={handlePinCodeChange}
            placeholder="Enter your PinCode"
            aria-label="PinCode"
          />
          <input
            class="form-control mr-sm-2 date"
            name="date"
            required
            type="date"
            onChange={handleDateChange}
            placeholder="Date (dd-mm-yyyy)"
            aria-label="Date (dd-mm-yyyy)"
          />
          <input
            class="form-control mr-sm-2 email"
            name="email"
            required
            type="email"
            placeholder="Enter your E-mail"
            aria-label="E-mail"
          />
        </div>
        <div class="row pb-4">
        
          <button type="submit" className="button button-primary col-sm shadow-none">
            Subscribe
          </button>
          <button onClick={handleSubmit} className="button button-danger col-sm shadow-none">
            Check Availability
          </button>
        </div>
      </div>
    </form>
  );
}



function LoginForm(props) {
  let [allDists, setAllDists] = useState(null);
  allDists = [];
  var selectedDistrict;
  var origDT;
  var todaysDate;
  var n = new Date();
  var y = n.getFullYear();
  var m = n.getMonth() + 1;
  var d = n.getDate();
  todaysDate = d + "-" + m + "-" + y;
  origDT = y + "-" + m + "-" + d;
  let [statee, setStatee] = useState("⬇️ Select a State ⬇️");
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
        var topStr = "<tr> <th scope='col'>Centre Name</th>";
        var dt = new Date(orDate);
        for (var i = 0; i < 7; i++) {
          var str = dt.toDateString().substring(4, 16);
          topStr += "<th scope='col'>" + str + "</th>";
          dt.setDate(dt.getDate() + 1);
        }
        topStr += "</tr>"
        $("#thead").html(topStr);
        var auxArr2 = [];
        var sessionArr = [];
        $.each(result.centers, function (i, option) {
          console.log(result.centers[i].sessions);
          for (var j = 0; j < 7; j++) {
            if (result.centers[i].sessions[j] == null) {
              sessionArr[j] = "<td><p>NA</p></td>";
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
          $.each(result.centers[i].sessions, function (j, option2) { });
          auxArr2[i] =
            "<tr>" +
            "<p>" +
            "<td>" +
            result.centers[i].name +
            ", " +
            result.centers[i].block_name +
            ", " +
            result.centers[i].state_name +
            ", " +
            result.centers[i].pincode +
            "</p></td>" +
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
    setStatee(e.target.value);
  };
  let handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };
  let handleDateChange = (e) => {
    origDT = e.target.value;
    setOrDate(e.target.value);
    var res = origDT.substring(8) + "-" + origDT.substring(5, 7) + "-" + origDT.substring(0, 4);
    setDate(res);
  };
  function activateLasers(e) {
    e.preventDefault();
    var date = $("#date").val();
    var email = $("#email").val();
    var distict = $("#districtdd").val();
    $.post("https://cowin-realpython.herokuapp.com/addD", { email: email, district: district, date: date }, function (result) {
      $("#helloo").html(result.success);
      console.log(result);
    });
  }
  return (
    <form onSubmit={activateLasers}>
      {/*statee*/}
      <div class="container">
        <div class="row">
          <select
            id="state-dd"
            name="state"
            className="form-select col-sm state"
            onChange={handleStateChange}
          >
            <option value="⬇️ Select a State ⬇️"> -- Select a State -- </option>
            {states.map((state) => (
              <option value={state.state_id}>{state.state_name}</option>
            ))}
          </select>
          <select
            id="districtdd"
            name="district"
            className="form-select col-sm distict"
            onChange={handleDistrictChange}
          >
            <option value="⬇️ Select a District ⬇️">
              {" "}
              -- Select a District --{" "}
            </option>

            {allDists.map((fruit) => (
              <option value={fruit.district_id}>{fruit.district_name}</option>
            ))}
          </select>
          <input
            class="form-control mr-sm-2"
            name="date"
            required
            id="date"
            type="date"
            onChange={handleDateChange}
            placeholder="Date (dd-mm-yyyy)"
            aria-label="Date (dd-mm-yyyy)"
          />
          <input
            class="form-control mr-sm-2 email"
            name="email"
            required
            type="email"
            id="email"
            placeholder="Enter your E-mail"
            aria-label="Enter your E-mail"
          />
        </div>
        <div class="row">
          <button type="submit" className="button button-primary myButton col-sm shadow-none">
            Subscribe
          </button>
          <button onClick={handleSubmit} className="button button-danger col-sm shadow-none">
            Check Availability
          </button>
          {/*district*/}
        </div>
      </div>
    </form>
  );
}

export default App;

