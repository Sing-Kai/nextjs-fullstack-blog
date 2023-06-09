import React from "react"
// import { GetStaticProps, getInitialProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"

// export const getInitialProps = async () => {
//   const feed = [
//     {
//       id: "1",
//       title: "Prisma is the perfect ORM for Next.js",
//       content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
//       published: false,
//       author: {
//         name: "Nikolas Burk",
//         email: "burk@prisma.io",
//       },
//     },
//   ]
//   return { 
//     props: { feed }, 
//     revalidate: 10 
//   }
// }

// type Props = {
//   feed: PostProps[]
// }

// https://vercel.com/guides/nextjs-prisma-postgres
//https://github.com/prisma/fullstack-prisma-nextjs-blog
const Blog = () => {

  const feed = [
    {
      id: "1",
      title: "Prisma is the perfect ORM for Next.js",
      content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      },
    }
  ]

  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>

        {
          feed && (
            <main>
            {feed.map((post) => (
              <div key={post.id} className="post">
                <Post post={post} />
              </div>
            ))}
          </main>
          )

        }
        {/* <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main> */}
      </div>
      {/* <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style> */}
    </Layout>
  )
}

export default Blog