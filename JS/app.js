const todoList = [
    {
        todo: 'clone repo for starter code',
        status: 'complete'
    },
    {
        todo: 'set-url to new origin repo',
        status: 'complete'
    },
    {
        todo: 'add js and test',
        status: 'started'
    },
    {
        todo: 'do well in 1620',
        status: 'started'
    }
];

const completedTodos = [];

for (const todo of todoList) {
    if (todo.status == 'complete') {
        completedTodos.push(todo)
    }
}

for (const todoObj of completedTodos) {
    ({ todo } = todoObj)
    console.log(todo)
}