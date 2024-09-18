import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Error404 from "./pages/Error404/Error404";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

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
        }
    ]
);
