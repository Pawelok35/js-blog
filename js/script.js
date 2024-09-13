'use strict';

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .post.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
    console.log(activeArticle);
  }

  /* get 'href' attribute from the clicked link */
  const getHref = clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */
  const correctArticle = document.querySelector(getHref);

  /* add class 'active' to the correct article */
  correctArticle.classList.add('active');
};
/////////////////////////////////////////////////////////////////
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks() {
  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);

  titleList.innerHTML = '';

  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for (let article of articles) {
    console.log(article);

    /* get the article id */

    const articleId = article.getAttribute('id');

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    html =
      html +
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      '</span></a></li>';
    console.log(html);
  }

  /* insert link into titleList */
  titleList.innerHTML = html;
}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}
////
function generateTags() {
  /* find all articles */
  const allArticles = document.querySelector(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of allArticles) {
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let tagHtml = '';

    /* get tags from data-tags attribute */
    const articleTags = article.querySelector('data-tags');

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');

    /* START LOOP: for each tag */
    for (let tagArray of articleTagsArray) {
      /* generate HTML of the link */
      const linkHTMLData = { id: tagArray, title: tagArray };

      /* add generated code to html variable */
      tagHtml = tagHtml + linkHTMLData;

      /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = tagHtml;

    /* END LOOP: for every article: */
  }
}
generateTags();
