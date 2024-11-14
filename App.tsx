import { useEffect, useState } from 'react'
import './App.css'

export const mockApi = [
  {
  id: "1",
  date: new Date("2020-05-12T23:50:21.817Z"),
  amount: "100.00",
  description: "First Payment"
 },
 {
  id: "2",
  date: new Date("2021-05-12T23:50:21.817Z"),
  amount: "100.00",
  description: "2 Payment"
 },
 {
  id: "3",
  date: new Date("2022-05-12T23:50:21.817Z"),
  amount: "100.00",
  description: "3 Payment"
 },
 {
  id: "4",
  date: new Date("2023-05-12T23:50:21.817Z"),
  amount: "100.00",
  description: "4 Payment"
 },
]

function App() {
  const [transactions, setTransactions] = useState([])
  const [error, setError] = useState(null)

  const getTransactionsData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockApi);
      }, 300);
    });
  }

  const getApiData = async () => {
    try{
      const res = await getTransactionsData()
      setTransactions(res)
    } catch(e) {
      console.log(e)
      setError("There was an error")
    }
  }

  useEffect(()=>{
    getApiData()
  },[])

  const hangleDateFilterChange = (e) =>{
    console.log(e)
  }

  return error ? (<>{error}</>) : (
    <>
    <table>
    <thead>
    <tr>
      <th scope="col">TranasctionId</th>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    {transactions.map((transaction) =>{
    return <tr key={transaction.id}>
     <th scope="row">{transaction?.id}</th>
     <td>{transaction?.date?.toDateString()}</td>
     <td>{transaction?.description}</td>
     <td>{transaction?.amount}</td>
    </tr>
    })}

  </tbody>
    </table>
    </>
  )
}

export default App
