import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PortableText from "react-portable-text";
import Script from "next/script";
import Link from "next/link";
import { createClient } from "next-sanity";
import { useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import NavBar from '../components/NavBar';


const Blog = ({blog}) => {
    const myConfiguredSanityClient = createClient({
    projectId: "jm2xwjzr",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(myConfiguredSanityClient);

  useEffect(() => {
    console.log(builder.image(blog[0].image));
  }, []);
  return (
    <div>
        <NavBar/>        
        <div className="bg-grey-50 my-12" id="blog">
    <div className="container mx-auto py-16 md:py-20">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        I also like to write
      </h2>
      <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Check out my latest posts!
      </h4>
      <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
        {/* First post */}

        {blog.map((item) => {
          // appends the slug to the url
          return (
            <Link
              key={item.slug.current}
              href={"/blog/" + item.slug.current}
              className="shadow"
            >
              <div>
                <div
                  // careating variable; fetching images from item object; if null set the deafult image.
                  // builder is the sanity object defined above.
                  style={{
                    backgroundImage: `url(${
                      builder.image(item.image).width(200).url() ||
                      "/assets/img/bg-cta.jpg"
                    })`,
                  }}
                  className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                >
                  <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 bg-purple-700 border-purple-700 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-200 md:text-base cursor-pointer">
                    Read More
                  </span>
                </div>
                <div className="bg-white py-6 px-5 xl:py-8 cursor-pointer">
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
  </div></div>
  )
}

export default Blog

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