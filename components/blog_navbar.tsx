
  const BlogNav = () => {
    return (
     <div className={"grid grid-cols-5"}>
     <button className={"text-primary font-bold "}>
     All Posts
      </button>
      <button className={"text-primary px-28 py-10 grid grid-cols-5 "}>
      Microbiome
      </button>
      <button className={"text-primary px-28 py-10 grid grid-cols-5"}>
      Recipe
      </button>
      <button className={"text-primary px-28 py-10 grid grid-cols-5"}>
      Functional Health
      </button>
      <button className={"text-primary px-28 py-10 grid grid-cols-5"}>
      Personal Transformation
      </button>
      </div>
      
    );
  };
  
  export default BlogNav;

  