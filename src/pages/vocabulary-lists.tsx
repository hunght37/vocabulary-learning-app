import React from 'react'
import Head from 'next/head'

const VocabularyLists: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Vocabulary Lists | Vocabulary Learning App</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Vocabulary Lists</h1>
      <p>Manage your personalized vocabulary lists.</p>
      {/* Add VocabularyList component here */}
    </div>
  )
}

export default VocabularyLists