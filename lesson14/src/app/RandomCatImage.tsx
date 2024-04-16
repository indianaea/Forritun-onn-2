import { ChangeEvent, useEffect, useState } from 'react'

type Expensives = {
  id: string
  name: string
  cost: number
}

const getExpensives = async (): Promise<Expensives[]> => {
  const res = await fetch('http://localhost:3001/api/expenses')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const response = await res.json()
  return response
}

const RandomExpensives = () => {
  const [expensives, setExpensives] = useState<Expensives>()

  const fetchExpensives = async () => {
    const fetchedExpensives = await getRandomExpensives()
    setExpensives(fetchedExpensives[0])
  }
  useEffect(() => {
    fetchExpensives()
  }, [])

  if (!expensives) {
    return <p>Loading...</p>
  }

  return (
    <div className='m-10'>
      <div className='mb-4'>
        <p>Hello</p>
      </div>
    </div>
  )
}

export default RandomExpensives
