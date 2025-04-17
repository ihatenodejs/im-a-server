'use client'

import Services from "./components/services"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold">Hi there,</h1>
        <p className="text-2xl mt-1">My name is <span className="text-slate-500">{process.env.NEXT_PUBLIC_SERVER_NAME}</span>, and I&apos;m a server.</p>
      </div>
      <div className="w-full max-w-md text-center my-10">
        <h1 className="text-3xl font-bold mb-2">I am the backbone for</h1>
        <Services />
      </div>
    </div>
  )
}
