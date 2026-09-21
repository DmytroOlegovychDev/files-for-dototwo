import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const tasks = [
    { id: "task-1", title: "buy to milk!", isDone: false },
    { id: "task-2", title: "go to work!", isDone: true },
    { id: "task-3", title: "reading books!", isDone: false },
  ];
  const deleteAllTasks = () => {
    console.log("delette all tasks");
  };
  const deleteTask = (taskId) => {
    console.log(`delette tasks in ${taskId}`);
  };
  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Task is ${taskId} ${isDone ? "Complete" : "Not Complete"}`);
  };
  const filterTasks = (query) => {
    console.log(`Search ${query}`);
  };

  const addTask = () => {
    console.log("Task Add!");
  };
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTasksCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};
export default Todo;
