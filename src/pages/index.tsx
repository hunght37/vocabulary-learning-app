import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Vocabulary Learning App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <span className="text-blue-600">
            Vocabulary Learning
          </span>
        </h1>

        <p className="mt-3 text-2xl">
          Start expanding your vocabulary today!
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link href="/dictionary" className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Dictionary &rarr;</h3>
            <p className="mt-4 text-xl">
              Search for words and save them to your lists.
            </p>
          </Link>

          <Link href="/vocabulary-lists" className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Vocabulary Lists &rarr;</h3>
            <p className="mt-4 text-xl">
              Manage your personalized vocabulary lists.
            </p>
          </Link>

          <Link href="/practice" className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Practice &rarr;</h3>
            <p className="mt-4 text-xl">
              Test your knowledge with flashcards and quizzes.
            </p>
          </Link>

          <Link href="/progress" className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Progress &rarr;</h3>
            <p className="mt-4 text-xl">
              Track your learning journey and get insights.
            </p>
          </Link>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}