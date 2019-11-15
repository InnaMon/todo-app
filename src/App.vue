<template>
  <div id="app">
    <TodoList v-bind:todos="todoList"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default { 
  name: 'app',
  components: {
    TodoList
  },
  data() {
    return {
      todoList: [
        {
          id: 1,
          title: "Todo One",
          completed: false
        },
        {
          id: 1,
          title: "Todo Two",
          completed: true
        },
        {
          id: 1,
          title: "Todo Three",
          completed: false
        }
      ]
    }
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
</style>
