import "highlight.js/styles/hybrid.css";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Blog, Tags } from "src/types/types";

import { Layout } from "@/components/Layout";
import { Headline } from "@/components/model/Headline";
import { BlogCard } from "@/components/page/BlogCard";
import { client } from "@/lib/client";

export const getStaticPaths: GetStaticPaths = async () => {
  const tags: Tags = await client.get({ endpoint: "tags" });

  const paths = tags.contents.map((tag) => {
    return `/tag/${tag.id}`;
  });

  return { paths: paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs: Blog = await client.get({
    endpoint: `blogs?filters=tag[contains]${context.params?.tag}`,
  });

  return {
    props: { blogs: blogs, tag: context.params?.tag },
  };
};

type Props = {
  blogs: Blog;
  tag: string;
};

const TagIdPage: NextPage<Props> = (props) => {
  return (
    <Layout title={props.tag}>
      <Headline title={`${props.tag}のタグが付く記事一覧`} />
      {props.blogs.contents.length === 0 ? (
        <div className="block items-center py-4 w-full md:flex md:justify-center">記事がありませんでした。</div>
      ) : (
        <ul>
          {props.blogs.contents.map((blog: any, index: any) => {
            return (
              <li key={index} className="mb-4 bg-gray-50 rounded-md border hover:shadow-sm transition">
                <BlogCard blogs={blog} />
              </li>
            );
          })}
        </ul>
      )}
    </Layout>
  );
};
export default TagIdPage;
