import React from "react";
import styles from "../../styles/Navbar.module.css";
import logo from "../../assets/images/logo.jpg";
import Image from "next/image";
import * as Inputs from "../../inputs/inputFields";
import { OriginPlace } from "../../data/originPlaceData";
import { DestintionPlace } from "../../data/destinitionPlaceData";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

function Navbar() {
  const [start_date, setStartDate] = useState(null);
  const [end_date, setEndDate] = useState(null);
  const [end_start_date, setEndStartDate] = useState(null);
  const [end_end_date, setEndEndDate] = useState(null);
  const [origin_place, setOriginPlace] = useState();
  const [dest_place, setDestintionPlace] = useState();
  useEffect(() => {}, [start_date, end_date, end_start_date, end_end_date]);
  const onSubmit = (event) => {
    event.preventDefault();

    const start_date_moment = moment(start_date);
    const end_date_moment = moment(end_date);
    setEndStartDate(start_date_moment.format("YYYY-MM-DD"));
    setEndEndDate(end_date_moment.format("YYYY-MM-DD"));
    console.log("origin is : " + origin_place);
    console.log("dest is : " + dest_place);
    console.log("start date is : " + end_start_date);
    console.log("end date is : " + end_end_date);
    const diffrent = end_date_moment.diff(start_date_moment);
    const diffDuration = moment.duration(diffrent);
    console.log(" Duration Days:", diffDuration.days());
       for (var i = 0; i < vendors.length; i++) {
         if (vendors[i].Name == "Magenic") {
           found = true;
           break;
         }
       }
  };
  return (
    <div className={styles.navbar}>
      <a>
        <Image src={logo} />
      </a>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Inputs.DropdownButton
              data={OriginPlace}
              placeholde="Origin Place"
              value={origin_place}
              onChange={(event) => setOriginPlace(event.target.value)}
            />
          </div>

          <div className="col-md-3">
            {" "}
            <Inputs.DropdownButton
              data={DestintionPlace}
              placeholde="Destintion Place"
              value={dest_place}
              onChange={(event) => setDestintionPlace(event.target.value)}
            />
          </div>
          <div className="col-md-3">
            <DatePicker
              placeholderText="Depart Date"
              dateFormat="dd/MM/yyyy"
              value={start_date}
              selected={start_date}
              onChange={(date) => {
                setStartDate(date);
                console.log(
                  "start date is" + moment(date).format("YYYY-MM-DD")
                );
              }}
            />
          </div>
          <div className="col-md-3">
            {" "}
            <DatePicker
              placeholderText="Return Date"
              dateFormat="dd/MM/yyyy"
              selected={end_date}
              value={end_date}
              onChange={(date) => {
                setEndDate(date);
                console.log("end date is" + moment(date).format("YYYY-MM-DD"));
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <Inputs.InputButton value="Search" onClick={onSubmit} />
      </div>
    </div>
  );
}

export default Navbar;
