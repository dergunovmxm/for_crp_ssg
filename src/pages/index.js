import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import data from "./data.json"
import image1 from "../images/1.jpg"
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpg"

const imageMap = {
  "./1.jpg": image1,
  "./3.jpg": image3,
  "./4.jpg": image4,
}

const IndexPage = () => (
  <main>
    <div className={styles.container}>
      {data.map((item, index) => {
        const imageSrc = imageMap[item.url]
        return (
          <div key={index}>
            <div className={styles.imgContainer}>
              <img src={imageSrc} alt={item.title} />
            </div>
            <span>{item.title}</span>
          </div>
        )
      })}
    </div>
  </main>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
