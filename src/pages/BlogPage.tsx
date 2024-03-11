import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  content: string;
  author: string;
  date: string;
}

function parseDate(dateString: string): Date {
  if (!dateString) {
    return new Date();
  }
  
  const parts = dateString.split(/[^\d]/);
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]) - 1;
  const day = parseInt(parts[2]);
  const hour = parseInt(parts[3]);
  const minute = parseInt(parts[4]);
  const second = parseInt(parts[5]) || 0;
  return new Date(year, month, day, hour, minute, second);
}

function formatDate(dateString: string): string {
  const date = parseDate(dateString);
  const formattedDate = `${padZero(date.getDate())}/${padZero(date.getMonth() + 1)}/${date.getFullYear()} ${padZero(date.getHours())}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())}`;
  return formattedDate;
}

function padZero(value: number): string {
  return value < 10 ? `0${value}` : `${value}`;
}

function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/posts/get`);
        if (response.ok) {
          const data: BlogPost[] = await response.json();
          setPosts(data);
        } else {
          console.error("Error al cargar los posts del blog");
        }
      } catch (error) {
        console.error("Error al cargar los posts del blog:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="blogPage">
      {posts.map(post => (
        <BlogCard
          key={post.id}
          title={post.title}
          category={post.category}
          author={post.author}
          date={formatDate(post.date)} // Formatear la fecha aquí
          postId={post.id} // Pasar el ID del post al BlogCard
        />
      ))}
    </div>
  );
}

export default BlogPage;