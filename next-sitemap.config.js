/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://purvaorientgrandlalbagh.com",
  // Static export: `next build` has already copied public/ into out/ by the time this
  // runs, so write sitemap.xml (and robots.txt) straight into the deployed folder.
  outDir: "out",
  // public/robots.txt is maintained by hand; don't let postbuild overwrite it.
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  // App Router icon files (app/icon.png, app/apple-icon.png) build as routes; they are not pages
  exclude: ["/icon.png", "/apple-icon.png"],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};