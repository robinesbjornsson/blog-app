import './SinglePostPage.css'
const CommentCard = ({ comment }: any) => {
  console.log(comment)
  return (
    <article className='comment-card'>
      <p>{comment.email}</p>
      <h3>{comment.name.replace(/^./, (str: string) => str.toUpperCase())}</h3>
      <p>{comment.body.replace(/^./, (str: string) => str.toUpperCase())}</p>
      <p className='post-credit'></p>
    </article>
  )
}

export default CommentCard
