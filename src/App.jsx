import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className="parent">
      <Card user="ABC" age={18} des='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
      <Card user="Dhamo" age={18} des='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
      <Card user="AMIT" age={18} des='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
      <Card user="Divyesh" age={18} des='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
      <Card user="Ketan" age={18} des='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
    </div>
  )
}

export default App
