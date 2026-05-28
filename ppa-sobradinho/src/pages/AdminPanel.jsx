export default function AdminPanel({ user }) {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#e2e8f0', marginBottom: '8px' }}>Painel Admin</h1>
      <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '32px' }}>Gestão do sistema · {user.nome}</p>
      <div style={{ background: '#111827', border: '1px solid #1e2d45', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
        <p style={{ fontSize: '40px', marginBottom: '12px' }}>⚙️</p>
        <p style={{ color: '#94a3b8', fontSize: '15px' }}>Área administrativa em construção.</p>
      </div>
    </div>
  )
}