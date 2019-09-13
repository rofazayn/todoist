import { useState, useEffect } from 'react'
import firebase from '../firebase/firebase'
import moment from 'moment'
import collatedTasksExist from '../helpers'

export const useTasks = selectedProject => {
  // Create tasks and archived tasks hook
  const [tasks, setTasks] = useState([])
  const [archivedTasks, setArchivedTasks] = useState([])

  // Using the effect hook
  useEffect(() => {
    // Subscribe to firebase and get tasks collection of the current user
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'dQ0nq5disYbhb33v6JkJ')

    unsubscribe =
      // Check if the selectedProject is passed and does not exist in the collatedTasks
      selectedProject && !collatedTasksExist(selectedProject)
        ? // Get the project with the passed in id
          (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : // If the selected project id is TODAY
        selectedProject === 'TODAY'
        ? // Then get tasks from today
          (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YY')
          ))
        : // Else if selected project id is INBOX
        selectedProject === 'INBOX' || selectedProject === 0
        ? // Get tasks where date is empty
          (unsubscribe = unsubscribe.where('date', '==', ''))
        : // Else get all tasks
          unsubscribe

    // Get a snapshot based on the condition above
    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      // Fetch tasks and map them according to their id
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data()
      }))
      // Then update the tasks state according to the selected prject using the hook
      setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
              task =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true
            )
          : // ELse just get them all which are not archived
            newTasks.filter(task => task.archived !== true)
      )
      // Update archivedTasks with the archived tasks using the hook
      setArchivedTasks(newTasks.filter(task => task.archived !== false))
    })

    // Once selectedProject changes re run all the crap up there (Clean up)
    return () => unsubscribe()
  }, [selectedProject])

  return { tasks, archivedTasks }
}
