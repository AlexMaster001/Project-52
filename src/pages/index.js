import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Hello world ! </h1>
          <p className="lead text-muted"> Welcome to this Boostrap 5 Gatsby Starter</p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />

        </div>
      </div>
      <div className="row">
        <Link to="/about/" className="btn btn-primary my-2">About</Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
      </div>
    </section> */}


    
    {/* <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Hello world ! </h1>
          <p className="lead text-muted"> Welcome to this Boostrap 5 Gatsby Starter</p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />

        </div>
      </div>
      <div className="row">
        <Link to="/about/" className="btn btn-primary my-2">About</Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
      </div>
    </section> */}
    <header id="header-container">
      <section id="logo-section">
        <div className="logo-text">Pixe Post</div>
        <div className="logo-text2">все про IT</div>
      </section>
      <div className="search-input">
        <form>
        <input type="search" id="site-search"/>
        </form>
      </div>
      <button className="search-button">
      </button>
      <div className="entry">
        <a href="./entry/">
          <div className="entry-text">Войти</div>
        </a>
      </div>
      <div className="registration">
        <a href="./registration/">
          <div className="registration-text">Регистрация</div>
        </a>
      </div>
      <section className="registration-background"></section>
    </header>
    <section className="themes-section">
        <div className="themes-title">Темы</div>
      <a href="">
        <div className="theme1">#Новости</div>
      </a>
      <a href="">
        <div className="theme2">#Программирование</div>
      </a>
      <a href="">
        <div className="theme3">#ВойтивIT</div>
      </a>
      <a href="">
        <div className="theme4">#Криптобиржа</div>
      </a>
      <a href="">
        <div className="theme5">#Научные открытия</div>
      </a>
      <a href="">
        <div className="theme6">#ВТренде</div>
      </a>
      <a href="">
        <div className="theme7">#ИИ</div>
      </a>
    </section>
    <section className="posts">
      <table>
        <tr>
          <a href="">
            <td className="post1">
              <StaticImage
                src="../images/EV8W9L5R43.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="Post 1"
                className="img-fluid"
              />
              <div className="post-theme">Аналитик данных. Кто это и с чем его едят</div>
            </td>
          </a>
          <a href="">
            <td className="post2">
              <StaticImage
                src="../images/SJTG8365B2.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="Post 2"
                className="img-fluid"
              />
              <div className="post-theme">Как технологии изменили наше общение</div>
            </td>
          </a>
          <a href="">
            <td className="post3">
              <StaticImage
                src="../images/image.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="Post 3"
                className="img-fluid"
              />
              <div className="post-theme">Криптобиржа. Как разобраться если ты кружка?</div>
            </td>
          </a>
        </tr>
        <tr>
          <a href="">
            <td className="post4">
              <StaticImage
                src="../images/G7CSZ63MRD.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="Post 4"
                className="img-fluid"
              />
              <div className="post-theme">Ваши данные защищены? Тогда мы идем к вам</div>
            </td>
          </a>
          <a href="">
            <td className="post5">
              <StaticImage
                src="../images/G7CSZ63MRD.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="Post 4"
                className="img-fluid"
              />
              <div className="post-theme">Сколько понадобится времени что бы #ВойтивIT ?</div>
            </td>
          </a>
          <a href="">
            <td className="post6">
              <StaticImage
                src="../images/SJTG8365B2.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="Post 6"
                className="img-fluid"
              />
              <div className="post-theme">Заменят ли тебя ИИ?</div>
            </td>
          </a>
        </tr>
      </table>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)