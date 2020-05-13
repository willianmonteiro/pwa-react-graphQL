import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => {
  
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostListQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              description
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              background
            }
            timeToRead
          }
        }
      }
    }
  `)
  
  const postList = allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home"/>

      {postList.map(({ 
         node: { 
           frontmatter: { background, category, date, description, title },
           timeToRead,
           fields: { slug }
         }, 
      }) => (
        <PostItem
          slug={slug}
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
      ))}
      
    </Layout>
  )
}

export default IndexPage
