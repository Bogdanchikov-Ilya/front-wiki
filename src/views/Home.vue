<template>
  <div>
    <div class="container">
      <form class="flex flex-nowrap" @submit.prevent="handleSubmit()">
        <label class="sr-only mb-1">Ключевое слово</label>
        <div class="form-item d-flex justify-content-between">
          <b-form-input id="inline-form-input-name" v-model="searchValue" class="mb-2 mr-sm-2 mb-sm-0 w-50" placeholder="Липецк"></b-form-input>
          <b-button variant="primary" @click="handleSubmit()">Скопировать</b-button>
        </div>
      </form>
      <div class="info d-flex flex-column mt-5" v-if="time">
        <p class="mb-3">Импорт завершен</p>
        <ul>
          <li>Найдена статья по адресу - <span><a :href="url">{{url}}</a></span></li>
          <li>Время обработки - <span>{{ time }} ms</span></li>
          <li>Размер статьи - <span>{{size}} Кб</span></li>
          <li>Количество слов - <span>{{wordCounter}}</span></li>
        </ul>
      </div>
      <hr>
      <p v-if="articles.length == 0">Список статей пуст</p>
      <table class="table mt-5" v-if="articles.length !== 0">
        <thead>
        <tr>
          <th scope="col">Название статьи</th>
          <th scope="col">Ссылка</th>
          <th scope="col">Размер статьи</th>
          <th scope="col">Количество слов</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in articles">
          <th>{{item.title}}</th>
          <td><a :href="item.url">{{item.url}}</a></td>
          <td>{{item.size}} Kb</td>
          <td>{{item.count_words}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchValue: '',

      title: '',
      body: '',
      url: '',
      size: '',
      wordCounter: '',
    }
  },
  computed: {
    articles() {
      return this.$store.getters['articles/getArticles']
    },
    time() {
      return this.$store.getters['articles/getTime']
    }
  },
  created() {
    this.$store.dispatch('articles/getAll')
  },
  methods: {
    async searchWikipedia(searchQuery) {
      const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${searchQuery}`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      return json;
    },

    async handleSubmit() {
      if(this.searchValue.trim() == ''){
        this.searchValue = ''
        alert('Пустая строка')
        return
      }
      this.$store.commit('setPreloader', true)
      const inputValue = this.searchValue
      const searchQuery = inputValue.trim();

      try {
        const results = await this.searchWikipedia(searchQuery);
        this.title = results.query.search[0].title;
        this.url = `https://ru.wikipedia.org/?curid=${results.query.search[0].pageid}`

        const pageid =  results.query.search[0].pageid.toString()

        this.size = results.query.search[0].size /1024; // размер в Кб
        this.wordCounter = results.query.search[0].wordcount; // кличество слов

        const text = await this.takeText(results.query.search[0].title)

        let div = document.createElement('div');
        div.innerHTML = text.query.pages[pageid].extract;
        this.body = div.innerText // сам текст

        this.$store.dispatch('articles/create', {
          title: this.title,
          body: this.body,
          url: this.url,
          size: this.size,
          wordCounter: this.wordCounter
        })

        if(results.length < 1) {
          alert('Ничего не найдено!')
        }
      } catch (err) {
        console.log(err);
        alert('Ошибка поиска');
        this.$store.commit('setPreloader', false)
      }
      this.searchValue = ''
    },

    async takeText(aName) {
      try {
        const result = await fetch(`https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&titles=${aName}&redirects=true`)
        console.log(`https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&titles=${aName}&redirects=true`)
        const json = await result.json();
        console.log(json)
        return json;
      } catch (e) {
        throw e
      }
    }
  }
}
</script>

<style scoped>
.info{
  background-color: #efefef;
  padding: 1.5em;
}
</style>