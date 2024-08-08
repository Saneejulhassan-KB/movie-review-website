import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function PostCard({ post }) {
  const renderRatingStars = (rating) => {
    return (
      <div className='flex'>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <FaStar
              key={index}
              size={20}
              color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className='group relative w-full border border-orange-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
        <div className=' max-w-2xl mx-auto w-full'>
        {post && renderRatingStars(post.rating)}
      </div>
        <span className='italic text-sm'>{post.category}</span>
        <span className='italic text-sm'>{post.genre}</span>
        <Link
          to={`/post/${post.slug}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-orange-500 text-yellow-300 hover:bg-yellow-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Read review
        </Link>
      </div>
    </div>
  );
}
