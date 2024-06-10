import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"
import {submit} from "../components/app"



const entryPage = () => (
  <Layout>
    <header id="header-container">
        <section id="header-background"></section>
    </header>
    <section id="entry-form">
        <div className="entry-heading">Вход</div>
        <form onSubmit={submit}>
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
                        type="submit">
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