<template>
    <li>
      <input type="checkbox" v-model="todo.completed">
      <span>{{ todo.task }}</span>
      <span @click="removeTodo"><i class="fa fa-trash" aria-hidden="true"></i></span>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true,
      },
    },
    methods: {
      removeTodo() {
        this.$emit('remove-todo');
      },
    },
  };
  </script>
  

  