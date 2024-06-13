import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { stateVisibility } from "../components/app"

const IndexPage = () => (
  <Layout>
    <header id="header-container">
      <div className="search-input">
        <form>
        <input type="search" id="site-search"/>
        </form>
      </div>
      <button className="search-button">
      </button>
      <div hidden = {( stateVisibility.value === 'login') ? 'hidden' : '' } className="entry">
        <a href="./entry/">
          <div className="entry-text">Войти</div>
        </a>
      </div>
      <div hidden = {( stateVisibility.value === 'login') ? 'hidden' : '' } className="registration">
        <a href="./registration/">
          <div className="registration-text">Регистрация</div>
        </a>
      </div>
      <div  hidden = {( stateVisibility.value === 'registrtion') ? 'hidden' : '' } className="make-post">
      {/* <div className="make-post"> */}
        <a href="./make-post/">
          <div className="make-post-text">Написать</div>
        </a>
      </div>
      <section className="make-post-background"></section>
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
          <a href="/post-page">
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
          <a href="/post-page">
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
          <a href="/post-page">
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
          <a href="/post-page">
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
          <a href="/post-page">
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
          <a href="/post-page">
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