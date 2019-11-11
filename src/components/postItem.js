import React from "react"
import Emoji from "../components/emoji"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const PostItem = ({ post, isPinned }) => {
  const title = post.frontmatter.title || post.fields.slug
  const prefixWithPin = content => {
    return (
      <>
        <Emoji name="Pin" emoji="📌" /> {content}
      </>
    )
  }
  return (
    <div key={post.fields.slug}>
      <h3
        style={{
          marginBottom: 0,
        }}
      >
        <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
          {isPinned ? prefixWithPin(title) : title}
        </Link>
      </h3>
      <small>
        {post.frontmatter.date} • {post.frontmatter.difficulty}
      </small>
      <p
        style={{
          marginTop: rhythm(1 / 4),
        }}
        dangerouslySetInnerHTML={{
          __html: post.frontmatter.description || post.excerpt,
        }}
      />
    </div>
  )
}

export default PostItem
