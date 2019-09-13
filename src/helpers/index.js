import collatedTasks from '../constants'

export const CollatedTasksExist = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject)
