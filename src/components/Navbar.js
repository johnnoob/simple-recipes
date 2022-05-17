import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"
import routes from "./routes.js"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button className="nav-btn" onClick={handleShowLinks}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={`nav-links ${showLinks && "show-links"}`}>
          {routes.map((route, index) => {
            const { url, title } = route
            return (
              <Link
                key={index}
                to={url}
                className="nav-link"
                activeClassName="active-link"
              >
                {title}
              </Link>
            )
          })}
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
