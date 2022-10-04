import type { NextPage } from 'next'
import Head from 'next/head'
import { programOne, programTwo } from '../data/programs'
import Program from '../components/Program'

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>Open Fit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-24">
        <section className="max-w-4xl mx-auto">
          <h1 className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Open Fit
          </h1>
          <div className="space-y-4 mt-4">
            <div className="h-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500" />
            <Program program={programOne} />
            <div className="h-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500" />
            <Program program={programTwo} />
            <div className="h-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            <div className="h-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500" />
          </div>
        </section>
      </main>

      <footer className=""></footer>
    </div>
  )
}

export default Home
