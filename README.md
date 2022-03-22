# <img width="50" src="https://user-images.githubusercontent.com/10693128/159541759-59467dc6-e720-4bff-85cb-bf0f85aa75c2.jpeg" /> Basic Vue Game :fist::v::hand:
Simple 'Paper Scissors Stone' game created by Vue.js
<img width="1136" alt="Screen Shot 2022-03-13 at 6 35 41 PM" src="https://user-images.githubusercontent.com/10693128/158074149-a6041b1c-4389-45e6-a9da-43f67a05654a.png">


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


### Form Event Binding and Event Modifier
```html
<!-- @submit.prevent prevents default page reload by submit event -->
<form v-if="userName" @submit.prevent="submitForm">
   <p>Win? Claim your reward below!</p>
   <input @input="setAddress" type="text" placeholder="Send reward to this address!" />
   <button>Submit</button>
</form>
```
