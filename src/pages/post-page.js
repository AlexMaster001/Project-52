import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const postPage = () => (
  <Layout>
    <header id="header-container">
      <section id="header-background"></section>
      <div className="search-input">
        <form>
        <input type="search" id="site-search"/>
        </form>
      </div>
      <button className="search-button">
      </button>
      <div className="entry">
        <a href="/entry">
          <div className="entry-text">Войти</div>
        </a>
      </div>
      <div className="registration">
        <a href="/registration">
          <div className="registration-text">Регистрация</div>
        </a>
      </div>
      <div hidden className="make-post">
        
      {/* <div className="make-post"> */}
        <a href="/make-post">
          <div className="make-post-text">Написать</div>
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
    <section id="post">
        <div className="post-author-background"></div>
        <div className="post-author">Рандом Рандомыч</div>
        {/* <article className="post-text"> */}
          <StaticImage
                src="../images/SJTG8365B2.png"
                width={500}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="Post img"
                className="post-img"
              />
          <h2 className="post-title">Заменят ли тебя ИИ?</h2>
          <p className="blog-post">Искусственный интеллект уже сейчас способен автоматизировать некоторые задачи программистов, но полностью заменить их пока не может.В будущем искусственный интеллект сможет выполнять всё больше задач, связанных с программированием. Программисты будут нужны для разработки сложных алгоритмов и систем, требующих творческого подхода и интуиции. Искусственный интеллект может стать мощным инструментом в руках программистов, помогая им быстрее и эффективнее решать задачи.Несмотря на развитие искусственного интеллекта, профессия программиста останется востребованной, так как только человек способен создавать уникальные и сложные программные решения.
          </p>
        {/* </article> */}
        <div class="comment-button">
          <input type="checkbox" id="hd-1" className="hide"/>
          <label for="hd-1" >Написать коментарий</label>
          <div className="container">
            <div class="row">
              <div>
                <h2 className="text-center">
                    Comment
                </h2>
              </div>
            <div>
                <form className="comment-form">
                  <div className="form-group">
                    <div for="comment-name">Name:</div>
                    <input type="name" className="form-control" id="comment-name"  placeholder="Enter your name"/>
                  </div>
                  <div className="form-group">
                    <div for="comment-body">Comment:</div>
                    <textarea type="comment" className="form-control" id="comment-body" placeholder="comment"></textarea>
                  </div>
                  <div className="form-group form-check text-right">
                    <button type="submit" id="comment-add" className="btn btn-primary">add Comment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </section>
  </Layout>
)

export default postPage

export const Head = () => (
    <Seo title="Post page" />
)