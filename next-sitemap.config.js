const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
// console.log("site-url",siteUrl)
module.exports = {
  siteUrl,
  exclude: ['/404'],
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: path.replace('/fr-FR', ''), // Remove `/fr-FR` from paths - could get value from i18n config to make it dynamic
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    transformRobotsTxt: async (_, robotsTxt) => {
      const withoutHost = robotsTxt.replace(
        `# Host\nHost: ${process.env.NEXT_PUBLIC_DOMAIN_URL}\n\n`,
        ''
      ).replace(`# *`, '# https://www.robotstxt.org/robotstxt.html\n');

      return withoutHost;
    },

    policies: [
      {
        userAgent: '*',
        disallow: ['/wp-content/plugins/', '/wp-admin/'],
      },
    ],
    additionalSitemaps: [
      `${siteUrl}/server-sitemap.xml`,
      `${siteUrl}/sitemap-0.xml`,
    ],
  },
};
