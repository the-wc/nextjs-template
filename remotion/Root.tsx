import React from "react";
import { Composition } from "remotion";
import { COMP_NAME, Main } from "./composition/Main";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{ title: "Default title" }}
      />
    </>
  );
};
