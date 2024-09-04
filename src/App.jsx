import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/pages/Home/HomePage.jsx";

export default function App () {

  return (
    <BrowserRouter basename = "/">
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "*" element = {<Navigate to = "/" />} />
      </Routes>
    </BrowserRouter>
  )
}