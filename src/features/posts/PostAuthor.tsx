import { useSelector } from 'react-redux'
import { getUsers } from '../users/userSlice'

type Props = {
    userId: string
}
const PostAuthor = ({userId}: Props) => {
    const users = useSelector(getUsers)

    const author = users.find(user => user.id === userId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor