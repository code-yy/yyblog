import { useCallback, useEffect, useState } from "react";
import Header from "src/components/Index.page/Header";
import Parser from "rss-parser";

export const Zenn: any = () => {
  const [zenn, setZenn] = useState([]);

  const parser = new Parser();
  let allPostItems = [];

  const getZenn = useCallback(async () => {
    const res = await parser.parseURL("https://zenn.dev/yuto76/feed");
    const json = await res.json();
    console.log(json);
  }, []);

  useEffect(() => {
    getZenn();
  }, [getZenn]);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Zenn;
