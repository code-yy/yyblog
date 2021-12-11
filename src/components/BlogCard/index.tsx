import Link from "next/link";
import { memo } from "react";
import { fixDateFormat } from "src/lib/fixDateFormat";
import Tag from "src/pages/tag";
import type { Blog } from "src/types/types";

type Props = {
  blog: Blog;
};

export const BlogCard: React.VFC<Props> = memo((props) => {
  return (
    <div className="mb-4 rounded-md border hover:shadow-sm transition">
      <Link href={`/blog/${props.blog.id}`}>
        <a className="block md:flex items-center p-4 w-full">
          <img
            src={props.blog.image.url}
            className="block object-cover w-full md:w-1/4 min-h-full border"
            alt=""
          />
          <div className="md:pl-4 w-full md:w-3/4">
            <h3 className="text-lg font-bold">{props.blog.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">{props.blog.description}</p>
            {/* カテゴリー */}
            <p className="flex items-center py-2 text-sm font-bold underline">
              <span className="block">{props.blog.category.name}</span>
            </p>
            {/* タグ */}
            <ul className="flex items-center pb-2 text-xs text-gray-700">
              {props.blog.tags.map((tag: any, index: any) => {
                return (
                  <li key={index}>
                    <Tag tags={tag.name} />
                  </li>
                );
              })}
            </ul>
            {/* 作成日時 */}
            <p className="flex items-center text-xs text-right text-gray-500">
              <span className="block">{fixDateFormat(props.blog.createdAt)}</span>
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
});

BlogCard.displayName = "BlogCard";
