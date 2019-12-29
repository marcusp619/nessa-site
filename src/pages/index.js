import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

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

  return (
    <Layout>
      <Helmet
        title="Triple L Express - Dog Sitting"
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
              <h3>Pricing</h3>
              <p>How much to watch your furry family members.</p>
            </header>
            <Link
              to="/landing"
              state={{ title: 'Pricing' }}
              className="link primary"
            ></Link>
          </article>
          <article
            style={{
              backgroundImage: `url(${data.dog02.childImageSharp.fluid.src})`,
            }}
          >
            <header className="major">
              <h3>Services</h3>
              <p>The various services we offer.</p>
            </header>
            <Link
              to="/landing"
              state={{ title: 'Services' }}
              className="link primary"
            ></Link>
          </article>
          <article
            style={{
              backgroundImage: `url(${data.dog03.childImageSharp.fluid.src})`,
            }}
          >
            <header className="major">
              <h3>FAQS</h3>
              <p>Common questions asked.</p>
            </header>
            <Link
              to="/landing"
              state={{ title: 'FAQS' }}
              className="link primary"
            ></Link>
          </article>
          <article
            style={{
              backgroundImage: `url(${data.dog04.childImageSharp.fluid.src})`,
            }}
          >
            <header className="major">
              <h3>Policy</h3>
              <p>Guidelines to follow.</p>
            </header>
            <Link
              to="/landing"
              state={{ title: 'Policy' }}
              className="link primary"
            ></Link>
          </article>
          <article
            style={{
              backgroundImage: `url(${data.dog05.childImageSharp.fluid.src})`,
            }}
          >
            <header className="major">
              <h3>Photos</h3>
              <p>Pics!</p>
            </header>
            <Link
              to="/landing"
              state={{ title: 'Photos' }}
              className="link primary"
            ></Link>
          </article>
          <article
            style={{
              backgroundImage: `url(${data.dog06.childImageSharp.fluid.src})`,
            }}
          >
            <header className="major">
              <h3>Blog</h3>
              <p>Coming Soon!</p>
            </header>
            <Link
              to="/landing"
              state={{ title: 'Blog' }}
              className="link primary"
            ></Link>
          </article>
        </section>
        {/* <section id="two">
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
        </section> */}
      </div>
    </Layout>
  )
}

export default HomeIndex
