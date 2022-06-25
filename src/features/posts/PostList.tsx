import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
//import { selectAllposts } from './postsSlice'

const CustomerList = () => {
  
  const customers = useSelector((state: RootState) => state.post.value);


   return (
    <div className="customer-food-container">
    {customers.map(({id, title, content})   => {
      return (
        <div> 
          <h2> {title}</h2>
          <p> {content}</p>
          <p> {id}</p>
        </div>
      );
    })}
  </div> 
   )


}

export default CustomerList
