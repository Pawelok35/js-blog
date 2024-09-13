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
  optTitleListSelector = '.titles';

function generateTitleLinks() {
  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);

  // czyli wszystkie <li> z linkami do artykułów (<li><a href="#article-1" class="active"><span>Article 1</span></a></li> itd.).
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