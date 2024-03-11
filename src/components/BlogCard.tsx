import { Link } from 'react-router-dom';

type BlogCardProps = {
  title: string;
  category: string;
  author: string;
  date: string;
  postId: number; // Agregar una nueva propiedad postId
};

const BlogCard = ({ title, category, author, date, postId }: BlogCardProps) => {
  return (
    <Link to={`/blog/${postId}`} className="blogCard"> {/* Usar Link en lugar de div */}
      <h2 className="blogCardTitle">{title}</h2>
      <p className="blogCardCategory">{category}</p>
      <p className="blogCardInfo">{author} - {date}</p>
    </Link>
  );
};

export default BlogCard;
