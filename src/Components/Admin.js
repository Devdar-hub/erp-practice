import React, { useEffect } from "react";
import { useState } from "react";

function Admin() {
  const [leads_list, setLeadsList] = useState(null);
  const [contact_list, setContactList] = useState(null);

  useEffect(() => {
    getLeadlist();
    async function getLeadlist() {
      var gettoken = localStorage.getItem("token");

      const response = await fetch(
        "https://projects.parthvi.tech/api/v1/lead",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + gettoken,
          },
        }
      );
      const data = await response.json();
      if (data.status_code === 200) {
        document.getElementById("errordiv").innerHTML = "data received";
      } else {
        document.getElementById("errordiv").innerHTML = "Error from server";
      }
      console.log(25, data);
      setLeadsList(data.data);
    }

    getContactlist();
    async function getContactlist() {
      var gettoken = localStorage.getItem("token");

      const response = await fetch(
        "https://projects.parthvi.tech/api/v1/contact/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + gettoken,
          },
        }
      );
      const data = await response.json();
      if (data.status_code === 200) {
        document.getElementById("errordiv").innerHTML = "data received";
      } else {
        document.getElementById("errordiv").innerHTML = "Error from server";
      }
      console.log(74, data);
      setContactList(data.data);
    }
  }, []);

  return (
    <div>
      <div id="id1">
        <h1>lead List</h1>
        <table style={{ border: "2px solid black" }} id="leadtable">
          <thead>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Lead source</th>
              <th>Lead stage</th>
              <th>Phone No.</th>
            </tr>
          </thead>
          <tbody>
            {leads_list &&
              leads_list.map(function (item, index) {
                return (
                  <tr key={index}>
                    <td>{item.first_name}</td>
                  </tr>
                );
              })}
            <tr>
              <td id="id"></td>
              <td id="fname"></td>
              <td id="lname"></td>
              <td id="lsource"></td>
              <td id="lstage"></td>
              <td id="ph"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="id2">
        <h1>Contact List</h1>
        <table style={{ border: "2px solid black" }} id="contacttable">
          <thead>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Lead source</th>
              <th>Lead stage</th>
              <th>Phone No.</th>
            </tr>
          </thead>
          <tbody>
            {contact_list &&
              contact_list.map(function (item, index) {
                return (
                  <tr key={index}>
                    <td>{item.first_name}</td>
                  </tr>
                );
              })}
            <tr>
              <td id="id"></td>
              <td id="fname"></td>
              <td id="lname"></td>
              <td id="lsource"></td>
              <td id="lstage"></td>
              <td id="ph"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="errordiv"></div>
    </div>
  );
}

export default Admin;
