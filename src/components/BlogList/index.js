import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul>
      {blogsList.map(eachBlogItem => (
        <BlogItem key={eachBlogItem.id} blogDetails={eachBlogItem} />
      ))}
    </ul>
  )
}

export default BlogList
