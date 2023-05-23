import Navbars from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

function Detail() {
  const params = useParams();
  const [count, setCount] = useState(0);
  const id = parseInt(params.id);
  const trips = JSON.parse(localStorage.getItem("getTrip"));
  const detail = trips[id];
  // const navigate = useNavigate();

  const Increment = () => {
    if (count === 10) return;
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Navbars />
      <div style={{ margin: "50px 130px" }}>
        <h1 className="fw-bold m-0">{detail.title}</h1>
        <h4 style={{ color: "#A8A8A8", fontWeight: "bold" }}>
          {detail.country}
        </h4>
        <img src={detail.Image} className="mb-2" alt="" width="100%" />
        <Carousel responsive={responsive}>
          <div>
            <img src="/images/tour1.png" alt="" />
          </div>
          <div>
            <img src="/images/tour2.png" alt="" />
          </div>
          <div>
            <img src="/images/tour3.png" alt="" />
          </div>
          <div>
            <img src="/images/tour1.png" alt="" />
          </div>
        </Carousel>
        <h4 className="fw-bold my-3">Information Trip</h4>
        <div className="d-flex justify-content-between">
          <div>
            <p style={{ color: "#A8A8A8" }}>Accommodation</p>
            <div className="d-flex gap-3">
              <img src="/images/hotel.svg" alt="" width="25px" height="25px" />
              <h5 className="fw-bold">{detail.accomodation}</h5>
            </div>
          </div>
          <div>
            <p style={{ color: "#A8A8A8" }}>Transportation</p>
            <div className="d-flex gap-3">
              <img src="/images/plane.svg" alt="" width="25px" height="25px" />
              <h5 className="fw-bold">{detail.transport}</h5>
            </div>
          </div>
          <div>
            <p style={{ color: "#A8A8A8" }}>Eat</p>
            <div className="d-flex gap-3">
              <img src="/images/meal.svg" alt="" width="25px" height="25px" />
              <h5 className="fw-bold">{detail.eat}</h5>
            </div>
          </div>
          <div>
            <p style={{ color: "#A8A8A8" }}>Duration</p>
            <div className="d-flex gap-3">
              <img src="/images/time.svg" alt="" width="25px" height="25px" />
              <h5 className="fw-bold">
                {detail.day} Day {detail.night} Night
              </h5>
            </div>
          </div>
          <div>
            <p style={{ color: "#A8A8A8" }}>Date Trip</p>
            <div className="d-flex gap-3">
              <img
                src="/images/calendar.svg"
                alt=""
                width="25px"
                height="25px"
              />
              <h5 className="fw-bold">{detail.date}</h5>
            </div>
          </div>
        </div>
        <h4 className="fw-bold mt-5">Description</h4>
        <p style={{ color: "#A8A8A8" }}>{detail.desc}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="d-flex gap-2">
            <h2 style={{ color: "#FFAF00", fontWeight: "bold" }}>
              IDR. {detail.price}
            </h2>
            <h2 className="fw-bold"> / Person</h2>
          </div>
          <div>
            <img
              src="/images/Minus.png"
              alt=""
              width="40px"
              onClick={Decrement}
              style={{ cursor: "pointer" }}
            />
            <span className="mx-3">{count}</span>
            <img
              src="/images/Plus.png"
              alt=""
              width="40px"
              onClick={Increment}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between my-5">
          <h2 className="fw-bold">Total :</h2>
          <h2 style={{ color: "#FFAF00", fontWeight: "bold" }}>
            IDR. {detail.price * count}
          </h2>
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "#FFAF00",
              fontWeight: "bold",
              border: "none",
              padding: "10px 40px",
            }}
          >
            BOOK NOW
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Detail;
