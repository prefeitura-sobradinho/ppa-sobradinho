import { useState } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import SecretariaForm from './pages/SecretariaForm'
import AdminPanel from './pages/AdminPanel'

export default function App() {
  const [user, setUser] = useState(null)
  const [pagina, setPagina] = useState('dashboard')

  if (!user) return <Login onLogin={(u) => { setUser(u); setPagina('dashboard') }} />

  return (
    <div style={{ minHeight: '100vh', background: '#0a0f1e', fontFamily: 'Sora, sans-serif' }}>
      <nav style={{ background: '#111827', borderBottom: '1px solid #1e2d45', padding: '0 24px', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #00d4aa, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🏛️</div>
            <div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#e2e8f0', lineHeight: 1 }}>PPA Sobradinho</p>
              <p style={{ fontSize: '10px', color: '#64748b', lineHeight: 1, marginTop: '2px' }}>Monitoramento 2026–2029</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button onClick={() => setPagina('dashboard')} style={{ padding: '6px 14px', borderRadius: '7px', border: 'none', fontSize: '13px', cursor: 'pointer', fontFamily: 'Sora, sans-serif', background: pagina === 'dashboard' ? '#00d4aa22' : 'transparent', color: pagina === 'dashboard' ? '#00d4aa' : '#64748b' }}>📊 Dashboard</button>
            {(user.perfil === 'secretario' || user.perfil === 'planejamento') && <button onClick={() => setPagina('form')} style={{ padding: '6px 14px', borderRadius: '7px', border: 'none', fontSize: '13px', cursor: 'pointer', fontFamily: 'Sora, sans-serif', background: pagina === 'form' ? '#00d4aa22' : 'transparent', color: pagina === 'form' ? '#00d4aa' : '#64748b' }}>📋 Atualizar Ações</button>}
            {user.perfil === 'planejamento' && <button onClick={() => setPagina('admin')} style={{ padding: '6px 14px', borderRadius: '7px', border: 'none', fontSize: '13px', cursor: 'pointer', fontFamily: 'Sora, sans-serif', background: pagina === 'admin' ? '#00d4aa22' : 'transparent', color: pagina === 'admin' ? '#00d4aa' : '#64748b' }}>⚙️ Admin</button>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '13px', fontWeight: '600', color: '#e2e8f0', lineHeight: 1 }}>{user.nome}</p>
              <p style={{ fontSize: '11px', color: '#64748b', lineHeight: 1, marginTop: '2px' }}>{user.perfil}{user.secretaria ? ' · ' + user.secretaria : ''}</p>
            </div>
            <button onClick={() => setUser(null)} style={{ padding: '6px 14px', borderRadius: '7px', border: '1px solid #1e2d45', fontSize: '12px', cursor: 'pointer', fontFamily: 'Sora, sans-serif', background: 'transparent', color: '#64748b' }}>Sair</button>
          </div>
        </div>
      </nav>
      <main>
        {pagina === 'dashboard' && <Dashboard user={user} onNavegar={setPagina} />}
        {pagina === 'form' && <SecretariaForm user={user} />}
        {pagina === 'admin' && <AdminPanel user={user} />}
      </main>
    </div>
  )
}
