// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const baseUrl = 'https://minddeft.com/demo/dev_blog/wp-json/md/v1';
const baseUrl = 'https://llcms-dev.liquidloans.io/wp-json/md/v1';

//getTweet
export const getTweet = async (tweetId) => {
  const tID = tweetId.split(",");
  const data =[];
  for (let index = 0; index < tID.length; index++) {
    const res = await fetch(`https://qwik-twitter.builder.io/tweet/${tID[index]}.html`);
    data.push(await res.text());
  }
  return data;
};

//Get all blogs
export const getBlogs = async () => {
  const res = await fetch(`${baseUrl}/posts`);
  const data = await res.json();
  return data;
};



//Get a single blog
export const getBlog = async (postName) => {
  const res = await fetch(`${baseUrl}/post/${postName}`);
  const data = await res.json();
  return data;
};

//Get categories
export const getCategories = async () => {
  const res = await fetch(`${baseUrl}/categories`);
  const data = await res.json();
  return data;
};

//Get blogs by author
export const getBlogsByAuthor = async (authorId) => {
  const res = await fetch(`${baseUrl}/posts/author/${authorId}`);
  const data = await res.json();
  return data;
};

//Get blogs by search
export const getBlogsBySearch = async (search) => {
  const res = await fetch(`${baseUrl}/posts/search/${search}`);
  const data = await res.json();
  return data;
};

//Get blogs by category
export const getBlogsByCategory = async (category) => {
  const res = await fetch(`${baseUrl}/posts/category/${category}`);
  const data = await res.json();
  return data;
};

//get text of all tags with same classname in html
export const getTableOfContent = (html) => {
  const tableOfContent = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const tagElements = doc.getElementsByClassName('tableContent');

  for (let i = 0; i < tagElements.length; i++) {
    tableOfContent.push(tagElements[i].innerText);
  }
  return tableOfContent;
};

//get sticky post
export const getStickyPosts = async () => {
  const res = await fetch(`${baseUrl}/posts/sticky/1`);
  const data = await res.json();
  return data;
}