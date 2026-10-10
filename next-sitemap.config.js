/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://purvaorientgrandlalbagh.com",
  // public/robots.txt is maintained by hand; don't let postbuild overwrite it.
  generateRobotsTxt: false,
  generateIndexSitemap: false,


  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};