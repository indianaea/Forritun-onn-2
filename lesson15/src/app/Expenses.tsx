import { useEffect, useState } from 'react'
import { Expense, api } from './api'

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>()

  const fetchExpenses = async () => {
    const fetchedExpenses = await api.getExpenses()
    setExpenses(fetchedExpenses)
  }
  useEffect(() => {
    fetchExpenses()
  }, [])

  if (!expenses) {
    return <p>Loading...</p>
  }

  const handleDelete = (id: number) => {
    api.deleteExpense(id)
  }

  return (
    <div className='m-10'>
      <div className='mb-4'>
        <p onClick={api.postExpenses}>Hello</p>
        <p onClick={() => handleDelete(1 /*add correct id */)}>
          Delete item of id 1
        </p>
        {expenses.map(expense => (
          <p key={expense.id}>
            {expense.name}: {expense.cost}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Expenses
