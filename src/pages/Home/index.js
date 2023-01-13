import React, { useCallback, useEffect, useState } from 'react';
import './styles.scss';
import TasksList from 'src/pages/Home/components/TasksList/index';
import tasksData from 'src/data/tasks.json';
import Button from 'src/pages/Home/components/Button';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTasks(tasksData);
    },
    1000);
  }, []);

  const addTask = useCallback(() => {
    const newId = tasks.length + 1;
    setTasks([{
      id: newId,
      title: `Tache #${newId}`,
      description: null,
      priority: 5,
      state: 'done',
    }, ...tasks],
    );
  }, [tasks]);

  return (
    <div className="home-container">
      <nav className="home-nav">
        <h1 className="title-home">Home Page</h1>
      </nav>

      <main>
        <h2>TODO List</h2>
        <TasksList tasks={tasks} />
        <Button onClick={() => addTask()}>
          Ajouter une tâche
        </Button>
      </main>
    </div>
  );
}
export default Home;
