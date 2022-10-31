import "./App.css";
import { useState } from "react";

function App() {
  const [inputdata, SetInputData] = useState({
    carnumber: "",
    drivername: "",
    checkin: "",
    checkout: "",
  });

  const [arrdata, setArrData] = useState([]);
  function handleChange(e) {
    SetInputData({
      ...inputdata,
      [e.target.name]: e.target.value,
    });
  }
  let { carnumber, drivername, checkin, checkout } = inputdata;
  function pushdata() {
    setArrData([...arrdata, { carnumber, drivername, checkin, checkout }]);
    SetInputData({ carnumber: "", drivername: "", checkin: "", checkout: "" });
  }
  return (
    <div className="App">
      <div className="heading">
        <h1> CAR PARKING SYSTEM 🚗 </h1>
      </div>
      <div className="container">
        <div className="inputdetails">
          <div>
            <label for="carnumber"> Car Number : </label>
            <input
              type="number"
              minLength={4}
              maxLength={4}
              name="carnumber"
              id="carnumber"
              value={inputdata.carno}
              placeholder="Enter last 4 no.."
              onChange={handleChange}
            />
          </div>

          <div>
            <label for="drivername"> Driver Name : </label>
            <input
              type="text"
              value={inputdata.drivername}
              name="drivername"
              id="drivername"
              placeholder="Driver name.."
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="checkin"> CheckIn Time : </label>
            <input
              type="datetime-local"
              name="checkin"
              value={inputdata.checkin}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="checkout"> CheckOut Time : </label>
            <input
              type="datetime-local"
              name="checkout"
              id="checkout"
              value={inputdata.checkout}
              onChange={handleChange}
            />
          </div>
          <div>
            <button onClick={pushdata}> SUBMIT </button>
          </div>
        </div>

        <br></br>
        <br></br>
        <h2>AVAILABLE CARS IN GARAGE</h2>
        <table width="70%" cellPadding={15}>
          <tbody>
            <tr>
              <td> CAR NUMBER</td>
              <td> DRIVER </td>
            </tr>
            {arrdata.map((info, index) => {
              if (info.checkout === "") {
                return (
                  <tr key={index}>
                    <td>{info.carnumber}</td>
                    <td>{info.drivername}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <h2> ALL VEHICLE DETAILS </h2>
        <table width="70%" cellPadding={15}>
          <tbody>
            <tr>
              <td> CAR NUMBER</td>
              <td> DRIVER </td>
              <td> CHECK IN </td>
              <td> CHECK OUT</td>
            </tr>
            {arrdata.map((info, index) => {
              return (
                <tr key={index}>
                  <td>{info.carnumber}</td>
                  <td>{info.drivername}</td>
                  <td>{info.checkin}</td>
                  <td>{info.checkout}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default App;
