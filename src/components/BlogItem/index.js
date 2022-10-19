import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-list-items">
      <div className="post-num-date">
        <h1 className="post-name">{title}</h1>
        <p className="post-date">{publishedDate}</p>
      </div>
      <p className="post-desc">{description}</p>
    </li>
  )
}

export default BlogItem
