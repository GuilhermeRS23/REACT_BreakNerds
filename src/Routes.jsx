import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Error404 from "./pages/Error404/Error404";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Authentication from "./pages/Authentication/Authentication";

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Navbar />,
            errorElement: <Error404 />,
            children: [{
                path: "/",
                element: <Home />
            },
            {
                path: "/search/:title",
                element: <Search />
            }
            ]
        },
        {
            path: "/auth",
            element: <Authentication />
        }
    ]
);
