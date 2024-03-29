import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AllTagsTemplate = ({data, pageContext}) => {
//  console.log(pageContext)

  const { tags } = pageContext

  return (
    <Layout>
      <div style={{fontFamily: 'avenir'}}>
        <div>
          <ul>
            {tags.map((tagName, index) => {
              return (
                <li key={index}>
                  <Link to={`/tags/${tagName}`}>
                    {tagName}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default AllTagsTemplate
