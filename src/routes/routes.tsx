import {lazy} from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";

const AppHomePage = lazy(() => import ('./../App'));
const GameRoundPage = lazy(() => import ('../pages/game'));
const GamesDashboard = lazy(() => import('./../pages/dashboard'));
const GamesCategory = lazy(() => import("../pages/gameRounds"));

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
			path: "games/:gameCategory",
			element: <GamesCategory />
		},
		{
			path: "games/:gameCategory/:roundName",
			element: <GameRoundPage />
		}
	])
