import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const params = useParams()
       
        
  return (
    <div>
      <h2>{params.id} CourseDetails page</h2>
    </div>
  )
}

export default CourseDetail
