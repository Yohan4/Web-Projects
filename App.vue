<template>
  <div class="container">
    <h1 class="header">Todo App</h1>
    <div class="add-new-task">
      <input @keyup.enter="addTodo" type="text" placeholder="Add your new todo" class="input-todo" v-model="newTodo">
      <button @click="addTodo" class="submit-new-task"><i class="fas fa-plus"></i></button>
    </div>

    <TodoList :todos="todos" @remove-todo="removeTodo"></TodoList>

    <div class="pending">
      <span>You have <span>{{ pendingTasks }}</span> pending tasks</span>
      <button @click="clearAll">Clear All</button>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
  },
  data() {
    return {
      newTodo: '',
      todos: [
        { task: 'Buy a new gaming laptop', completed: false },
        { task: 'Complete a previous task', completed: false },
        { task: 'Create a video for Youtube', completed: false },
        { task: 'Create a new portfolio site', completed: false },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({ task: this.newTodo, completed: false });
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    clearAll() {
      this.todos = [];
    },
  },
  computed: {
    pendingTasks() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
  },
};
</script>

<style>

*{
    box-sizing: border-box;
  }
  
  body {
      height: 100vh;
      width: 100%;
      display:flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 10px, 70px, 25px, 70px;
      overflow: hidden;
      background-image: linear-gradient(rgb(129, 248, 224), rgb(129, 230, 248), rgb(129, 220, 248), rgb(129, 214, 248), rgb(129, 185, 248), rgb(129, 151, 248), rgb(129, 141, 248), rgb(131, 129, 248));
  }
  
  .header{
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-style: normal;
      color:black;
      text-align: left;
      font-size: 40px;
      font-weight: 600;
      word-spacing: normal;
      letter-spacing: 1px;
      margin: 0px, 0px, 7px, 0px;
      line-height: 32px;
      
  }
  
  .container {
      max-width: 420px;
      width: 100%;
      background-color: white;
      padding:25px;
      padding-top: 15px;
      padding-left: 30px;
      border-radius: 5px;
  }
  
  .submit-new-task {
      width: 50px;
      height: 100%;
      border: none;
      color: #fff;
      margin-left: 5px;
      font-size: 21px;
      outline: none;
      background:rgb(133, 0, 136);
      cursor: pointer;
      border-radius: 3px;
      opacity: 0.6;
      transition: all 0.3s ease
  
  }
  .add-new-task{
      display:flex;
      font-size: 45px;
      height: 40px;  
      color: rgb(191, 191, 197);
      max-height: 45px;
      margin-bottom: 35px;
  }
  
  .input-todo{
      width: 90%;
      padding: 0px 5px 5px 15px;
      height:40px;
      border: 1px solid silver;
      outline:none;
      color: rgb(204, 204, 208);
      font-size: 18px;
      transition: all 0.4s ease;
      padding-left: 15PX;
      font-weight: 600px;
  }
  
  .input-todo::placeholder{
      color: rgb(88, 88, 96)
  }
  
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
  
  .pending button{
      color:#fff;
      background: rgb(133, 0, 136);
      font-weight: 500;
      font-size: 20px;
      outline: none;
      border:none;
      border-radius: 5px;
      padding:7px;
      transition: all 0.3s ease;
      opacity:0.6;
  }
  .pending span{
    font-weight: 400;
  }
  .pending{
    margin-top: 20px;
    width: 100% ;
    display: flex;
    justify-content: space-between;

  }

  .submit-new-task:hover, .todolist span:hover ,  .pending button:hover {
    transform: scale(1.1);
    opacity: 1;
  }
</style>
