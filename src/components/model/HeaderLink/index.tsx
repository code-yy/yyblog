import Link from "next/link";
import { VFC } from "react";

type Props = {
  href: string;
};

export const HeaderLinks: VFC<Props> = (props) => {
  if (props.href === "/") {
    return (
      <Link href="/">
        <a>
          <i className="text-4xl ri-home-8-line"></i>
        </a>
      </Link>
    );
  } else {
    return (
      <Link href="https://github.com/code-yy/yyblog">
        <a>
          <div className="p-6 bg-cover bg-hero-icon rounded-full"></div>
        </a>
      </Link>
    );
  }
};
