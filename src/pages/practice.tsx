import React from 'react'
import Head from 'next/head'

const Practice: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Practice | Vocabulary Learning App</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Practice</h1>
      <p>Test your knowledge with flashcards and quizzes.</p>
      {/* Add Flashcard component here */}
      {/* Add Quiz component here */}
    </div>
  )
}

export default Practice