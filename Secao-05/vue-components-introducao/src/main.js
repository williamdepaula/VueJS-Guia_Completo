import Vue from 'vue'

/* const data = {
  titulo: 'Curso de VueJS',
  contador: 0
} */

Vue.component('wpp-component', {
  data: function() {
    return {
      titulo: 'Curso de VueJS',
      contador: 0
    }
  },
  methods: {
    incrementar: function() {
      this.contador++
    }
  },
  template: `
    <div>
      <h1>{{ titulo }}</h1>
      <button @click="incrementar">Clicado {{ contador }} vezes</button>
    </div>
  `
})

new Vue({
  el: '#app1',
})

new Vue({
  el: '#app2',
})