import React from "react";
import { useState } from "react";
import MediaCard from "./MediaCard.js";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CarouselFadeExample from "./Slider.js";
import logo from "../Images/olx-logo.png";

import img_Bike_1 from "../Images/Bike_1.jpg";
import img_Bike_2 from "../Images/Bike_2.jpg";
import img_Bike_3 from "../Images/Bike_3.jpg";
import img_Bike_4 from "../Images/Bike_4.jpg";
import img_Bike_5 from "../Images/Bike_5.jpg";
import img_iPhone_1 from "../Images/iPhone_1.jpg";
import img_iPhone_2 from "../Images/iPhone_2.jpg";
import img_iPhone_3 from "../Images/iPhone_3.jpg";
import img_iPhone_4 from "../Images/iPhone_4.jpg";
import img_Car_1 from "../Images/Car_1.jpg";
import img_Car_2 from "../Images/Car_2.jpg";
import img_Car_3 from "../Images/Car_3.jpg";
import img_Car_4 from "../Images/Car_4.jpg";
import img_Car_5 from "../Images/Car_5.jpg";
import img_Car_6 from "../Images/Car_6.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Data() {
  const details = [
    {
      id: 1,
      src: img_iPhone_1,
      category: "mobile",
      title: "IPhone",
      model: "X",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "30,000",
    },
    {
      id: 2,
      src: img_iPhone_2,
      category: "mobile",
      title: "IPhone",
      model: "12",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "40,000",
    },
    {
      id: 3,
      src: img_iPhone_3,
      category: "mobile",
      title: "IPhone",
      model: "13 Pro",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 4,
      src: img_iPhone_4,
      category: "mobile",
      title: "IPhone",
      model: "6 Plus",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 5,
      src: img_Bike_1,
      title: "Unique",
      category: "bike",
      model: "70",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 6,
      src: img_Bike_2,
      category: "bike",
      title: "Super Asia",
      model: "70",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 7,
      src: img_Bike_3,
      category: "bike",
      title: "Yamaha",
      model: "150",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 8,
      src: img_Bike_4,
      category: "bike",
      title: "Suzuki",
      model: "150",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 9,
      src: img_Bike_5,
      category: "bike",
      title: "Honda",
      model: "70",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 10,
      src: img_Car_1,
      category: "car",
      title: "Civic",
      model: "2018",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 11,
      src: img_Car_2,
      category: "car",
      title: "Freed",
      model: "2019",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 12,
      src: img_Car_3,
      category: "car",
      title: "Civic",
      model: "2021",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 13,
      src: img_Car_4,
      category: "car",
      title: "Vezel",
      model: "2022",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 14,
      src: img_Car_5,
      category: "car",
      title: "Vezel",
      model: "2019",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 15,
      src: img_Car_6,
      category: "car",
      title: "Corolla",
      model: "2009",
      desc:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
  ];

  const [items, setItems] = useState(details);

  const filterItem = (categItem) => {
    // if (!value) {
    //   alert("Please type first then search");
    //   return;
    // }
    const updatedItems = details.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItems);
  };

  let value = "";
  let a = [];
  items.map((e, i) => {
    return a.push(e.category); // array return including duplicates category
  });
  let b = new Set([...a]); // duplicate name remove but it is object, so we will convert it in array
  let c = [...b]; // copy the value of above variable in array

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light mb-5">
          <div className="container pt-4 pb-3">
            <a className="navbar-brand" href="#">
              <img src={logo} alt=""/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Car
                      </a>
                    </li>
                    <li>{/* <hr className="dropdown-divider" /> */}</li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bike
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={()=>filterItem("mobile")}>
                    Mobile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={()=>filterItem("car")}>
                    Car
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={()=>filterItem("bike")}>
                    Bike
                  </a>
                </li>
              </ul>
              <div className="d-flex w-50">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    value = e.target.value;
                  }}
                />
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    filterItem(value.toLowerCase());
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <CarouselFadeExample />

      <Box px={{ xl: 38, lg: 10, md: 5, sm: 6 }} mt={10}>
        <Grid container spacing={{ lg: 3, md: 2, sm: 4 }}>
          {items.map((e, i) => {
            // const { src, title, model, price, desc } = e;
            return (
              <Grid item xs={11} sm={6} md={4} xl={3} mb={5} key={i}>
                <MediaCard
                  src={e.src}
                  title={e.title}
                  model={e.model}
                  price={`Rs: ${e.price}`}
                  desc={e.desc}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Data;
