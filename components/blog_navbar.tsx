const BlogNav = () => {
  return (
    <div className={"md:grid grid-cols-5 sm:grid grid-cols-1 "}>
      <div>
        <a href=" " className=" text-primary font-bold px-24 py-10 grid">
          All Posts
        </a>
      </div>
      <div>
        <a href=" " className=" text-primary font-bold px-24 py-10 grid">
          Microbiome
        </a>
      </div>
      <div>
        <a href=" " className=" text-primary font-bold px-24 py-10 grid">
          Recipe
        </a>
      </div>
      <div>
        <a href=" " className=" text-primary font-bold px-24 py-10 grid">
          Functional Health
        </a>
      </div>
      <div>
        <a href=" " className=" text-primary font-bold px-24 py-10 grid">
          Personal Transformation
        </a>
      </div>
    </div>
  );
};

export default BlogNav;
