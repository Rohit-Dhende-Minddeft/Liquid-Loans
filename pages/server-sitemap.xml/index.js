import { getServerSideSitemap } from 'next-sitemap';
import { glob } from 'glob';

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
        'sitemap-0.xml',
      ].includes(staticPage);
    })
    .filter((path) => !path.includes('['))
    .filter((path) => !path.includes('/_'))
    .filter((path) => !path.includes('404'))
    .filter((path) => !path.includes('_app'))
    .filter((path) => !path.includes('_document'))
    .filter((path) => !path.includes('static-sitemap.xml'))
    .filter((path) => !path.includes('server-sitemap.xml'))
    .filter((path) => !path.includes('pages/index'))
    .filter((path) => !path.includes('pages/api'))
    .map((item) => {
      return item.replace('.js', '').replace('pages/', '');
    })
    .map((staticPagePath) => {
      return `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${staticPagePath.replace(
        '.js',
        ''
      )}`;
    });

  // get all the author names from blog
  const getOnlyAuthorNames = blogs.map((blog) => {
    return blog.author.first_name.split(" ")[0]?.toLowerCase();
  });
  // const getOnlyAuthorIds = blogs.map((blog) => {
  //   return blog.author.id;
  // });

  //remove duplicates from the array
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  const removeRepeatedAuthors = removeDuplicates(getOnlyAuthorNames);
  // const removeRepeatedAuthors = removeDuplicates(getOnlyAuthorIds);

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

  const newsSitemaps = allPaths.map((item) => ({
    loc: `${item.toString()}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
