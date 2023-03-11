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
			path: "/gameDashboard",
			element: <GamesDashboard />,
		},
		{
			path: "game1",
			element: <Game1 />,
		},
		{
			path: "games/:gameCategory",
			element: <GamesCategory />
		}
	])
