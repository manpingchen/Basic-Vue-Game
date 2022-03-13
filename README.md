# Basic Vue Game :fist::v::hand:
Simple 'Paper Scissors Stone' game created by Vue.js

https://user-images.githubusercontent.com/10693128/158072479-dbf20f6d-4aa4-40ad-9e79-9aef94bde571.mov


### Data Binding and Interpolation
```html
 <section id="user-round">
  <!-- {{INTERPOLATION}} -->
  <h2>{{game}}</h2>
  <!-- v-bind: allows VUE to use the attribute -->
  <img v-bind:src="result" />
  <button @click="outputResult()">Play</button>
  <a v-bind:href="link" target="_blank">Vue JS</a>
</section>
```

```javascript
const app = Vue.createApp({
  data() {
    return {
      game: "Paper Scissor Stone",
      result: "https://img.icons8.com/ios/100/000000/hand-scissors--v1.png",
      link: "https://vuejs.org/",
    };
  },
  methods: {
    outputResult() {
      const randomNumber = Math.random();
      
      const scissorImg = "https://img.icons8.com/ios/100/000000/hand-scissors--v1.png";
      const paperImg = "https://img.icons8.com/dotty/80/000000/toilet-paper.png";
      const stoneImg = "https://img.icons8.com/ios-filled/100/000000/rock.png";
     
      if (randomNumber < 0.33) {
        return (this.result = scissorImg);
      } else if (0.33 <= randomNumber && randomNumber < 0.66) {
        return (this.result = paperImg);
      } else {
        return (this.result = stoneImg);
      }
    },
  },
});

app.mount("#user-round");

```
