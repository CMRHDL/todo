angular.module('app').component('doneTodo', {
  template: `
    <ul class="list-unstyled" id="todo">
      <h1>Done</h1>
      <ul>d</ul>
    </ul>
  `,
  bindings: {
    user: '<'
  }
});