angular.module('app').component('todo', {
  template: `
    <add-todo></add-todo>
    <div></div>
    <process-todo></process-todo>
    <div></div>
    <done-todo></done-todo>
    <div></div>
    <abort-todo></abort-todo>
  `,
  bindings: {
    user: '<'
  }
});