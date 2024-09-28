import React from 'react'
import Head from 'next/head'

const Dictionary: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Dictionary | Vocabulary Learning App</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Dictionary</h1>
      <p>Search for words and save them to your lists.</p>
      {/* Add SearchBar component here */}
      {/* Add WordCard component here */}
    </div>
  )
}

export default Dictionary