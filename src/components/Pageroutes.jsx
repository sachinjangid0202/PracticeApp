import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Tables from "./Tables.jsx";
import Billing from "./Billing.jsx";
import VirtualReality from "./VirtualReality.jsx";
import RTL from "./RTL.jsx";
import Notifications from "./Notifications.jsx";
import Profile from "./Profile.jsx";
import Error from "./Error.jsx";

const Pageroutes = ({ styleBtn, style }) => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard ChangeColor={style} ChangeColorBtn={styleBtn}/>} >
          <Route path="/Tables" element={<Tables />} />
          <Route path="/Billing" element={<Billing />} />
          <Route path="/RTL" element={<RTL />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/VirtualReality" element={<VirtualReality />} />
          <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default Pageroutes;
