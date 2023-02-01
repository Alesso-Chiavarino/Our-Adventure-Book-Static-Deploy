import { FiArrowRight, Link } from '../../import'
import './Article.scss';

const Article = ({ title, _id }) => {
  return (
    <div className='article'>
      <h3>{title}</h3>
      <Link to={`/letters/detail/${_id}`} onClick={() => {
        window.scroll(0, 0);
      }} >Read More <FiArrowRight /> </Link>
    </div>
  )
}

export default Article;