angular.module('app').component('addTodo', {
  template: `
    <div class="form-group">
      <h1>To-Do <small>List</small></h1>
      <form role="form">
        <input type="text" class="form-control" placeholder="Your Task" name="task">
      </form>
      <button type="button" class="btn btn btn-primary">Add</button>
    </div>
  `,
  bindings: {
    user: '<'
  }
});