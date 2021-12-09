import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
import Head from "next/head";
import { fixDateFormat } from "../../../../lib/fixDateFormat";
import { Profiles } from "src/components/Profiles";
import "remixicon/fonts/remixicon.css";
import { client } from "../../../../lib/client";

type Props = {
  blog: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    tags: any[];
    body: any;
    image: {
      url: string;
    };
  };
  highlightedBody: any;
};

const BlogId: React.FC<Props> = ({ blog, highlightedBody }) => {
  return (
    <div>
      <Head>
        <title>Blogs | {blog.title}</title>
        <link rel="icon" href="/Profile/アルカ.PNG" />
      </Head>
      <main>
        <div className="flex justify-center">
          <div className="block shadow rounded bg-gray-200 py-5 px-7 my-6">
            <h1 className="items-center text-center max-w-4xl mx-auto text-3xl font-bold">
              {blog.title}
            </h1>
            <img
              src={blog.image.url}
              alt={blog.image.url}
              width={700}
              className="py-3 block object-cover heigth-auto mx-auto"
            />

            <div className="flex">
              <div>
                <i className="ri-history-line"></i>
              </div>
              <div>{fixDateFormat(blog.createdAt)}</div>
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
          <div className="mt-6">
            <Profiles />
          </div>
        </div>
      </main>
    </div>
  );
};

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

export default BlogId;
