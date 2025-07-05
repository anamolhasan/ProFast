import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/coverage/Coverage";
import PrivateRoute from "../private/PrivateRoute";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import TrackParcel from "../pages/Dashboard/TrackParcel/TrackParcel";
import About from "../pages/About/About";
import BeARider from "../pages/Dashboard/BeARider/BeARider";
import PendingRiders from "../pages/Dashboard/PendingRiders/PendingRiders";
import ActiveRiders from "../pages/Dashboard/ActiveRiders/ActiveRiders";
import UpdateProfile from "../pages/Dashboard/UpdateProfile/UpdateProfile";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
// import Forbidden from "../pages/Dashboard/Forbidden/Forbidden";
import AdminRoute from "../private/AdminRoute";
import Forbidden from "../pages/Forbidden/Forbidden";
import AssignRider from "../pages/Dashboard/AssignRider/AssignRider";
import RiderRoute from "../private/RiderRoute";
import PendingDeliveries from "../pages/Dashboard/PendingDeliveries/PendingDeliveries";
import CompletedDeliveries from "../pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import MyEarnings from "../pages/Dashboard/MyEarnings/MyEarnings";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: 'coverage',
          Component: Coverage,
          loader: () => fetch('./serviceCenter.json')
        },
        {
          path: 'beARider',
           loader: () => fetch('./serviceCenter.json'),
          element: <PrivateRoute>
            <BeARider />
          </PrivateRoute>
        },
        {
          path: 'about',
          Component: About,
        },
        {
          path: 'forbidden',
          Component: Forbidden
        },
        {
          path: 'sendParcel',
          element: <PrivateRoute>
             <SendParcel />
          </PrivateRoute>,
           loader: () => fetch('./serviceCenter.json')
        }
    ]
  },
  {
    path:'/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
  {
    path:'/dashboard',
    element: <PrivateRoute >
      <DashboardLayout />
    </PrivateRoute>,
    children: [
      {
        path: 'myParcels',
        Component: MyParcels
      },
      {
        path: 'payment/:parcelId',
        Component:Payment
      },
      {
        path: 'paymentHistory',
        Component: PaymentHistory
      },
      {
        path: 'track',
        Component: TrackParcel
      },
      {
        path: 'profile',
        Component: UpdateProfile 
      },
      // rider only routes
      {
        path: 'pending-deliveries',
        element: <RiderRoute>
          <PendingDeliveries />
        </RiderRoute>
      },
      {
        path: 'completed-deliveries',
        element: <RiderRoute>
          <CompletedDeliveries />
        </RiderRoute>
      },
      {
        path: 'my-earnings',
        element: <RiderRoute>
          <MyEarnings />
        </RiderRoute>
      },
      // admin only routes
      {
        path: 'assign-riders',
        element: <AdminRoute>
          <AssignRider />
        </AdminRoute> 
      },
       {
        path: 'pending-riders',
        element: <AdminRoute>
          <PendingRiders />
        </AdminRoute>
      },
      {
        path: 'active-riders',
        element: <AdminRoute>
          <ActiveRiders />
        </AdminRoute>
      },
      {
        path: 'makeAdmin',
        element: <AdminRoute>
          <MakeAdmin />
        </AdminRoute>,
        //  Component: MakeAdmin
      }
    ] 
  }
]);
