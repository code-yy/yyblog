import { VFC } from "react";

type Props = {
  title: string;
};

export const Headline: VFC<Props> = (props) => {
  return <h1 className="text-center text-3xl font-bold mb-3">{props.title}</h1>;
};
