"use client"
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <div className="landing h-screen z-10">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-sm pt-28 px-2 font-bold text-blue-400">
            { session ? "Welcome back" : "Log in to continue"}
          </div>
          <div className="p-2 mt-2">
            {session ?
              <>
                <h1 className="text-3xl font-bold">
                  {session.user.name}
                </h1>
                <h1 className="text-3xl font-bold mt-2">
                  Start building with a free account.
                </h1>
              </>
              :
              <>
                <h1 className="text-3xl font-bold">
                  Hey Friend!
                </h1>
                <h1 className="text-3xl font-bold">
                  Login to see what happen?
                </h1>
              </>}
              <p className="mt-2 max-w-[500px] text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quaerat facere voluptatem, tenetur nulla qui, delectus, consectetur est ullam eligendi eum!</p>
          </div>
          <div className="mt-2 p-2 flex items-center text-sm gap-6">
            <Link class="inline-flex items-center space-x-1 justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" target="_blank" href="https://github.com/kimkorngmao/next-auth-app">
              <span>Source code</span>
              <span class="hidden text-slate-400 sm:inline">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </Link>
            <Link class="inline-flex items-center space-x-1 justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15" target="_blank" href="https://www.kimkorngmao.com/">
              <span>My Portfolio</span>
              <span class="hidden text-slate-400 sm:inline">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
