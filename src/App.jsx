import React from 'react'

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>みっつー</h1>
      <p style={{ color: '#666', fontSize: '1.2rem' }}>
        ソフトウェアエンジニア / プロジェクトマネージャー（PMP）
      </p>

      <hr style={{ margin: '2rem 0', borderColor: '#eee' }} />

      <section>
        <h2>About</h2>
        <p>
          コンシューマーゲーム機、モバイルコンパニオンアプリ、オンラインゲームバックエンドなどの開発に従事。
          2005年よりPMP資格を維持・更新中。
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Skills</h2>
        <ul>
          <li>C / C++ / Python / Go</li>
          <li>AWS / GCP / Cloud Infrastructure</li>
          <li>Project Management (PMP since 2005)</li>
          <li>Unity Game Development</li>
        </ul>
      </section>
    </div>
  )
}
