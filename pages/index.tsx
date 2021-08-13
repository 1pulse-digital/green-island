import Head from "next/head";
import Hero from "../components/hero";
import { About } from "../components/about";
import { FeaturedProducts } from "../components/featuredProducts";

import { BlogWidget } from "../components/blogWidget";
import { Product } from "../types/product";

import { fetchAPI } from "../lib/api";
import { Article } from "../types/article";
import MainLayout from "../layouts/MainLayout";
import { Categories } from "../components/categories";

import { Button } from "../components/button";

export interface HomeProps {
  articles?: Article[];
  featuredProducts?: Product[];
}

const Home = (props: HomeProps) => {
  // Use the first 4 articles as featured articles
  const featuredArticles = props.articles ? props.articles.slice(0, 4) : [];
  const featuredProducts = props.featuredProducts;

  return (
    <MainLayout>
      <Head>
        <title>Perfect Heatlh Practice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <About />
      <Categories />
      {/* <Products /> */}
      <FeaturedProducts products={featuredProducts} />

      {/* Featured Blogs? */}

      <div
        className={
          "h-[700px] bg-primary flex  justify-center items-center text-center"
        }>
        <div>
          <h1
            className={
              "text-5xl md:text-5xl z-10 text-white font-medium font-karla pb-10"
            }>
            What our clients have to say
          </h1>
          <div className={""}>
          <p className={"italic text-2xl text-white font-light"}>
            “Dr Robin is passionate about healing people, finding the cause of <br />
            the problem and then addressing it. He explains everything so well <br />
            really feel that at last there is hope.”
          </p>
          </div>
        </div>
      </div>

      <div className={"h-auto mlg:h-[700px] py-20 "}>
        <div className={"font-karla"}>
          <h1
            className={
              " flex flex-col items-center md:text-5xl pb-20 font-medium text-4xl text-primary md:text-left "
            }>
            Our latest Blogs
          </h1>
        </div>

        <div
          className={
            "bg-white-800 p-2 md:grid grid-cols-4 gap-8 md:px-28 py-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  "
          }>
          {featuredArticles.map((entry) => {
            return <BlogWidget key={entry.id} article={entry} />;
          })}
          {featuredArticles.length === 0 && (
            <div>Check back soon for some featured articles</div>
          )}
        </div>
        <div
          className={
            "flex flex-col items-start md:items-center pt-10 px-10 md:pt-20 "
          }>
          <Button color="primary">Learn more</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, featuredProducts, categories] = await Promise.all([
    fetchAPI("/articles?featured=true"),
    fetchAPI("/products?featured=true"),
    fetchAPI("/article-categories"),
  ]);

  return {
    props: { articles, featuredProducts, categories },
    revalidate: 1,
  };
}
