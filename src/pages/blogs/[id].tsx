import Head from "next/head";
import { Tag } from "src/components/Tag";
import { Props } from "src/types/types";
import { fixDateFormat } from "src/lib/fixDateFormat";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
import "remixicon/fonts/remixicon.css";

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
            <h1 className="items-center text-center max-w-4xl mx-auto text-3xl font-bold">
              {blog.title}
            </h1>
            <img src={blog.image.url} alt={blog.image.url} width={700} className="py-5 mx-auto" />
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

  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  return {
    props: {
      blog,
      highlightedBody: $.html(),
    },
  };
};
