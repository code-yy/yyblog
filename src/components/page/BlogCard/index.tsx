import Link from "next/link";
import { VFC } from "react";

import { fixDateFormat } from "@/lib/fixDateFormat";

type Props = {
  blogs: {
    id: string;
    title: string;
    description: string;
    image: {
      url: string;
    };
    updatedAt: string;
  };
};

export const BlogCard: VFC<Props> = (props) => {
  return (
    <Link href={`/blogs/${props.blogs.id}`}>
      <a className="block items-center py-4 w-full md:flex md:justify-center">
        <img
          src={props.blogs.image.url}
          alt={props.blogs.image.url}
          className="block object-cover w-full border md:w-1/6"
        />
        <div className="w-full md:pl-4 md:w-3/4">
          <div>{fixDateFormat(props.blogs.updatedAt)}</div>
          <h3 className="text-lg font-bold">{props.blogs.title}</h3>
          <p className="text-sm text-gray-700">{props.blogs.description}</p>
        </div>
      </a>
    </Link>
  );
};
