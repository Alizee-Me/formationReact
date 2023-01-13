import PropTypes from 'prop-types';
import Task from 'src/pages/Home/components/TasksList/Task';

function TasksList({ tasks }) {
  return (
    <ol>
      {
            tasks.map((task) => (
              <Task key={task.id} {...task} />
            ))
        }
    </ol>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
};

TasksList.defaultProps = {
  tasks: [],
};

export default TasksList;
