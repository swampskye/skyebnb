import React, { memo, useEffect, useState } from "react";
import myRequest from "@/api";

const Home = memo(() => {
  const [highscore, setHighscore] = useState({});
  useEffect(() => {
    myRequest.get({ url: "home/highscore" }).then((res) => {
      console.log(res);
      setHighscore(res);
    });
  }, []);
  return (
    <div>
      Home
      <h2>{highscore.title}</h2>
      <h4>{highscore.subtitle}</h4>
      <ul>
        {highscore.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;
