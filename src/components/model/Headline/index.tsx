import { VFC } from "react";

type Props = {
  title: string;
};

export const Headline: VFC<Props> = (props) => {
  return <h1 className="mb-3 text-3xl font-bold text-center">{props.title}</h1>;
};
