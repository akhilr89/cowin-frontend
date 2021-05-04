import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import $ from "jquery";
import states from "./states.js";

function App() {
  return (
    <main>
      <h1 id="helloo">Subscribe for availability</h1>

      <br />
      <br />
      
      <br />
        
        <br/>
        <div className="container">
    <div className="row">
    <div className="col-sm-5">
      <PinForm />
      </div>
      <b className="col-sm-2">or</b>
      <div className="col-sm-5">
        <LoginForm />
        </div>
      
      {/*district*/}
    </div>
    </div>
    <div className="py-3">
      <table className="table table-striped py-3">
        <thead id="thead">
          <tr>
            <th scope="col">Centre Name</th>
            <th scope="col">First Day</th>
            <th scope="col">Second Day</th>
            <th scope="col">Third Day</th>
            <th scope="col">Fourth Day</th>
            <th scope="col">Fifth Day</th>
            <th scope="col">Sixth Day</th>
            <th scope="col">Seventh Day</th>
          </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
      </table>
      </div>
    </main>
  );
}


function PinForm(props) {
  var origDT;
  var todaysDate;
    var n =  new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    todaysDate = d+"-"+m+"-"+y;
    origDT = y+"-"+m+"-"+d;
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
        for(var i=0; i<7; i++) {
        var str = dt.toDateString().substring(4, 16);
            topStr += "<th scope='col'>"+ str + "</th>";
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
          $.each(result.centers[i].sessions, function (j, option2) {});
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
        var res = origDT.substring(8) +"-"+origDT.substring(5,7)+"-"+origDT.substring(0,4);
        setDate(res);
      };
  function activateLasers(e) {
   e.preventDefault();
    var date = $(".date").val();
    var email = $(".email").val();
    var pincode = $(".pincode").val();
    $.post("https://cowin-realpython.herokuapp.com/addP", {email: email, pincode: pincode, date: date}, function(result){
        $("#helloo").html(result);
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
            aria-label="Search"
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
        <div class="row">
          <button type="submit" className="btn btn-danger col-sm shadow-none">
            Subscribe
          </button>
          <button onClick={handleSubmit} className="btn btn-warning col-sm shadow-none">
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
    var n =  new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    todaysDate = d+"-"+m+"-"+y;
    origDT = y+"-"+m+"-"+d;
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
        for(var i=0; i<7; i++) {
        var str = dt.toDateString().substring(4, 16);
            topStr += "<th scope='col'>"+ str + "</th>";
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
          $.each(result.centers[i].sessions, function (j, option2) {});
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
        var res = origDT.substring(8) +"-"+origDT.substring(5,7)+"-"+origDT.substring(0,4);
        setDate(res);
      };
  function activateLasers(e) {
   e.preventDefault();
    var date = $(".date").val();
    var email = $(".email").val();
    var distict = $(".distict").val();
    $.post("https://cowin-realpython.herokuapp.com/addD", {email: email, district: district, date: date}, function(result){
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
            class="form-control mr-sm-2 date"
            name="date"
            required
            type="date"
            onChange={handleDateChange}
            placeholder="Date (dd-mm-yyyy)"
            aria-label="Search"
          />
          <input
            class="form-control mr-sm-2 email"
            name="email"
            required
            type="email"
            placeholder="Enter your E-mail"
            aria-label="Search"
          />
        </div>
        <div class="row">
          <button type="submit" className="btn btn-danger myButton col-sm shadow-none">
            Subscribe
          </button>
          <button onClick={handleSubmit} className="btn btn-warning col-sm shadow-none">
            Check Availability
          </button>
          {/*district*/}
        </div>
      </div>
    </form>
  );
}

export default App;

