<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'

let message = ref('Hello, world!')

function doIt() {
  alert('Done!')
}
</script>

<template>
  <main>
    <TheWelcome />
    {{ message }}
    <div>
      <input type="text" v-model="message" />
    </div>
    <div>
      <button @click="doIt">Click</button>
    </div>
  </main>
</template>
