import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbars from "../components/Navbar";
import Footer from "../components/Footer";
function AddTrip() {
  // document.querySelector("#image").addEventListener("change", function () {
  //   const reader = new FileReader();

  //   reader.addEventListener("load", () => {
  //     console.log(reader.result);
  //   });

  //   reader.readAsDataURL(files[0]);
  // });

  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState();

  const handleImage = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  const [dataTrip, setDataTrip] = useState({
    id: new Date().getTime(),
    title: "",
    country: "",
    accomodation: "",
    transport: "",
    eat: "",
    day: "",
    night: "",
    date: "",
    price: "",
    quota: "",
    desc: "",
    image: "",
  });

  const handleChange = (e) => {
    setDataTrip({
      ...dataTrip,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      ...dataTrip,
      id: new Date().getTime(),
      Image: imageUrl,
    };
    const getTrip = JSON.parse(localStorage.getItem("getTrip"));

    if (getTrip === null) {
      localStorage.setItem("getTrip", JSON.stringify([newTrip]));
    } else {
      getTrip.push(newTrip);
      localStorage.setItem("getTrip", JSON.stringify(getTrip));
    }
    navigate("/");
  };

  return (
    <>
      <Navbars />
      <Container>
        <h1 className="fw-bold my-5">Add Trip</h1>
        <div className="mx-5">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Tittle Trip</Form.Label>
              <Form.Control
                placeholder="Janda Pirang"
                type="text"
                name="title"
                onChange={handleChange}
                style={{
                  border: "2px solid #B1B1B1",
                  backgroundColor: "#DBDBDB",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Country</Form.Label>
              <Form.Select
                type="text"
                name="country"
                onChange={handleChange}
                style={{
                  border: "2px solid #B1B1B1",
                  backgroundColor: "#DBDBDB",
                }}
              >
                <option value="Indonesia">Indonesia</option>
                <option value="Amerika">Amerika</option>
                <option value="Konoha">Konoha</option>
                <option value="Namex">Namex</option>
                <option value="Cocoyashi">Cocoyashi</option>
                <option value="RomanceTown">RomanceTown</option>
                <option value="Arabasta">Arabasta</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Accomodation</Form.Label>
              <Form.Control
                placeholder="OYO"
                type="text"
                onChange={handleChange}
                name="accomodation"
                style={{
                  border: "2px solid #B1B1B1",
                  backgroundColor: "#DBDBDB",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold">transportation</Form.Label>
              <Form.Control
                placeholder="Angkot"
                type="text"
                name="transport"
                onChange={handleChange}
                style={{
                  border: "2px solid #B1B1B1",
                  backgroundColor: "#DBDBDB",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Eat</Form.Label>
              <Form.Control
                placeholder="Warteg"
                type="text"
                name="eat"
                onChange={handleChange}
                style={{
                  border: "2px solid #B1B1B1",
                  backgroundColor: "#DBDBDB",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Duration</Form.Label>
              <div className="d-flex gap-5">
                <Form.Control
                  placeholder="Mon"
                  type="text"
                  name="day"
                  onChange={handleChange}
                  style={{
                    border: "2px solid #B1B1B1",
                    backgroundColor: "#DBDBDB",
                  }}
                />
                <Form.Label className="fw-bold">Day</Form.Label>
                <Form.Control
                  placeholder="Ladies"
                  type="text"
                  name="night"
                  onChange={handleChange}
                  style={{
                    border: "2px solid #B1B1B1",
                    backgroundColor: "#DBDBDB",
                  }}
                />
                <Form.Label className="fw-bold">Night</Form.Label>
              </div>
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Date Trip</Form.Label>
              <Form.Control
                placeholder="Skuy"
                type="date"
                name="date"
                onChange={handleChange}
                style={{
                  border: "2px solid #B1B1B1",
                  backgroundColor: "#DBDBDB",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Price</Form.Label>
              <Form.Control
                placeholder="ada harga ada rupa"
                type="text"
                name="price"
                onChange={handleChange}
                style={{
                  border: "2px solid #B1B1B1",
                  backgroundColor: "#DBDBDB",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Quota</Form.Label>
              <Form.Control
                placeholder="Unlimited"
                type="text"
                name="quota"
                onChange={handleChange}
                style={{
                  border: "2px solid #B1B1B1",
                  backgroundColor: "#DBDBDB",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Description</Form.Label>
              <Form.Control
                placeholder="Desipticon"
                as="textarea"
                name="desc"
                onChange={handleChange}
                style={{
                  height: "100px",
                  border: "2px solid #B1B1B1",
                  backgroundColor: "#DBDBDB",
                  resize: "none",
                }}
              />
            </Form.Group>
            <Form.Label className="fw-bold">Image</Form.Label>
            <Form.Group className="mb-5 d-flex gap-5">
              <Form.Label
                placeholder="png/jpg jangan 3gp"
                style={{
                  border: "2px solid #B1B1B1",
                  width: "40%",
                  backgroundColor: "#DBDBDB",
                }}
                className="rounded"
              >
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <div className="d-flex align-items-center">
                    <p style={{ fontSize: "20px", color: "#FFAF00" }}>
                      Foto Boleh Juga
                    </p>
                  </div>
                  <div>
                    <Form.Control
                      type="file"
                      name="image"
                      id="image"
                      onChange={handleImage}
                      hidden
                    />
                    <img src="/images/clip.svg" alt="" />
                  </div>
                </div>
              </Form.Label>
              <div style={{ width: "100px" }}>
                <img src={imageUrl} alt="" style={{ width: "100%" }} />
              </div>
            </Form.Group>
            <div className="justify-content-center d-flex">
              <Button
                style={{
                  backgroundColor: "#FFAF00",
                  border: "none",
                  padding: "5px 50px",
                }}
                type="submit"
              >
                Add Trip
              </Button>
            </div>
          </Form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default AddTrip;
