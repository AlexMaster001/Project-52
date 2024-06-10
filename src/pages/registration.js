import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const registrationPage = () => (
  <Layout>
    <header id="header-container">
        <section id="header-background"></section>
    </header>
    <section id="registration-form">
        <div className="registration-heading">Регистрация</div>
        <form>
        <input type="text" 
                id="firstname-input" 
                name="firstname" 
                placeholder="Имя" required/>
        <input type="text" 
                id="lastname-input" 
                name="lastname" 
                placeholder="Фамилия" required/>
        <input type="date" 
                id="date-input" 
                name="date" 
                />
        <input type="text" 
                id="registration-login-input" 
                name="login" 
                placeholder="Логин" required/>
        <input type="password" 
                id="registration-password-input" 
                name="password" 
                placeholder="Пароль" required/>
            <div class="wrap-entry">
                <button className="registration-form-button"
                        type="submit"
                        onclick="solve()">
                        Зарегистрироваться
                </button>
            </div>
        </form>
    </section>
  </Layout>
)

export default registrationPage

export const Head = () => (
    <Seo title="Registration page" />
)