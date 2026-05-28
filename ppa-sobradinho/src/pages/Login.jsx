import { useState } from "react"
const USERS = [
  { id: 1, nome: "Prefeito", email: "prefeito@sobradinho.ba.gov.br", senha: "1234", perfil: "prefeito", secretaria: null },
  { id: 2, nome: "Planejamento", email: "planejamento@sobradinho.ba.gov.br", senha: "1234", perfil: "planejamento", secretaria: null },
  { id: 3, nome: "Educacao", email: "educacao@sobradinho.ba.gov.br", senha: "1234", perfil: "secretario", secretaria: "Educacao" },
]
export default function Login({ onLogin }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  function handleLogin(e) {
    e.preventDefault()
    const user = USERS.find(u => u.email === email && u.senha === senha)
    if (user) onLogin(user)
    else setErro("Email ou senha incorretos.")
  }
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0f1e" }}>
      <div style={{ background: "#111827", border: "1px solid #1e2d45", borderRadius: "16px", padding: "32px", width: "360px" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div style={{ fontSize: "40px" }}>🏛️</div>
          <h1 style={{ color: "#e2e8f0", marginTop: "8px", fontSize: "22px" }}>Monitor PPA</h1>
          <p style={{ color: "#94a3b8", fontSize: "13px" }}>Sobradinho - BA</p>
        </div>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "12px" }}>
            <label style={{ color: "#94a3b8", fontSize: "12px", display: "block", marginBottom: "4px" }}>EMAIL</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#1a2235", border: "1px solid #1e2d45", color: "#e2e8f0", fontSize: "14px" }} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ color: "#94a3b8", fontSize: "12px", display: "block", marginBottom: "4px" }}>SENHA</label>
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required
              style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#1a2235", border: "1px solid #1e2d45", color: "#e2e8f0", fontSize: "14px" }} />
          </div>
          {erro && <p style={{ color: "#ef4444", fontSize: "13px", marginBottom: "12px" }}>{erro}</p>}
          <button type="submit" style={{ width: "100%", padding: "12px", borderRadius: "8px", background: "linear-gradient(135deg, #00d4aa, #3b82f6)", border: "none", color: "#fff", fontWeight: "600", cursor: "pointer", fontSize: "14px" }}>
            Entrar
          </button>
        </form>
        <div style={{ marginTop: "16px", borderTop: "1px solid #1e2d45", paddingTop: "12px" }}>
          <p style={{ color: "#4a5568", fontSize: "11px", marginBottom: "6px" }}>ACESSO RAPIDO</p>
          {USERS.map(u => (
            <button key={u.id} onClick={() => { setEmail(u.email); setSenha("1234") }}
              style={{ display: "block", background: "none", border: "none", color: "#3b82f6", fontSize: "12px", cursor: "pointer", padding: "2px 0" }}>
              {u.nome}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
