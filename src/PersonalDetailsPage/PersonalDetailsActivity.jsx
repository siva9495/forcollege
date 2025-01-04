import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./PersonalDetailsActivity.css";

const PersonalDetailsActivity = () => {
  const [countries, setCountries] = useState([]);
  const [isdCode, setIsdCode] = useState("+91");

  // Fetch countries and ISD codes
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryList = data
          .map((country) => ({
            name: country.name.common,
            isd: country.idd.root
              ? `${country.idd.root}${country.idd.suffixes?.[0] || ""}`
              : "",
          }))
          .filter((country) => country.isd) // Filter out countries without ISD codes
          .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
        setCountries(countryList);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleIsdChange = (e) => {
    const selectedCountry = countries.find(
      (country) => country.isd === e.target.value
    );
    setIsdCode(selectedCountry.isd);
  };

  return (
    <div className="div_pd_container">
      <div className="pd_container_content">
        <div className="pd_content_title">
          <span id="pd_content_title_span_01">Personal Details</span>
        </div>
        <div className="pd_content_user_enter">
          <div className="pd_userenter_fr01">
            <div className="ue_fr01_inner01">
              <span className="ue_span_fr01_inner01">Date of Birth</span>
              <div className="ue_input_fr01_wrapper_inner01">
                <input
                  className="ue_input_fr01_inner01"
                  type="date"
                  name="dateofbirth"
                  placeholder="Enter DOB"
                />
              </div>
            </div>
            <div className="ue_fr01_inner02">
              <span className="ue_span_fr01_inner02">Gender</span>
              <div className="custom-select-wrapper">
                <select className="ue_input_fr01_inner02">
                  <option value="" disabled selected>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <RiArrowDropDownLine className="custom-select-icon" />
              </div>
            </div>
            <div className="ue_fr01_inner03">
              <span className="ue_span_fr01_inner03">Nationality</span>
              <div className="custom-select-wrapper">
                <select className="ue_input_fr01_inner03">
                  <option value="" disabled selected>
                    Select Nationality
                  </option>
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <RiArrowDropDownLine className="custom-select-icon" />
              </div>
            </div>
          </div>
          <div className="pd_userenter_fr02">
            <div className="ue_fr02_inner01">
              <span className="ue_span_fr02_inner01">Marital Status</span>
              <div className="custom-select-wrapper">
                <select className="ue_input_fr02_inner01">
                  <option value="" disabled selected>
                    Select Marital Status
                  </option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Married">Married</option>
                </select>
                <RiArrowDropDownLine className="custom-select-icon" />
              </div>
            </div>
            <div className="ue_fr02_inner02">
              <span className="ue_span_fr02_inner02">
                Personal Mobile Number ISD Code
              </span>
              <div className="custom-select-wrapper">
                <select
                  className="ue_input_fr02_inner02"
                  value={isdCode}
                  onChange={handleIsdChange}
                >
                  {countries.map((country) => (
                    <option key={country.isd} value={country.isd}>
                      {country.name} ({country.isd})
                    </option>
                  ))}
                </select>
                <RiArrowDropDownLine className="custom-select-icon" />
              </div>
            </div>
            <div className="ue_fr02_inner03">
              <span className="ue_span_fr02_inner03">Personal Mobile Number</span>
              <input
                className="ue_input_fr02_inner03"
                type="text"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <div className="pd_userenter_fr03">
            <div className="ue_fr03_inner01">
              <span className="ue_span_fr03_inner01">Alternative Email ID</span>
              <input
                className="ue_input_fr03_inner01"
                type="text"
                name="alternative email id"
                placeholder="Enter Alternative Email ID"
              />
            </div>
            <div className="ue_fr03_inner02">
              <span className="ue_span_fr03_inner02">
                Alternative Mobile Number ISD Code
              </span>
              <div className="custom-select-wrapper">
                <select
                  className="ue_input_fr03_inner02"
                  value={isdCode}
                  onChange={handleIsdChange}
                >
                  {countries.map((country) => (
                    <option key={country.isd} value={country.isd}>
                      {country.name} ({country.isd})
                    </option>
                  ))}
                </select>
                <RiArrowDropDownLine className="custom-select-icon" />
              </div>
            </div>
            <div className="ue_fr03_inner03">
              <span className="ue_span_fr03_inner03">
                Alternative Mobile Number
              </span>
              <input
                className="ue_input_fr03_inner03"
                type="text"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <div className="pd_userenter_fr04">
            <div className="ue_fr04_inner01">
              <span className="ue_span_fr04_inner01">Physically Challenged</span>
              <div className="custom-select-wrapper">
                <select className="ue_input_fr04_inner01">
                  <option value="" disabled selected>
                    Select Option
                  </option>
                  <option value="No">No</option>
                  <option value="Visual Impairment">Visual Impairment</option>
                  <option value="Hearing Impairment">Hearing Impairment</option>
                </select>
                <RiArrowDropDownLine className="custom-select-icon" />
              </div>
            </div>
            <div className="ue_fr04_inner02">
              <span className="ue_span_fr04_inner02">Pincode</span>
              <input
                className="ue_input_fr04_inner02"
                type="text"
                name="pincode"
                placeholder="Enter Pincode"
              />
            </div>
            <div className="ue_fr04_inner03">
              <span className="ue_span_fr04_inner03">Address</span>
              <input
                className="ue_input_fr04_inner03"
                type="text"
                name="address"
                placeholder="Enter Address"
              />
            </div>
          </div>
          <div className="pd_userenter_fr05">
            <div className="ue_fr05_inner01">
              <button className="ue_btn_fr05_inner01">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsActivity;
