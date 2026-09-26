"use client";

import "lite-youtube-embed";

const VIDEO_TITLE = "Purva Orient Grand on Lalbagh Road, Bengaluru | Puravankara";

export default function LiteYT() {
  return (
    <div className="w-full h-full">
      <lite-youtube
        videoid="qEOZyCcbd8A"
        title={VIDEO_TITLE}
        playlabel={`Play video: ${VIDEO_TITLE}`}
        class="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      ></lite-youtube>
    </div>
  );
}
