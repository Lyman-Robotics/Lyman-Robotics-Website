import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import LinksPage from "./LinksPage";
import AboutPage from "./AboutPage";
import SchedulePage from "./SchedulePage";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/links" element={<LinksPage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/schedule" element={<SchedulePage />} />
		</Routes>
	</BrowserRouter>
);

console.warn("Stop fucking with my website");
