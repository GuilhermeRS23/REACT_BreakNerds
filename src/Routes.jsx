import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Error404 from "./pages/Error404/Error404";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Authentication from "./pages/Authentication/Authentication";
import Profile from "./pages/Profile/Profile";
import ManageGames from "./pages/ManageGames/ManageGames";
import Test from "./pages/Test/Test";
import GameView from "./pages/GameView/GameView";

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
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/manage_games/:action/:gameId",
                element: <ManageGames />
            },
            {
                path: "/game/:gameId",
                element: <GameView />
            },
            {
                path: "/teste_modal",
                element: <Test />
            }
            ]
        },
        {
            path: "/auth",
            element: <Authentication />
        }
    ]
);
