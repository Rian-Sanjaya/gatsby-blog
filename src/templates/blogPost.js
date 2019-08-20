import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const Template = (props) => {
  // console.log(props)
  // console.log(pageContext)
  
  const {next, prev} = props.pageContext
  const {markdownRemark} = props.data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html

  return (
    <Layout>
      <div style={{
        margin: '0 auto',
        width: '60%'
      }}>
      <h1 style={{fontFamily: 'avenir'}}>{title}</h1>
      <div 
        className='blogpost'
        dangerouslySetInnerHTML={{__html: html}}
        style={{fontFamily: 'avenir'}}
      />

      <div style={{marginBottom: '1rem', fontFamily: 'avenir'}}>
        {prev && 
          <Link to={prev.frontmatter.path}>
            Prev
          </Link>
        }
      </div>
      <div style={{ fontFamily: 'avenir'}}>
        {next && 
          <Link to={next.frontmatter.path}>
            Next
          </Link>
        }
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
