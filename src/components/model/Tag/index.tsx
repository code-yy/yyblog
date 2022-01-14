import { VFC } from "react";

type Props = {
  tag: string;
};

export const TagCard: VFC<Props> = (props) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">#{props.tag}</span>
    </div>
  );
};
