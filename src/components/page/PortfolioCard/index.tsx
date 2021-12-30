import Link from "next/link";
import { VFC } from "react";

import { fixDateFormat } from "@/lib/fixDateFormat";

type Props = {
  portfolio: {
    id: string;
    image: {
      url: string;
    };
    createdAt: string;
    title: string;
    description: string;
  };
};

export const PortfolioCard: VFC<Props> = (props) => {
  return (
    <div className="mx-3 mb-4 bg-gray-50 rounded-md border hover:shadow-sm transition">
      <Link href={`/portfolio/${props.portfolio.id}`}>
        <a className="block items-center p-4 w-full md:flex">
          <img
            src={props.portfolio.image.url}
            alt={props.portfolio.image.url}
            className="block object-cover w-full min-h-full border md:w-1/4"
          />
          <div className="w-full md:pl-4 md:w-3/4">
            <div>{fixDateFormat(props.portfolio.createdAt)}</div>
            <h2 className="text-lg font-bold">『{props.portfolio.title}』</h2>
            <p className="text-sm text-gray-700 dark:text-gray-400">{props.portfolio.description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};
