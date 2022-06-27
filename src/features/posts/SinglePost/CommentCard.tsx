import './SinglePostPage.css'
const CommentCard = ({ comment }: any) => {
  return (
    <article className='comment-card'>
      <h3>{comment.name.replace(/^./, (str: string) => str.toUpperCase())}</h3>
      <p>{comment.body.replace(/^./, (str: string) => str.toUpperCase())}</p>
      <p className='post-credit'></p>
    </article>
  )
}

export default CommentCard
