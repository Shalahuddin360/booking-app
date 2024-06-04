import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/providers/AuthProvider";

const DashboardLayout = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogOut = () => {
    logOut()
    navigate('/login',)
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-screen bg-base-200 text-base-content flex justify-between items-center">
          {/* Sidebar content here */}

          <div>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </div>
          <div>
            <button className="btn" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
