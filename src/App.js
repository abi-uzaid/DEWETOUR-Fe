import Detail from "./pages/DetailTour";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import IncomeTrip from "./pages/IncomeTrip";
import IncomeTransaction from "./pages/IncomeTransaction";
import AddTrip from "./pages/AddTrip";
import Payment from "./pages/Payment";
import Waiting from "./pages/Waiting";
import { Routes, Route, Navigate } from "react-router-dom";

function PrivateRoute({ user, admin, children }) {
  if (!user || admin) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function PublicRoute({ children }) {
  return children;
}

function ProtectRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  const data = JSON.parse(localStorage.getItem("users"));
  const isUser = data && data.some((obj) => obj.fullname === "user");
  const isAdmin = data && data.some((obj) => obj.fullname === "admin");
  console.log(isUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home isHome={isUser} />} />
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", marginTop: "250px" }}>
              Pagenya Salah tuh..
            </h1>
          }
        />

        <Route
          path="/Detail/:id"
          element={
            !isUser && !isAdmin ? (
              <PublicRoute>
                <Detail />
              </PublicRoute>
            ) : (
              <PrivateRoute user={isUser} admin={isAdmin}>
                <Detail />
              </PrivateRoute>
            )
          }
        />

        <Route
          path="/Profile"
          element={
            <ProtectRoute user={isUser}>
              <Profile />
            </ProtectRoute>
          }
        />
        <Route
          path="/Payment"
          element={
            <ProtectRoute user={isUser}>
              <Payment />
            </ProtectRoute>
          }
        />
        <Route
          path="/Waiting"
          element={
            <ProtectRoute user={isUser}>
              <Waiting />
            </ProtectRoute>
          }
        />

        <Route
          path="/IncomeTransaction"
          element={
            <ProtectRoute user={isAdmin}>
              <IncomeTransaction />
            </ProtectRoute>
          }
        />
        <Route
          path="/AddTrip"
          element={
            <ProtectRoute user={isAdmin}>
              <AddTrip />
            </ProtectRoute>
          }
        />
        <Route
          path="/IncomeTrip"
          element={
            <ProtectRoute user={isAdmin}>
              <IncomeTrip />
            </ProtectRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
