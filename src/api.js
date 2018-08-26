import { ajax } from 'nanoajax'

const BASE_URL = 'https://conduit.productionready.io/api'
const ARTICLES_URL = `${BASE_URL}/articles`
const TAGS_URL = `${BASE_URL}/tags`

function tryJSON (data) {
  try {
    return JSON.parse(data)
  } catch (_) {
    return data
  }
}

function callAPI (url, method = 'GET', payload = null) {
  const options = { url, method }
  if (payload) {
    options.body = JSON.stringify(payload)
  }

  return new Promise((resolve, reject) => {
    ajax(options, (status, data) => {
      if (status === 200) resolve(tryJSON(data))
      else reject(new Error(`${method} response status ${status}`))
    })
  })
}

export function fetchRecentArticles () {
  return callAPI(ARTICLES_URL)
}
export function fetchTags () {
  return callAPI(TAGS_URL)
}
export function fetchArticle (slug) {
  return callAPI(`${ARTICLES_URL}/${slug}`)
}
export function fetchArticleComments (slug) {
  return callAPI(`${ARTICLES_URL}/${slug}/comments`)
}

export function postArticleComment (slug, comment) {
  return callAPI(`${ARTICLES_URL}/${slug}/comments`, 'POST', comment)
}

export function deleteArticleComment (slug, id) {
  return callAPI(`${ARTICLES_URL}/${slug}/comments/${id}`, 'DELETE')
}
