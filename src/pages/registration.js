import * as React from "react"
import { Link, navigate  } from "gatsby"
import { Formik, Form, Field } from "formik"
import { registrate, validateLogin, validatePassword, validateLastName, validateFirstName } from "../components/app"


import Layout from "../components/layout"
import {Seo} from "../components/seo"


const registrationPage = () => (
  <Layout>
    <header id="header-container">
        <section id="header-background"></section>
    </header>
    <section id="registration-form">
        <div className="registration-heading">Регистрация</div>
        <Formik 
        initialValues={{
                firstname: '',
                lastname: '',
                date: '',
                login: '',
                password: '',
        }}

        onSubmit={(values, actions) => {
                console.log('Зарегестрировано', values);
                registrate(values);
                actions.resetForm();
                navigate('/')
        }}
        >
                {({errors, touched}) => (
                        <Form>
                                <Field 
                                type="text"
                                id="firstname-input"    
                                name="firstname"
                                placeholder="Имя"
                                validate={validateFirstName} 
                                />
                                {errors.firstname && touched.firstname && (
                                        <div className="errormessageFirstName">{errors.firstname}</div>
                                )}

                                <Field 
                                type="text"
                                id="lastname-input"    
                                name="lastname"
                                placeholder="Фамилия"
                                validate={validateLastName} 
                                />
                                {errors.lastname && touched.lastname && (
                                        <div className="errormessageLastName">{errors.lastname}</div>
                                )}

                                <Field 
                                type="date"
                                id="date-input"    
                                name="date"
                                />

                                <Field 
                                type="text"
                                id="registration-login-input"    
                                name="login"
                                placeholder="Логин"
                                validate={validateLogin} 
                                />
                                {errors.login && touched.login && (
                                        <div className="errormessageLogin">{errors.login}</div>
                                )}
                                <Field 
                                type="password"
                                id="registration-password-input"    
                                name="password"
                                placeholder="Пароль"
                                validate={validatePassword} 
                                />
                                {errors.password && touched.password && (
                                        <div className="errormessagePassword">{errors.password}</div>
                                )}
                                <div class="wrap-entry">
                                        <button className="registration-form-button"
                                                type="submit">
                                                Зарегистрироваться
                                        </button>
                                </div>
                        </Form>
                )}
        </Formik>
    </section>
  </Layout>
)

export default registrationPage

export const Head = () => (
    <Seo title="Registration page" />
)