"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const postsWithImages = response.data.map((post, index) => ({
          ...post,
          image: `https://picsum.photos/800/400?random=${index + 1}`,
        }));
        setPosts(postsWithImages.slice(0, 12));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch posts!");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-600"></div>
        <p className="text-2xl text-gray-600 mt-4 font-serif">Loading...</p>
      </div>
    );
  if (error)
    return <div className="text-center text-red-600 text-2xl mt-20 font-serif">{error}</div>;

  return (
    <div className="min-h-screen bg-cream-50 font-serif">
      <header className="bg-transparent border-b border-gray-200 py-6 text-center">
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">The Journal</h1>
        <p className="mt-2 text-lg text-gray-600">Stories, ideas, and insights</p>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};


const BlogPost = ({ post }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <div className="relative w-full h-56">
  
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: imageLoaded ? 1 : 0 }}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />

        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-600"></div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h2>
        <p className="text-gray-600 line-clamp-3 leading-relaxed">{post.body}</p>
        <a
          href="#"
          className="mt-4 inline-block text-amber-600 font-medium hover:text-amber-700 transition-colors"
        >
          Read the Story →
        </a>
      </div>
    </div>
  );
};

export default Blog;