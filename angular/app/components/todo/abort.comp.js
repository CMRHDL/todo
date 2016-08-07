angular.module('app').component('abortTodo', {
  template: `
    <ul class="list-unstyled" id="todo">
      <h1>Aborted</h1>
      <ul>d</ul>
    </ul>
  `,
  bindings: {
    user: '<'
  }
});