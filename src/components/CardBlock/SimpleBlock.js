import React from "react"
import Img from "gatsby-image"
import styles from "./SimpleBlock.module.scss"

const SimpleBlock = ({
  title,
  titleClass = "",
  descriptionClass = "",
  description,
  textContainerClass = "",
  imageSharp,
  children,
}) => {
  const image = imageSharp.fixed ? (
    <Img fixed={imageSharp.fixed} />
  ) : (
    <Img fluid={imageSharp.fluid} />
  )
  return (
    <div className={styles.container}>
      {image && <div className={styles.iconContainer}>{image}</div>}
      <div className={`${textContainerClass} ${styles.textContainer} `}>
        {title && <div className={styles.titleContainer}>
          <span className={`${styles.title} ${titleClass}`}>{title}</span>
        </div>}
        {description && (
          <div className={`${descriptionClass}`}>
            <p className={styles.description} dangerouslySetInnerHTML={{__html: description}} />
          </div>
        )}
      </div>

      {children}
    </div>
  )
}

export default SimpleBlock
