import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";

const Projects = ({ project }) => {
  console.log(project);
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

        <title>Projects</title>
        <link rel="icon" type="image/png" href="/assets/img/title.jpeg" />
      </Head>

      <NavBar backgroundColor="#30767b" />
      <div className="container py-16 md:py-20" id="project">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My Projects
        </h2>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          {project.map((item) => {
            return (
              <>
                <article className="relative rounded-lg shadow-xl bg-white p-16 transform transition-all hover:scale-105 md:mx-0 hover:bg-stone-200">
                  <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                    {item.project_title}
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4">
                    <span>
                      <strong className="font-bold">Type</strong>:&nbsp;
                      <span className="ml-1 px-1 border rounded bg-slate-200">{item.project_type}</span>
                    </span>

                    <div className="my-6 text-lg text-gray-700 leading-relaxed">
                      <PortableText
                        content={item.project_desc}
                        projectId="jm2xwjzr"
                        dataset="production"
                      />
                    </div>
                    <Link href={item.project_link}>
                      <a
                        className="text-red-500 font-bold hover:underline hover:text-red-400"
                        target="_blank"
                      >
                        Project Link
                      </a>
                    </Link>
                    <span></span>
                  </div>
                </article>
              </>
            );
          })}
        </div>
      </div>
      <div>
        <br/>
        <br/>
      </div>
      <div
        className="fixed
             inset-x-0
             bottom-0"
             
      >
        <Footer />
      </div>
    </>
  );
};

export default Projects;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "jm2xwjzr",
    dataset: "production",
    useCdn: false,
  });

  const projectQuery = `*[_type == "projects"]`;
  const project = await client.fetch(projectQuery);

  return {
    props: {
      project,
    },
  };
}
