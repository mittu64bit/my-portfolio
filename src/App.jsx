import React from 'react'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-sans">
      
      {/* メインカード */}
      <main className="max-w-xl w-full bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8">
        
        {/* ヘッダー領域 */}
        <section className="text-center space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-2">
            Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-300">
            みっつー
          </h1>
          <p className="text-slate-400 font-medium text-sm sm:text-base">
            Software Engineer / Project Manager (PMP)
          </p>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* About領域 */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold text-indigo-400 tracking-widest uppercase">
            About Me
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
            コンシューマーゲーム機、モバイルコンパニオンアプリ、オンラインゲームバックエンドなどの開発に従事。
            2005年よりPMP資格を維持・更新中。
          </p>
        </section>

        {/* Skills領域 */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold text-indigo-400 tracking-widest uppercase">
            Skills & Tech
          </h2>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'C / C++', 'Python', 'Go', 'AWS / GCP', 
              'Cloud Infrastructure', 'Project Management (PMP)', 'Unity Game Dev'
            ].map((skill) => (
              <span 
                key={skill} 
                className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

      </main>

      {/* 画面下の小さな著作権表示 */}
      <footer className="mt-8 text-center text-slate-600 text-xs">
        © 2026 Mittsu. Built with React & Tailwind CSS.
      </footer>
    </div>
  )
}
