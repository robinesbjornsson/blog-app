import PostAuthor from './PostAuthor'

const PostExcerpt = ({ post }: any) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  )
}

export default PostExcerpt
