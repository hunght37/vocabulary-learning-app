import React from 'react'
import Head from 'next/head'

const Progress: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Progress | Vocabulary Learning App</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Progress</h1>
      <p>Track your learning journey and get insights.</p>
      {/* Add ProgressChart component here */}
    </div>
  )
}

export default Progress