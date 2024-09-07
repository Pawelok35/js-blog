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


  ///

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  function generateTitleLinks() {
    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);

    // usuwa ze stałej titleList Cała zawartość elementu <ul class="list titles">, 
    // czyli wszystkie <li> z linkami do artykułów (<li><a href="#article-1" class="active"><span>Article 1</span></a></li> itd.).
    titleList .innerHTML = '';
    

    /* for each article */

const articles = document.querySelectorAll(optArticleSelector);

for (let article of articles){
   console.log(article);


    /* get the article id */

    const articleId = article.getAttribute('id');

    /* find the title element */
    // 1. Znajduje element <h3 class="post-title">Article 1</h3> w danym artykule.
    // 2. .innerHTML: Pobiera zawartość tego elementu, czyli tekst "Article 1".
    // 3. articleTitle: Przechowuje ten tekst w zmiennej articleTitle.
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */
   

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* insert link into titleList */
    titleList.innerHTML = titleList.innerHTML + linkHTML;

  }
  }
  generateTitleLinks();
  // Add click event listeners to links
  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }


