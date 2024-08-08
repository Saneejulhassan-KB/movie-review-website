import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-5xl font-bold lg:text-6xl'>Welcome to Movie Focus!!</h1>
        <p className='text-gray-500 text-xl sm:text-xl font-semibold'>
        Dive into the World of Movies with Movie Focus,
        Your Trusted Source for Honest Movie Reviews....
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-amber-400 font-bold hover:underline'
        >
          View all Reviews
        </Link>
      </div>
      

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Reviews</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-amber-400 hover:underline text-center'
            >
              View all Reviews
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
