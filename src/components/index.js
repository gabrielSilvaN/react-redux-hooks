import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseList() {

   const courses = useSelector(state => state.data);
   const dispatch = useDispatch();

   function addCourse() {
      dispatch({type: 'ADD_COURSE', title: 'NodeJS'})
   }

   return (

      <>

         <ul>
            {courses.map(course => (
               <li key={course}>{course}</li>
            ))}
         </ul>

         <button onClick={addCourse}>Adicionar Curso</button>

      </>

   );
}