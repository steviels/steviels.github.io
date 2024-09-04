import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App () {
  return (
    <BrowserRouter basename = "/">
      <Routes>
        <Route path = "*" element = {<div></div>} />
      </Routes>
    </BrowserRouter>
  )
}