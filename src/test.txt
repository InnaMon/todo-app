<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo"/>
    <TodoList v-bind:todos="todoList" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';
import axios from 'axios';

export default { 
  name: 'app',
  components: {
    Header,
    AddTodo,
    TodoList
  },
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    deleteTodo(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => {
        this.todoList = this.todoList.filter(todo => todo.id !== id)
        console.log('DELETE reponse', response);
      })
      .catch(err => console.log('DELETE response error', err))

      // fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      //   method: 'DELETE'
      // })
      // .then(response => {
      //   this.todoList = this.todoList.filter(todo => todo.id !== id)
      //   console.log('DELETE reponse', response);
      // })
      // .catch(err => console.log(err))
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
      .then(response => {
        this.todoList = [...this.todoList, response.data];
        console.log('POST response', response.data);
      })
      .catch(err => console.log('POST request error', err)) 
    }

    //   fetch('https://jsonplaceholder.typicode.com/todos', {
    //     method: 'POST',
    //     body: JSON.stringify(title, completed)
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     this.todoList = [...this.todoList, data];
    //     console.log('POST response', data);
    //   })
    //   .catch(err => console.log('POST request error', err))
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => this.todoList = response.data)
    .catch(err => console.log('GET req error', err));

    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    // .then(response => response.json())
    // .then(data => this.todoList = data);
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
