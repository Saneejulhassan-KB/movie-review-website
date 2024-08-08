import { Button } from 'flowbite-react';
import { Carousel } from "flowbite-react";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function CallToAction() {

  const { postSlug } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        setPost(data.posts[0]);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRecentPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong. Please try again later.</div>;
  }


  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
      {post && post.image ? (
        <Link to={`/post/${post.slug}`}> <img src={post.image} alt="Post Image" style={{display: 'flex',justifyContent:'center'}}/></Link>
        ) : (
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Default Image" style={{width:'100%', height: 'auto',display:'block',margin: '0 auto'}}/>
        )}
        {recentPosts.map((recentPost, index) => (
          <Link key={index} to={`/post/${recentPost.slug}`}>
          <img key={index} src={recentPost.image || "https://flowbite.com/docs/images/carousel/carousel-2.svg"} alt={`Recent Post ${index + 1}`} style={{width:'100%', height: 'auto',display:'block',margin: '0 auto'}}/>
          </Link>
        ))}
      </Carousel>
    </div>
  )
}