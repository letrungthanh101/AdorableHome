import React from "react";
import Banner from "../../Assets/Image/Banner.png";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./header.scss";



function Header() {
  const [age, setAge] = React.useState("");
  const listProject = ["Empire city","The Metropole","Q2 Fraser", "Sunwah","Masteri Thao Dien"]

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleToDoClick = (projectName)=>{
    console.log(projectName)
  }


  return (
    <div className="header">
      <img src={Banner} className="banner" />
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand text-header" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-header " href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-header" href="#">
                Service
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link  dropdown-toggle  text-header  "
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Type
              </a>
              <div
                className="dropdown-menu dropdown-990"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item text-header" href="#">
                  1 Bed room
                </a>
                <a className="dropdown-item text-header" href="#">
                  2 Bed room
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-header" href="#">
                  3 Bed room
                </a>
              </div>
            </li>
          </ul>
          <div className="my-2 my-lg-0"></div>
          <button type="button" className="btn btn-dark text-header">
            Contact us
          </button>
        </div>
      </nav>

      <h1 className="content">Helping you find a place call home</h1>

      <h6 className="content-small">Find the house of your dream</h6>

      <div className="option">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-success">
            Sell
          </button>
          <button type="button" className="btn btn-danger">
            Rent
          </button>
        </div>
        <div className="">
          <div>
            <p>Location</p>
          </div>
          <div>
            <select id="author_id" name="author_name">
              {/* {
                listProject.map((projectName,index)=>{
                  
                  <option value={projectName} key={index} onClick={()=>{
                    handleToDoClick(projectName)
                  }}>
                    {projectName}
                    </option>
                })
              } */}
              <option value="1">3</option>
          
            </select>
          </div>
          {/* <div>
            <p>Location</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Header;
