import {lazy} from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";

const AppHomePage = lazy(() => import ('./../App'));
const Game1 = lazy(() => import ('./../pages/bollywood'));
const GamesDashboard = lazy(() => import('./../pages/dashboard'));
const GamesCategory = lazy(() => import("../pages/gameCategory"));

export const router =  createBrowserRouter([
		{
			path: "/",
			element: <AppHomePage />
		},
		{
			path: "/teatime",
			element: <AppHomePage />
		},
		{
			path: "/teatime/gameDashboard",
			element: <GamesDashboard />,
		},
		{
			path: "/teatime/game1",
			element: <Game1 />,
		},
		{
			path: "/teatime/games/:gameCategory",
			element: <GamesCategory />
		}
	])
