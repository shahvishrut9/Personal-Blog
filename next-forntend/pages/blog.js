import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";

import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const Blogs = ({ blog }) => {
  const myConfiguredSanityClient = createClient({
    projectId: "jm2xwjzr",
    dataset: "production",
    useCdn: false,
  });

  // Builder
  const builder = imageUrlBuilder(myConfiguredSanityClient);

  return (
    <>
      <Head>
      <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          crossOrigin="anonymous"
          href="/assets//styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <title>Blogs</title>
        <link rel="icon" type="image/png" href="/assets/img/title.jpeg" />
      </Head>

        <NavBar backgroundColor = "#30767b"/>
        <div className="my-12" id="blog">
          <div className="container mx-auto py-16 md:py-20">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              BLOGS
            </h2>
            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Check out my articles
            </h4>
            {/*  className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"  */}

            <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full  lg:grid-cols-2 xl:gap-10">
              {blog.map((item) => {
                // appends the slug to the url
                return (
                  <Link
                    key={item.slug.current}
                    href={"/blog/" + item.slug.current}
                    className="shadow"
                  >
                    <div className="transform transition-all hover:scale-105 md:mx-0">
                      <div
                        // careating variable; fetching images from item object; if null set the deafult image.
                        // builder is the sanity object defined above.
                        style={{
                          backgroundImage: `url(${
                            builder.image(item.image).width(200).url() ||
                            "/assets/img/post-01.png"
                          })`,
                        }}
                        className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                      >
                        <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                        {/* Change button css here. */}
                        <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-4 bg-teal-800 border-stone-900 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-200 md:text-base cursor-pointer">
                          Read More
                        </span>
                      </div>
                      <div className="bg-gray-50 py-6 px-5 xl:py-8 cursor-pointer">
                        <span className="block font-body text-lg font-semibold text-black">
                          {item.title}
                        </span>
                        <span className="block pt-2 font-body text-grey-20">
                          {item.metadesc}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      <Footer/>
    </>
  );
};

export default Blogs;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "jm2xwjzr",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"]`;
  const blog = await client.fetch(query);
  return {
    props: {
      blog,
    },
  };
}
