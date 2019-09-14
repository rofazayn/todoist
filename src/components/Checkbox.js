import React from 'react';
import { firebase } from '../firebase/firebase';

const Checkbox = ({ id }) => {
  // Create a function that archives a specific task
  const archiveTask = () => {
    // Reference that task
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
        // Update archived property to true
        archived: true
      });
  };
  return (
    <div
      className='checkbox-holder'
      data-testid='checkbox-action'
      onClick={() => archiveTask()}
    >
      <span className='checkbox'></span>
    </div>
  );
};

export default Checkbox;
