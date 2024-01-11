import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom'
import { Home, About, Contact, User, Github } from './index'
import { githubInfoLoader } from './Components/Github/Github'
// import Home from './Components/Home/Home'
// import About from './Components/About/About'
// import Contact from './Components/Contact/Contact'
// import User from './Components/User/User'
// import Github from './Components/Github/Github'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:user_id" element={<User />} />
      <Route path="github" loader={githubInfoLoader} element={<Github />} />
    </Route>,
  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
