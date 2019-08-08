import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const TitleAndDescription = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <div style={{
      display: 'flex',
      fontFamily: 'avenir',
      padding: 10,
    }}>
      <div>
        <Link
          style={{
            textDecoration: 'none',
            color: '#3E3E3C',
            fontSize: 20,
            fontWeight: 'bold'    
          }}
          to='/'
        >
          {title}
        </Link>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery 
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header