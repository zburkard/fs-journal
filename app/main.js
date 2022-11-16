// JAVASCRIPT HOOKS

function setActiveNavLink() {
  const navElem = document.getElementById('nav-' + window.location.href.substr(window.location.href.indexOf('fs-journal/') + 11).split('/')[0])
  if (!navElem) { return }
  navElem.classList.add('active-nav')
}

function init() {
  setActiveNavLink()
  // @ts-ignore
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/fs-journal/search.json',
    searchResultTemplate: '<a href="{url}" title="{title}"><li class="selectable p-2 text-dark rounded">{title}</li></a>',
    noResultsText: 'No results found.',
    limit: 10,
    fuzzy: true,
  })
}



init()




function mostCommon(str) {
  for (let i = 0; i < str.length; i++) {
    if (i == i) {
      console.log(str[i])
    }
  }
}