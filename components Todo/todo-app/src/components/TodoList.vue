<template>
    <ul class="todolist">
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.completed">
        {{todo.task}}<span @click="removeTodo(index)"><i class="fa fa-trash" aria-hidden="true"></i></span>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      todos: {type: Array, required: true}
    },
    methods: {
      removeTodo(index) {
        this.$emit('remove-todo', index);
      },
    },
  };
  </script>

<style>
.todolist{
    padding-left: 2px;
    height: auto;
}
.todolist li{
    position:relative;
    line-height:45px ;
    margin-bottom: 9px;
    background: #f2f2f2;
    overflow: hidden;
    cursor:pointer;
    border-radius: 5px;
    word-wrap: break-word;
    padding-left: 20px;
}
.todolist li span{
  position:absolute;
  right: 0px;
  background-color: rgb(207, 73, 20);
  color: #fff;
  width:45px;
  text-align: center;
}
</style>
  
 
  