import React from "react";
import { useHistory } from "react-router-dom";

const SideTab = () => {
  const history = useHistory();
  const onChangeDashboardRoute = () => {
    history.push("/dashboard");
  };
  const onChangeGarageRoute = () => {
    history.push("/garage");
  };
  const onChangeProfileRoute = () => {
    history.push("/profile");
  };

  return (
    <nav className="side-nav shadow " id="side-nav">
      <div className="">
        <div className="logo text-center my-3">
          <h4>Car Rental</h4>
        </div>
        <div className="p-4 d-flex justify-content-center">
          <div className="">
            <div
              className="my-4 cursor-pointer l"
              onClick={onChangeDashboardRoute}
            >
              <i class="fas fa-chart-pie-alt d-inline white-col"></i>
              <p className="mx-3 d-inline white-col">Dashboard</p>
            </div>
            <div
              className="my-4 cursor-pointer white-col"
              onClick={onChangeGarageRoute}
            >
              <i class="fas fa-garage-car"></i>
              <p className="mx-3 d-inline white-col">Garage</p>
            </div>

            <div
              className="my-4 cursor-pointers"
              onClick={onChangeProfileRoute}
            >
              <i class="fa fa-user d-inline white-col" aria-hidden="true"></i>
              <p className="mx-3 d-inline white-col">Profile</p>
            </div>
            <div className="my-4 cursor-pointers">
              <i class="fas fa-sign-out white-col"></i>{" "}
              <p className="mx-2 d-inline white-col">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideTab;
