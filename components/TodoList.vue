<template>
    <ul class="todolist">
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.completed">
        <span>{{ todo.task }}</span>
        <span @click="removeTodo(index)"><i class="fa fa-trash" aria-hidden="true"></i></span>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      todos: {
        type: Array,
        required: true,
      },
    },
    methods: {
      removeTodo(index) {
        this.$emit('remove-todo', index);
      },
    },
  };
  </script>
  
 
  