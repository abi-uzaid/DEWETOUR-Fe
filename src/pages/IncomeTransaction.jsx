import React from "react";
import "react-bootstrap";
import { useState } from "react";
import { Table } from "react-bootstrap";
// import { useParams } from "react-router-dom";
import Navbars from "../components/Navbar";
import Footer from "../components/Footer";
import { ModalWaiting } from "../components/modalWaiting";

function Transaction() {
  // const params = useParams();
  // const id = parseInt(params.id);
  // const trips = JSON.parse(localStorage.getItem("getTrip"));
  // const item = trips[id];

  const [showApprove, setShowApprove] = useState(false);

  const handleClose = () => {
    setShowApprove(false);
  };

  const handleModalShow = () => {
    handleClose(true);
    setShowApprove(true);
  };
  return (
    <>
      <Navbars />
      <div style={{ background: "#E5E5E5", height: "100vh" }}>
        <div className="container">
          <h3 className="text-dark py-4">Incoming Transaction</h3>
          <Table striped hover>
            <thead>
              <tr style={{ background: "white", color: "red" }}>
                <th>No</th>
                <th>Users</th>
                <th>Trip</th>
                <th>Bukti Transfer</th>
                <th>Status Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: "white" }}>
                <td style={{ height: "10px" }} className="text-dark">
                  1
                </td>
                <td className="text-dark">Naruto</td>

                <td className="text-dark">Desa Konoha</td>
                <td className="text-dark">Bri.jpg</td>
                <td style={{ color: "green" }}>Pending</td>
                <td>
                  <button style={{ border: "none" }} onClick={handleModalShow}>
                    <img src="./images/search.png" alt="Search"></img>
                  </button>
                </td>
              </tr>
              <tr style={{ background: "white" }}>
                <td style={{ height: "10px" }} className="text-dark">
                  1
                </td>
                <td className="text-dark">luffi</td>

                <td className="text-dark">Desa iceland</td>
                <td className="text-dark">Bca</td>
                <td style={{ color: "green" }}>Pending</td>
                <td>
                  <button style={{ border: "none" }} onClick={handleModalShow}>
                    <img src="./images/search.png" alt="Search"></img>
                  </button>
                </td>
              </tr>
              <tr style={{ background: "white" }}>
                <td style={{ height: "10px" }} className="text-dark">
                  1
                </td>
                <td className="text-dark">Nobita</td>

                <td className="text-dark">Desa Takaoma</td>
                <td className="text-dark">Mandiri</td>
                <td style={{ color: "green" }}>Pending</td>
                <td>
                  <button style={{ border: "none" }} onClick={handleModalShow}>
                    <img src="./images/search.png" alt="Search"></img>
                  </button>
                </td>
              </tr>
              <tr style={{ background: "white" }}>
                <td style={{ height: "10px" }} className="text-dark">
                  1
                </td>
                <td className="text-dark">Shinchan</td>

                <td className="text-dark">Desa Kasukabe</td>
                <td className="text-dark">Bsi</td>
                <td style={{ color: "green" }}>Pending</td>
                <td>
                  <button style={{ border: "none" }} onClick={handleModalShow}>
                    <img src="./images/search.png" alt="Search"></img>
                  </button>
                </td>
              </tr>
              {/* {trips.map((item) => {
                return (
                  <tr>
                    <td style={{ height: "70px" }} className="text-dark">
                      {item.id}
                    </td>
                    <td className="text-dark">{item.name}</td>
                    <td className="text-dark">{item.trip}</td>
                    <td className="text-dark">{item.image}</td>
                    <td style={{ color: "green" }}>Active</td>
                    <td style={{ color: "green" }}>Approve</td>
                    <td>
                      <button
                        style={{ border: "none" }}
                        onClick={handleModalShow}
                      >
                         <img src={action}></img> 
                      </button>
                    </td>
                  </tr>
                );
              })} */}
            </tbody>
          </Table>
          <ModalWaiting show={showApprove} onHide={handleClose} />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Transaction;
