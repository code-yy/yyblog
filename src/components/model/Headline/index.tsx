import { VFC } from "react";

type Props = {
  title: string;
};

export const Headline: VFC<Props> = (props) => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">{props.title}</h1>
    </div>
  );
};
