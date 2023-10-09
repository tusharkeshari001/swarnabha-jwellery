import React from "react";
import { DashboardModel, DashboardModelProps } from "../model/DashboardModel";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../../../../../../redux/dashboard/dashboardSlice";

export const buildDashboardComponent = (dashboardModel: DashboardModel) => {
  return <Dashboard dashboardModel={dashboardModel} />;
};

const Dashboard = (props: DashboardModelProps) => {
  const count = useSelector((state:any) => state.dashboard.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
