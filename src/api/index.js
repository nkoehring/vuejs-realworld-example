import { ajax } from 'nanoajax'

const BASE_URL = 'https://conduit.productionready.io/api'
const ARTICLES_URL = `${BASE_URL}/articles`
const TAGS_URL = `${BASE_URL}/tags`

function getJSON (url) {
  return new Promise((resolve, reject) => {
    ajax({ url }, (status, data) => {
      if (status === 200) resolve(JSON.parse(data))
      else reject(new Error(`Fetch response status ${status}`))
    })
  })
}

export function fetchRecentArticles () {
  return getJSON(ARTICLES_URL)
}
export function fetchTags () {
  return getJSON(TAGS_URL)
}
export function fetchArticle (slug) {
  return getJSON(`${ARTICLES_URL}/${slug}`)
}
