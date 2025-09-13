import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Home } from "../Pages/Home";
import { NotFound } from "../Pages/NotFound";
import { AboutPomodoro } from "../Pages/AboutPomodoro";
import { History } from "../Pages/History";

import { useEffect } from "react";
import {  SettingsPage } from "../Pages/settings";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro/' element={<AboutPomodoro />} />
        <Route path='/history/' element={<History />} />
        <Route path='/settings/' element={<SettingsPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
