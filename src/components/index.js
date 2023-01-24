import React from "react";
import HomeAbout from "./HomeAbout";

import HomeBanner from "./HomeBanner";
import HomeFeatures from "./HomeFeatures";
import HomeHelp from "./HomeHelp";
import HomeServices from "./HomeServices";
import HomeStats from "./HomeStats";
import HomeVideo from "./HomeVideo";

const Components = {
  HomeAbout,
  HomeBanner,
  HomeStats,
  HomeFeatures,
  HomeHelp,
  HomeVideo,
  HomeServices
};

const ComponentFunc = (block) => {
  if (typeof Components[block.slug] !== "undefined") {
    return React.createElement(Components[block.slug], {
      key: Math.random(),
      props: block,
    });
  }
  return React.createElement(
    () => <div>The component {block.slug} has not been created yet.</div>,
    { key: Math.random() }
  );
};
export default ComponentFunc;
