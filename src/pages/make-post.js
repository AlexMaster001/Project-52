import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"
import {submit} from "../components/app"



const makePost = () => (
  <Layout>
    <header id="header-container">
        <section id="header-background"></section>
    </header>
    <section id="entry-form">
        <div className="make-post-heading">Расскажите о главном:</div>
        <form onSubmit={submit}>
            <textarea id="story" name="story" rows="15" cols="120"></textarea>
            <div className="post-img-label" for="post-img">Добавьте изображение:</div>

            <input type="file" id="post-img" name="post-img" accept="image/png, image/jpeg" />
            <div class="wrap-make-post">
                <button className="make-post-button"
                        type="submit">
                        Опубликовать
                </button>
            </div>
        </form>
    </section>
  </Layout>
)

export default makePost



export const Head = () => (
    <Seo title="Make post" />
)