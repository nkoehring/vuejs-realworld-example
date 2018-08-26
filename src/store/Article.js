import { fetchArticle } from '@/api'
import Comments from '@/store/Comments'

const state = {
  article: {
    title: 'The Five Commandments',
    slug: 'pentabarf',
    author: {
      username: 'Apostle Zarathud',
      bio: '',
      following: true,
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg'
    },
    body: `The PENTABARF was discovered by the hermit Apostle Zarathud in the Fifth Year of The Caterpillar. He found them carved in gilded stone, while building a sun deck for his cave, but their import was lost for they were written in a mysterious cypher. However, after 10 weeks & 11 hours of intensive scrutiny he discerned that the message could be read by standing on his head and viewing it upside down.

    **KNOW YE THIS O MAN OF FAITH!**

    I - There is no Goddess but Goddess and She is Your Goddess. There is no Erisian Movement but The Erisian Movement and it is The Erisian Movement. And every Golden Apple Corps is the beloved home of a Golden Worm.

    II - A Discordian Shall Always use the Official Discordian Document Numbering System.

    III - A Discordian is Required during his early Illumination to Go Off Alone & Partake Joyously of a Hot Dog on a Friday; this Devotive Ceremony to Remonstrate against the popular Paganisms of the Day: of Catholic Christendom (no meat on Friday), of Judaism (no meat of Pork), of Hindic Peoples (no meat of Beef), of Buddhists (no meat of animal), and of Discordians (no Hot Dog Buns).

    IV - A Discordian shall Partake of No Hot Dog Buns, for Such was the Solace of Our Goddess when She was Confronted with The Original Snub.

    V - A Discordian is Prohibited of Believing what he reads.

    **IT IS SO WRITTEN! SO BE IT. HAIL DISCORDIA! PROSECUTORS WILL BE TRANSGRESSICUTED**.`,
    createdAt: '2000-02-29T23:42:00.000Z',
    updatedAt: '2000-02-29T23:42:00.000Z',
    description: 'The PENTABARF was discovered by the hermit Apostle Zarathud in the Fifth Year of The Caterpillar.',
    favorited: true,
    favoritesCount: 23425,
    tagList: []
  },
  isLoading: false
}

const mutations = {
  setIsLoading (state) {
    state.isLoading = true
  },
  setArticle (state, payload) {
    // TODO: Good idea to blindly replace the state?
    state.article = payload.article
    state.isLoading = false
  }
}

const actions = {
  async fetch ({ commit, state }, slug) {
    if (state.slug !== slug) {
      commit('setIsLoading')
      const article = await fetchArticle(slug)
      commit('setArticle', article)
    }
    return Promise.resolve()
  }
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules: { Comments }
}
