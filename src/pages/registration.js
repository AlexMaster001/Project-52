import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const registrationPage = () => (
  <Layout>
    <div className="container text-center my-5">
      <h1>Hi from the registration page</h1>
      <p>Welcome to the registration page</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default registrationPage

export const Head = () => (
    <Seo title="Registration page" />
)