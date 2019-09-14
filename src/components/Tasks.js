import React from 'react';
import Checkbox from './Checkbox';
import { useTasks } from '../hooks';

const Tasks = () => {
  // We also going to need a project name so I am just gonna initiate it with an empty string for now
  // Using the custm hook we create earlier we get the tasks of a specific project
  const { tasks } = useTasks('1');
  // Let's try dumping it
  console.log(tasks);
  const projectName = '';
  return (
    <div className='tasks' data-testid='tasks'>
      <h2 data-testid='project-name'>Project name: {projectName}</h2>
      <ul className='tasks__list'>
        {tasks &&
          tasks.map(task => (
            <li key={task.id}>
              <Checkbox id={task.id} />
              <span>{task.task}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Tasks;
