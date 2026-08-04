import React from "react"
import { Helmet } from "react-helmet-async"

const siteUrl = "https://www.isrinitiative.org"
const defaultImage = `${siteUrl}/echolight.png`

const Seo = ({
  title,
  description,
  path = "/",
  image = defaultImage,
  type = "website",
  children,
}) => {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "")
  const canonical = `${siteUrl}${normalizedPath}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {children}
    </Helmet>
  )
}

export default Seo
