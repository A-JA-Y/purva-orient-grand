"use client";

import { useEffect } from "react";

/**
 * Lightweight YouTube embed for MDX pages.
 *
 * The <lite-youtube> element and its poster are server-rendered, with a plain link to the
 * video as the play button, so the video is visible (and playable via YouTube) before any JS
 * runs. The custom element is registered only after hydration, because upgrading it rewrites
 * its children and would otherwise trip React's hydration check.
 */
export default function VideoEmbed({ id, title, channel, caption }) {
  useEffect(() => {
    import("lite-youtube-embed");
  }, []);

  const label = `Play video: ${title}`;
  const watchUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-xl shadow-lg bg-black">
        <lite-youtube
          videoid={id}
          title={title}
          playlabel={label}
          params="rel=0"
          style={{
            backgroundImage: `url("https://i.ytimg.com/vi/${id}/maxresdefault.jpg")`,
            maxWidth: "100%",
          }}
        >
          <a href={watchUrl} className="lyt-playbtn" title={label}>
            <span className="lyt-visually-hidden">{label}</span>
          </a>
        </lite-youtube>
      </div>
      {(caption || channel) && (
        <figcaption className="text-[0.8rem] text-gray-500 mt-3 leading-relaxed">
          {caption}
          {channel && (
            <>
              {caption ? " " : ""}
              <span className="text-gray-400">
                Video: {channel}, on{" "}
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-2 hover:text-gray-600"
                >
                  YouTube
                </a>
                .
              </span>
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
