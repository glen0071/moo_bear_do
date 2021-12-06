<template>
  <div>
    <h3>Moo Bears Do It</h3>
    <form @submit.prevent="onFormSubmit">
      <input type="text" v-model="newTask.text">
      <button type="submit">Commit!</button>
    </form>
    <div v-for="mooBearDo in mooBearDos" :key="mooBearDo.message">
      {{ mooBearDo.text }}
    </div>
  </div>
</template>

<script>
import { firebaseApp } from '../database/index.js';
import { getFirestore, collection, query, getDocs, setDoc, doc } from "firebase/firestore";

const db = getFirestore(firebaseApp);
const queryLatest = query(collection(db, "tasks"));

export default {
  name: 'DoList',
  data() {
    return {
      mooBearDos: [],
      newTask: {
        text: ''
      }
    }
  },
  methods: {
    async fetchLatestQuotes() {
      let newMooBearDos  = []
      const querySnapshot = await getDocs(queryLatest);
      querySnapshot.forEach((doc) => {
        newMooBearDos.push(
          {
            id: doc.id,
            text: doc.data().text,
            author: doc.data().author
          }
        )
      }); 
      this.mooBearDos = newMooBearDos
    },
    random (length = 8) {
      return Math.random().toString(16).substr(2, length);
    },
    async onFormSubmit() {
      console.log(this.newTask, this.random())
      await setDoc(doc(db, 'tasks', this.random()), this.newTask)
      this.newTask = {
        text: ''
      }
    }
  },
  props: {
    msg: String
  },
  mounted() {
    this.fetchLatestQuotes()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
