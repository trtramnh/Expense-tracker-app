import React from 'react'
import BudgetList from './_components/ProjectList'
function Budget() {
  return (
    <div className='p-10'>
        <h2 className='font-bold text-3xl'>My Projects</h2>
        <ProjectList/>
    </div>
  )
}

export default Budget
