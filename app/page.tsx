"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React from "react";
import {
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../remotion/composition/Main";

import { Main } from "../remotion/composition/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Player
        component={Main}
        inputProps={defaultMyCompProps}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        compositionHeight={VIDEO_HEIGHT}
        compositionWidth={VIDEO_WIDTH}
        style={{
          // Can't use tailwind class for width since player's default styles take presedence over tailwind's,
          // but not over inline styles
          width: "100%",
        }}
        controls
        autoPlay
        loop
      />
    </div>
  );
};

export default Home;
