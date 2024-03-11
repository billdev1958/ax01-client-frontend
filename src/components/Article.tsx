type BlogPostType = {
  id: number;
  title: string;
  category: string;
  content: string;
  author: string;
  date: string; // Puedes usar Date para un tipo más específico, pero requerirá formateo
};

const Article = ({ id, title, category, content, author, date }: BlogPostType) => {
  return (
    <div className="blogPage">
      <div className="articleContainer">
        <article className="blogPost">
          <header className="blogPostHeader">
            <h2 className="blogPostCategory">{category.toUpperCase()}</h2>
            <h1 className="blogPostTitle">{title}</h1>
            <p className="blogPostMeta">
              {author} - {date}
            </p>
            <p className="blogPostMeta">ID: {id}</p> {/* Agrega el ID aquí */}
          </header>
          <section className="blogPostContent">
            <p>{content}</p>
          </section>
        </article>
      </div>
    </div>
  );
};
  
  export default Article;