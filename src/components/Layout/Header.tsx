import "remixicon/fonts/remixicon.css";

import type { VFC } from "react";

import { HeaderLinks } from "../model/HeaderLink";

export const Header: VFC = () => {
  return (
    <div className="flex justify-around items-center py-3 text-gray-50 bg-gray-700">
      <HeaderLinks href={"/"} />
      <h1 className="items-center text-4xl font-bold">YY</h1>
      <HeaderLinks href={"https://github.com/code-yy/yyblog"} />
    </div>
  );
};
