import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "src/components/layout";
import { Tag } from "src/components/model/Tag";
import { fixDateFormat } from "src/lib/fixDateFormat";
import { addClassNames } from "src/lib/addClassNames";
import cheerio from "cheerio";
import "remixicon/fonts/remixicon.css";
import "highlight.js/styles/hybrid.css";

type Props = {
  blog: {
    id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    tag: any;
    body: any;
    image: {
      url: string;
    };
  };
  highlightedBody: any;
};

const BlogId: NextPage<Props> = (props) => {
  return (
    <Layout title={`Blogs | ${props.blog.title}`}>
      <main>
        <div className="flex justify-center">
          <div>
            <h1 className="items-center text-center max-w-4xl mx-auto text-3xl font-bold">{props.blog.title}</h1>
            <img src={props.blog.image.url} alt={props.blog.image.url} width={500} className="py-5 mx-auto" />
            <div className="flex">
              <div>
                <i className="ri-history-line"></i>
              </div>
              <div>{fixDateFormat(props.blog.createdAt)}</div>
            </div>
            <div className="flex">
              <div>
                <i className="ri-refresh-line"></i>
              </div>
              <div>{fixDateFormat(props.blog.updatedAt)}</div>
            </div>
            <div>
              <ul className="flex items-center">
                {props.blog.tag.map((tag: any) => {
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
                    __html: props.highlightedBody,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BlogId;

export const getStaticPaths: GetStaticPaths = async () => {
  const key: any = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const res = await fetch("https://yutoblog.microcms.io/api/v1/blogs", key);
  const repos = await res.json();

  const paths: any = repos.contents.map((repo: any) => `/blogs/${repo.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
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
