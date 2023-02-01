import { FiArrowRight, Link } from '../../import'
import './Article.scss';

const Article = ({ title }) => {
  return (
    <div className='article'>
      <h3>{title}</h3>
      <Link>Read More <FiArrowRight /> </Link>
    </div>
  )
}

export default Article;