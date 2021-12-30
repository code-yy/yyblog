import { VFC } from "react";
import Link from "next/link";
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
      <a className="block md:flex md:justify-center items-center py-4 w-full">
        <img
          src={props.blogs.image.url}
          alt={props.blogs.image.url}
          className="block object-cover w-full md:w-1/6 min-h-hull border"
        />
        <div className="md:pl-4 w-full md:w-3/4">
          <div>{fixDateFormat(props.blogs.updatedAt)}</div>
          <h3 className="text-lg font-bold">{props.blogs.title}</h3>
          <p className="text-sm text-gray-700">{props.blogs.description}</p>
        </div>
      </a>
    </Link>
  );
};
