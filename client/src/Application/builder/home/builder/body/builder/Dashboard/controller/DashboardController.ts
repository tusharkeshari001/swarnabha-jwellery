import { DashboardModel } from "../model/DashboardModel";
import { buildDashboardComponent } from "../ui/Dashboard";

export const buildDashboard = (dashboardModel:DashboardModel) => {
    return buildDashboardComponent(dashboardModel);
  };
  