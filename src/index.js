import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";

// look at the extension below , all three works it treats all three as JS
import Header from "./Header.jsx";
import Body from "./Body.js";
import Footer from "./Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./About.jsx";
import Contact from "./Contact.js";
import { ErrorElement } from "./ErrorComponent.jsx";
import { RestaurantMenu } from "./RestaurantMenu.jsx";
import { UserContext } from "../utils/UserContext.js";

const SmallBundlePage = lazy(() => import("./SmallBundlePage.jsx"));
// this is also called
// dynamic import
// code splitting
// on demand loading
// chunking
// dynamic import

const AppLayout = () => {
  const [user, setUser] = useState("Elon musk");
  return (
    <div>
      <Header />
      {/* same context provider can be nested and given different values
      and also different context provider can be nested */}
      <UserContext.Provider value={{ user, setUser }}>
        <Outlet />
      </UserContext.Provider>

      {/* Outlet is used to show child elements */}
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/small-bundle",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <SmallBundlePage />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<RouterProvider router={appRouter} />);
