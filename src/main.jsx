<<<<<<< HEAD
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

=======
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
>>>>>>> 8cca6526669db68d743f5eab34e201df603fed9a
)