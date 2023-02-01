import { FiArrowRight, Link } from '../../import'
import './Article.scss';

const Article = ({ title, _id, timer }) => {
  return (
    <div className='article animate__animated animate__fadeInUp animate__faster' style={{ animationDelay: `${timer}ms`}}>
      <h3>{title}</h3>
      <Link to={`/letters/detail/${_id}`} onClick={() => {
        window.scroll(0, 0);
      }} >Read More <FiArrowRight /> </Link>
    </div>
  )
}

export default Article;