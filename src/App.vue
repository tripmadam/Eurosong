<template>
  <div id="app">
    <!-- Nav -->
    <Navigation />

    <!-- Content -->
    <h1>
      Eurosong festival
    </h1>

    <Counter />

    <Feedback
      v-for="(message, index) in messages"
      :key = "index"
      :message="message.message"
      :classType="message.classType"
    />

    <button @click="addMessage">
      Add Message
    </button>


  </div>
</template>

<script>
// Import of the whole styling for the app
import style from './scss/style.scss';

// Components
import Navigation from "./components/Navigation.vue";
import Counter from "./components/Counter.vue";
import Feedback from "./components/Feedback.vue";

// App component
export default {
  name: 'App',
  components: {
    Navigation,
    Counter,
    Feedback
  },
  data() {
    return {
      messages: [
        {
          message: "Error, t is kapot",
          classType: "warning"
        },
        {
          message: "Great success",
          classType: "success"
        },
      ]
    }
  },
  methods: {
    addMessage() {
      this.messages.push({
        message: "Hallo nieuwe feedback item",
        classType: "success"
      })
    }
  }
}
</script>