import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import MyListings from "../MyListings/MyListings";
import BrowseListing from "../BrowseListing/BrowseListing";
import AddFindRoomMate from "../AddFindRoomMate/AddFindRoomMate";
import ErrorCard from "../ErrorCard/ErrorCard";
import ContactUs from "../../Pages/ContactUs";
import TermsConditions from "../../Pages/TermsConditions";
import PrivacyPolicy from "../../Pages/PrivacyPolicy";
import AuthLayout from "../AuthLayout/AuthLayout";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "../Provider/PrivateRoute";
import RoomCardDetails from "../RoomCardDetails/RoomCardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorCard></ErrorCard>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </p>
        ),
        loader: () => fetch("http://localhost:3000/emptyRoom"),
        errorElement: <ErrorCard></ErrorCard>,
      },
      {
        path: "/addToFindRoommate",
        element: (
          <PrivateRoute>
            <AddFindRoomMate></AddFindRoomMate>,
          </PrivateRoute>
        ),
        errorElement: <ErrorCard></ErrorCard>,
      },
      {
        path: "/browseListing",
        element: <BrowseListing></BrowseListing>,
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </p>
        ),
        loader: () => fetch("http://localhost:3000/emptyRoom"),
        errorElement: <ErrorCard></ErrorCard>,
      },
      {
        path: "/myListings",
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
        errorElement: <ErrorCard></ErrorCard>,
      },
      {
        path: "/emptyRoom/:id",
        element: (
          <PrivateRoute>
            <RoomCardDetails></RoomCardDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </p>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/emptyRoom/${params.id}`),
        errorElement: <ErrorCard></ErrorCard>,
      },
      {
        path: "/termsCondition",
        element: <TermsConditions></TermsConditions>,
        errorElement: <ErrorCard></ErrorCard>,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy></PrivacyPolicy>,
        errorElement: <ErrorCard></ErrorCard>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
        errorElement: <ErrorCard></ErrorCard>,
      },
    ],
  },
  {
    path: "/auth",

    element: <AuthLayout></AuthLayout>,
    errorElement: <ErrorCard></ErrorCard>,
    children: [
      {
        path: "/auth/signin",

        element: <SignIn></SignIn>,
        errorElement: <ErrorCard></ErrorCard>,
      },
      {
        path: "/auth/signup",
        element: <SignUp></SignUp>,
        errorElement: <ErrorCard></ErrorCard>,
      },
    ],
  },
]);
