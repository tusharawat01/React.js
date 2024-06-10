//using useState Hook
// As the components grow in complexity, it can get harder to see at a glance all the different ways in which a component’s state gets updated. For example, the  component below holds an array of tasks in state and uses three different event handlers to add, remove, and edit tasks

import { useState } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

// Each of its event handlers calls setTasks in order to update the state. As this component grows, so does the amount of state logic sprinkled throughout it. To reduce this complexity and keep all your logic in one easy-to-access place, you can move that state logic into a single function outside your component, called a “reducer”.

// Reducers are a different way to handle state. You can migrate from useState to useReducer in three steps:

// Step 1: Move from setting state to dispatching actions 

// setting state
function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }
  
  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }
  
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

//dispatch

function handleAddTask(text) {
    dispatch(
        // "action" object: The object you pass to dispatch is called an “action”
        {
      type: 'added',
      id: nextId++,
      text: text,
    });
  }
  
  function handleChangeTask(task) {
    dispatch(
        // "action" object: The object you pass to dispatch is called an “action”
        {
      type: 'changed',
      task: task,
    });
  }
  
  function handleDeleteTask(taskId) {
    dispatch(
        // "action" object: The object you pass to dispatch is called an “action”
        {
      type: 'deleted',
      id: taskId,
    });
  }

  //it is common to give it a string type that describes what happened, and pass any additional information in other fields. The type is specific to a component, so in this example either 'added' or 'added_task' would be fine. 

//   Step 2: Write a reducer function

// function yourReducer(state, action) {
//     // return next state for React to set  (Syntax for reducer function )
//   }

// Declare the current state (tasks) as the first argument.
// Declare the action object as the second argument.
// Return the next state from the reducer (which React will set the state to)

function tasksReducer(tasks, action) {
    if (action.type === 'added') {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    } else if (action.type === 'changed') {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    } else if (action.type === 'deleted') {
      return tasks.filter((t) => t.id !== action.id);
    } else {
      throw Error('Unknown action: ' + action.type);
    }
  }


//   Step 3: Use the reducer from your component 

import { useReducer } from 'react';

// then replace useState

// import { useReducer } from 'react';
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
//taskReducer is a reducer function which we created in 2nd step and initialTasks is default value

// The useReducer Hook is similar to useState—you must pass it an initial state and it returns a stateful value and a way to set state (in this case, the dispatch function). But it’s a little different.

// The useReducer Hook takes two arguments:

// A reducer function
// An initial state
// And it returns:

// A stateful value
// A dispatch function (to “dispatch” user actions to the reducer)



//FINAL CODE OF UseReducer

import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];
