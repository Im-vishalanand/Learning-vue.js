// Counter.js
Vue.component('counter', {
  template: `
    <div>
      <h1>Count: {{ count }}</h1>
      <button @click="decrement">Decrease</button>
      <button @click="increment">Increase</button>
    </div>
  `,
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
});
