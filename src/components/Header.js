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
      <div
        style={{flex: 1}}
      >
        <Link
          style={{
            textDecoration: 'none',
            color: '#3E3E3C',
            fontSize: 18,
            fontWeight: 'bold'
          }}
          to='/'
        >
          {title}
          <div style={{
            fontSize: 12,
          }}>
            {description}
          </div>
        </Link>
      </div>
      <div style={{flex: 1, textAlign: 'end', fontSize: 18}}>
        Categories
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