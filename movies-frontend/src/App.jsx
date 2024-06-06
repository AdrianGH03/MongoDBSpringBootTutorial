import { useState } from 'react'
import { Movies } from './components/Movies'
import { Layout } from './views/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Movies />
      </Layout>
    </>
  )
}

export default App
