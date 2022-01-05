import cheerio from "cheerio";
import "highlight.js/styles/hybrid.css";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/Layout";
import { Tag } from "@/components/model/Tag";
import { addClassNames } from "@/lib/addClassNames";
import { fixDateFormat } from "@/lib/fixDateFormat";

import "remixicon/fonts/remixicon.css";

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
    description: string;
  };
  highlightedBody: any;
};

const BlogId: NextPage<Props> = (props) => {
  return (
    <Layout
      meta={{
        pageName: props.blog.title,
        description: props.blog.description,
        ogImagePath: props.blog.image.url,
      }}
    >
      <main>
        <div className="flex justify-center">
          <div>
            <h1 className="items-center mx-auto max-w-4xl text-3xl font-bold text-center">{props.blog.title}</h1>
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
                  className="text-left prose"
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
