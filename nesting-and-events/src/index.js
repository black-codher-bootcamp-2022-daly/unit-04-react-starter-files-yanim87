import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom/client';
import TaskContainer from './components/TaskContainer';
import Task from './components/Task.js';

const taskList = [
  {id:"task1",title:"Buy Milk", isComplete:true},
  {id:"task2",title:"Read a book",isComplete:false},
  {id:"task3",title:"Early morning run",isComplete:false},
  {id:"task4",title:"Drink water",isComplete:false},
  {id:"task5",title:"Visit the puppy shelter",isComplete:true},
  {id:"task6",title:"Watch Bad Sisters",isComplete:false}
];


function App() {

  const [data, setData] = useState(taskList);
  
   return (
      <Fragment>
        <h1 key="heading">Task List</h1>
        <TaskContainer>
          <Task task1 title="Buy Milk" isComplete={false} />
          
          {/* Task: Nesting Components - Add you tasks here: */}
        </TaskContainer>
      </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

