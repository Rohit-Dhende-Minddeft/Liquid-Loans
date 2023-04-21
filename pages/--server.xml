import { glob } from 'glob';

// collect all the post
export const getServerSideProps = async (ctx) => {
  const baseUrl = 'https://llcms-dev.liquidloans.io/wp-json/md/v1';

  let blogs = await fetch(`${baseUrl}/posts`);
  blogs = await blogs.json();

  let allCategories = await fetch(`${baseUrl}/categories`);
  allCategories = await allCategories.json();

  const pagesDir = 'pages/**/*.js';
  let pagesPaths = glob.sync(pagesDir);

  const staticPaths = pagesPaths
    .filter((staticPage) => {
      return ![
        'api',
        '_app.js',
        '_document.js',
        '404.js',
        'vault',
        'index.js',
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${staticPagePath.replace(
        '.js',
        ''
      )}`;
    });

  //get all the author names from blog
  // const getOnlyAuthorNames = blogs.map((blog) => {
  //   return blog.author.nickname;
  // });
  const getOnlyAuthorIds = blogs.map((blog) => {
    return blog.author.id;
  });

  //remove duplicates from the array
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  // const removeRepeatedAuthors = removeDuplicates(getOnlyAuthorNames);
  const removeRepeatedAuthors = removeDuplicates(getOnlyAuthorIds);

  //Set all paths which are under author
  const dynamicPathsByAuthors = removeRepeatedAuthors?.map((authorName) => {
    return `${process.env.NEXT_PUBLIC_DOMAIN_URL}/vault/research/author/${authorName}`;
  });

  //Set all paths which are under categories
  const dynamicPathsByCategories = allCategories.map((cat) => {
    return `${process.env.NEXT_PUBLIC_DOMAIN_URL}/vault/research/category/${cat.slug}`;
  });

  //Set all paths of all blogs
  const dynamicAllBlogPaths = blogs.map((blog) => {
    return `${process.env.NEXT_PUBLIC_DOMAIN_URL}/vault/research/${blog.category[0].slug}/${blog.slug}`;
  });

  const allPaths = [
    ...staticPaths,
    ...dynamicAllBlogPaths,
    ...dynamicPathsByCategories,
    ...dynamicPathsByAuthors,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${process.env.NEXT_PUBLIC_DOMAIN_URL}/vault/research</loc><lastmod>${new Date().toISOString()}</lastmod></url><url><loc>${process.env.NEXT_PUBLIC_DOMAIN_URL}/vault/videos</loc><lastmod>${new Date().toISOString()}</lastmod></url><url><loc>${process.env.NEXT_PUBLIC_DOMAIN_URL}/vault/podcasts</loc><lastmod>${new Date().toISOString()}</lastmod></url>${allPaths
    .map((url) => {
      return `<url><loc>${url}</loc><lastmod>${new Date().toISOString()}</lastmod></url>`;
    })
    .join('')}</urlset>
  `;

  ctx.res.setHeader('Content-Type', 'text/xml');
  ctx.res.write(sitemap);
  ctx.res.end();

  return {
    props: {},
  };
};
export default function Site() {}
