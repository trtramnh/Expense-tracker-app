import React from 'react'
import CreateBudget from './CreateBudget'

function  BudgetList() {
  return (
    <div className='mt-7
    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    gap-7 grid'>
      <CreateBudget/>
    </div>
  )
}

export default BudgetList
