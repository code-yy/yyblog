import Head from "next/head";
import { Props } from "src/types/types";
import { Tag } from "src/components/model/Tag";
import { fixDateFormat } from "src/lib/fixDateFormat";
import { addClassNames } from "src/lib/addClassNames";
import cheerio from "cheerio";
import "remixicon/fonts/remixicon.css";
import "highlight.js/styles/hybrid.css";

const BlogId: React.FC<Props> = ({ blog, highlightedBody }) => {
  return (
    <div>
      <Head>
        <title>Blogs | {blog.title}</title>
        <link rel="icon" href="/Profile/アルカ.PNG" />
      </Head>
      <main>
        <div className="flex justify-center">
          <div>
            <h1 className="items-center text-center max-w-4xl mx-auto text-3xl font-bold">{blog.title}</h1>
            <img src={blog.image.url} alt={blog.image.url} width={500} className="py-5 mx-auto" />
            <div className="flex">
              <div>
                <i className="ri-history-line"></i>
              </div>
              <div>{fixDateFormat(blog.createdAt)}</div>
            </div>
            <div className="flex">
              <div>
                <i className="ri-refresh-line"></i>
              </div>
              <div>{fixDateFormat(blog.updatedAt)}</div>
            </div>
            <div>
              <ul className="flex items-center">
                {blog.tag.map((tag: any) => {
                  return (
                    <li key={tag}>
                      <Tag tag={tag.name} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div>
                <div
                  className="prose text-left"
                  dangerouslySetInnerHTML={{
                    __html: highlightedBody,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogId;

export const getStaticPaths = async () => {
  const key: any = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const res = await fetch("https://yutoblog.microcms.io/api/v1/blogs", key);
  const repos = await res.json();

  const paths: any = repos.contents.map((repo: any) => `/blogs/${repo.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  const key: any = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const res = await fetch(`https://yutoblog.microcms.io/api/v1/blogs/${id}`, key);
  const blog = await res.json();
  const $ = cheerio.load(blog.body);

  const classNamesAddedHtml = addClassNames($);

  return {
    props: {
      blog,
      highlightedBody: classNamesAddedHtml.html(),
    },
  };
};
