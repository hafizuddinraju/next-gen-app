import { createBrowserRouter } from "react-router-dom";
import Attendance from "../components/Dashboard/Attendance";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardItem from "../components/Dashboard/DashboardItem";

 export const routes = createBrowserRouter([
    {path:'/', element:<Dashboard></Dashboard>,
children:[
    {path:'/', element:<DashboardItem></DashboardItem>},
    {path:'/attendance', element:<Attendance></Attendance>}
]
}
])