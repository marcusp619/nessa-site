import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const getPictures = graphql`
  query MyPictures {
    dog01: file(relativePath: { eq: "dog01.jpg" }) {
      ...fluidImage
    }
    dog02: file(relativePath: { eq: "dog02.jpg" }) {
      ...fluidImage
    }
    dog03: file(relativePath: { eq: "dog03.jpg" }) {
      ...fluidImage
    }
    dog04: file(relativePath: { eq: "dog04.jpg" }) {
      ...fluidImage
    }
    dog05: file(relativePath: { eq: "dog05.jpg" }) {
      ...fluidImage
    }
    dog06: file(relativePath: { eq: "dog06.jpg" }) {
      ...fluidImage
    }
  }
`
const HomeIndex = () => {
  const data = useStaticQuery(getPictures)
  console.log(data)

  return (
    <Layout>
      <Helmet
        title="Gatsby Starter - Forty"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      ></Helmet>

      <Banner />

      <div id="main">
        <section id="one" className="tiles">
          <article
            style={{
              backgroundImage: `url(${data.dog01.childImageSharp.fluid.src})`,
            }}
          >
            <header className="major">
              <h3>Aliquam</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link to="/landing" className="link primary"></Link>
          </article>
          <article
            style={{
              backgroundImage: `url(${data.dog02.childImageSharp.fluid.src})`,
            }}
          >
            <header className="major">
              <h3>Tempus</h3>
              <p>feugiat amet tempus</p>
            </header>
            <Link to="/landing" className="link primary"></Link>
          </article>
          <article
            style={{
              backgroundImage: `url(${data.dog03.childImageSharp.fluid.src})`,
            }}
          >
            <header className="major">
              <h3>Magna</h3>
              <p>Lorem etiam nullam</p>
            </header>
            <Link to="/landing" className="link primary"></Link>
          </article>
          <article
            style={{
              backgroundImage: `url(${data.dog04.childImageSharp.fluid.src})`,
            }}
          >
            <header className="major">
              <h3>Ipsum</h3>
              <p>Nisl sed aliquam</p>
            </header>
            <Link to="/landing" className="link primary"></Link>
          </article>
          <article
            style={{
              backgroundImage: `url(${data.dog05.childImageSharp.fluid.src})`,
            }}
          >
            <header className="major">
              <h3>Consequat</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link to="/landing" className="link primary"></Link>
          </article>
          <article
            style={{
              backgroundImage: `url(${data.dog06.childImageSharp.fluid.src})`,
            }}
          >
            <header className="major">
              <h3>Etiam</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link to="/landing" className="link primary"></Link>
          </article>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Massa libero</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
              Pellentesque condimentum sem. In efficitur ligula tate urna.
              Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra
              et feugiat tempus.
            </p>
            <ul className="actions">
              <li>
                <Link to="/landing" className="button next">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
