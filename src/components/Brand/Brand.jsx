import { GiWhiteBook, Link } from '../../import'
import './Brand.scss';


const Brand = ({ handleMenu }) => {
  return (
    <Link to='/' onClick={handleMenu}>
      <div className='flex gap-0.5 items-center'>
        <GiWhiteBook className='text-white rotate-30 mb-1 book' />
        <h1 className='lol'>Our</h1>
        <h1 className='lol2'>Adventure</h1>
        <h1 className='lol'>Book</h1>
      </div>
    </Link>
  )
}

export default Brand;