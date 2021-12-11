import React, { VFC } from "react";

type Props = {
  tag: string;
};

export const Tag: VFC<Props> = (props) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">#{props.tag}</span>
    </div>
  );
};
