const lang = navigator.language || navigator.userLanguage
const Fmt = new Intl.DateTimeFormat([lang, 'en-US'])

function installFilter (Vue) {
  Vue.filter('date', function (value) {
    if (!value) return ''
    return Fmt.format(new Date(value))
  })
}

export default installFilter
