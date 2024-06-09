import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const entryPage = () => (
  <Layout>
    {/* <div className="container text-center my-5">
      <h1>Hi from the entry page</h1>
      <p>Welcome to the entry page</p>
      <Link to="/">Go back to the homepage</Link>
      </div> */}
    <header id="header-container">
        <section id="header-background"></section>
        <section id="logo-section">
            <div className="logo-text">Pixe Post</div>
            <div className="logo-text2">все про IT</div>
        </section>
        <section id="logo-section">
            <div className="logo-text">Pixe Post</div>
            <div className="logo-text2">все про IT</div>
        </section>
    </header>
    <section id="entry-form">
        <div className="entry-heading">Вход</div>
        <form>
        <input type="text" 
                id="login-input" 
                name="login" 
                placeholder="Логин" required/>
        <input type="password" 
                id="password-input" 
                name="password" 
                placeholder="Пароль" required/>
            <div class="wrap-entry">
                <button className="entry-form-button"
                        type="submit"
                        onclick="solve()">
                        Войти
                </button>
            </div>
        </form>
        <div className="entry-or">или</div>
        <div class="wrap-entry-to-registration">
            <a href="/registration">
                <button className="entry-form-to-registration-button"
                        // type="submit"
                        // onclick="window.location.href='./registration/'"
                        >
                        Зарегистрироваться
                </button>
            </a>
        </div>
    </section>
  </Layout>
)

export default entryPage

export const Head = () => (
    <Seo title="Entry page" />
)