const app = Vue.createApp({
  data() {
    return {
      userName: "",
      address: "",
      game: "Paper Scissor Stone",
      result: "https://img.icons8.com/ios/100/000000/hand-scissors--v1.png",
      link: "https://vuejs.org/",
    };
  },
  methods: {
    setName(event) {
      return (this.userName = event.target.value);
    },
    setAddress(event){
      return this.address = event.target.value
    },
    submitForm() {
      console.log(this.address)
    },
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
