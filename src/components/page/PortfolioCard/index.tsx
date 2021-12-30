import { VFC } from "react";
import Link from "next/link";
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
    <div className="mb-4 mx-3 rounded-md border hover:shadow-sm transition bg-gray-50">
      <Link href={`/portfolio/${props.portfolio.id}`}>
        <a className="block md:flex items-center p-4 w-full">
          <img
            src={props.portfolio.image.url}
            alt={props.portfolio.image.url}
            className="block object-cover w-full md:w-1/4 min-h-full border"
          />
          <div className="md:pl-4 w-full md:w-3/4">
            <div>{fixDateFormat(props.portfolio.createdAt)}</div>
            <h2 className="text-lg font-bold">『{props.portfolio.title}』</h2>
            <p className="text-sm text-gray-700 dark:text-gray-400">{props.portfolio.description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};
