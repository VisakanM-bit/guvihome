import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App"
import Programs from "./pages/Programs"
import { Link } from "react-router-dom"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>

    <Routes>

      <Route path="/" element={<App />} />

      <Route path="/programs" element={<Programs />} />

    </Routes>

  </BrowserRouter>

)