import React from "react"
import { graphql, Link } from 'gatsby'
import Header from './Header'

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout