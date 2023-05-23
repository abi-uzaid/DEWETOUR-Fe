
// import React from "react";
import Navbars from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";

function Payment() {
  const handleNav = () => {
    Navigate("/Waiting");
  };

  const mySwal = withReactContent(Swal);
  const submit = () => {
    mySwal.fire({
      position: "Center",
      icon: "success",
      title: (
        <p>
          Your payment will be confirmed within 1 x 24 hours To see orders click
          <span
            onClick={handleNav}
            className="fw-bold"
            style={{ cursor: "pointer" }}
          >
            Here
          </span>
          thank you
        </p>
      ),
      showConfirmButton: false,
    });
  };
  return (
    <>
      <Navbars />
      <Container>
        <div
          style={{
            boxShadow: "2px 2px 20px grey",
            padding: "50px",
            borderRadius: "10px",
            marginTop: "50px",
          }}
        >
          <div className="d-flex justify-content-between mb-4">
            <img src="/images/icon.png" alt="" />
            <div className="text-end">
              <h1 className="fw-bold " style={{ marginRight: "78px" }}>
                Booking
              </h1>
              <h4>Sunday, 22 May 2023</h4>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-5">
              <div>
                <h3 className="fw-bold">6D/4N Fun Tassie Vacation</h3>
                <p
                  style={{
                    color: "#959595",
                    fontWeight: "bold",
                    marginBottom: "30px",
                  }}
                >
                  Depok
                </p>
                <span
                  style={{
                    color: "pink",
                    background: "180deg, #EC7A7A 0%, #EC7A7A 100%",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    padding: "5px",
                  }}
                >
                  Waiting Payment
                </span>
              </div>
              <div>
                <div style={{ display: "flex", gap: "70px" }}>
                  <div>
                    <h5 className="fw-bold">Date trip</h5>
                    <p style={{ color: "#959595", fontWeight: "bold" }}>
                      27 September 2023
                    </p>
                  </div>
                  <div style={{ marginLeft: "-23px" }}>
                    <h5 className="fw-bold">Duration</h5>
                    <p style={{ color: "#959595", fontWeight: "bold" }}>
                      6 Day 4 Night
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "55px" }}>
                  <div>
                    <h5 className="fw-bold">Accomodation</h5>
                    <p style={{ color: "#959595", fontWeight: "bold" }}>OYO</p>
                  </div>
                  <div>
                    <h5 className="fw-bold">Transportation</h5>
                    <p style={{ color: "#959595", fontWeight: "bold" }}>
                      Garuda AirPlane
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center me-5">
              <img src="/images/bukti.png" alt="#" />
              <div>upload payment brooh</div>
            </div>
          </div>
          <div
            className="me-5"
            style={{
              display: "flex",
              textAlign: "justify",
              fontWeight: "bolder",
            }}
          >
            <h5 style={{ marginRight: "70px" }}>No</h5>
            <h5 style={{ marginRight: "100px" }}>FullName</h5>
            <h5 style={{ marginRight: "70px" }}>Gender</h5>
            <h5 style={{ marginRight: "100px" }}>Phone</h5>
          </div>
          <div style={{ marginTop: "0", marginBottom: "0" }}>
            <hr style={{ borderTop: "2px solid black" }} />
          </div>
          <div style={{ display: "flex" }}>
            <p>1</p>
            <p style={{ marginLeft: "90px", color: "#959595" }}>
              Udin binti Udinah
            </p>
            <p style={{ marginLeft: "63px", color: "#959595" }}>Girl</p>
            <p style={{ marginLeft: "110px", color: "#959595" }}>0812xxxxxx</p>
            <h5 style={{ marginLeft: "170px", fontWeight: "bold" }}>Qty</h5>
            <h5 style={{ marginLeft: "70px", fontWeight: "bold" }}>:</h5>
            <h5 style={{ marginLeft: "28px", fontWeight: "bold" }}>1</h5>
          </div>
          <div style={{ marginTop: "0", marginBottom: "0" }}>
            <hr style={{ borderTop: "2px solid black" }} />
          </div>
          <div style={{ display: "flex", textAlign: "justify" }}>
            <h5 style={{ marginLeft: "670px", fontWeight: "bold" }}>TOTAL</h5>
            <h5 style={{ marginLeft: "43px", fontWeight: "bold" }}>:</h5>
            <h5
              style={{ marginLeft: "30px", fontWeight: "bold", color: "red" }}
            >
              IDR.12.000.000
            </h5>
          </div>
        </div>
        <Button
          style={{
            backgroundColor: "#FFAF00",
            border: "none",
            padding: "5px 50px",
            marginTop: "50px",
            marginLeft: "870px",
            width: "200px",
            height: "40px",
          }}
          type="submit"
          onClick={submit}
        >
          PAY
        </Button>
      </Container>
      <Footer />
    </>
  );
}
export default Payment;
