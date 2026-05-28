export default function SecretariaForm({ user }) {
  const acoes = [
    { id: 1, acao: "Reforma das escolas municipais", prazo: "2026-06-30", subarea: "Infraestrutura Escolar" },
    { id: 2, acao: "Aquisicao de material didatico", prazo: "2026-03-31", subarea: "Ensino Fundamental" },
    { id: 3, acao: "Contratacao de professores", prazo: "2026-02-28", subarea: "Recursos Humanos" },
  ]
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#e2e8f0" }}>Atualizar Acoes</h1>
        <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "4px" }}>{user.secretaria || user.nome}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {acoes.map(a => (
          <div key={a.id} style={{ background: "#111827", border: "1px solid #1e2d45", borderRadius: "12px", padding: "24px" }}>
            <p style={{ fontWeight: "600", color: "#e2e8f0", fontSize: "15px", marginBottom: "4px" }}>{a.acao}</p>
            <p style={{ fontSize: "12px", color: "#4a5568", marginBottom: "16px" }}>{a.subarea}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
              <div>
                <label style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "600", display: "block", marginBottom: "5px" }}>EXEC. FISICA (%)</label>
                <input type="number" min="0" max="100" defaultValue="0"
                  style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", background: "#1a2235", border: "1px solid #1e2d45", color: "#e2e8f0", fontSize: "14px" }} />
              </div>
              <div>
                <label style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "600", display: "block", marginBottom: "5px" }}>EXEC. ORCAM. (%)</label>
                <input type="number" min="0" max="100" defaultValue="0"
                  style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", background: "#1a2235", border: "1px solid #1e2d45", color: "#e2e8f0", fontSize: "14px" }} />
              </div>
              <div>
                <label style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "600", display: "block", marginBottom: "5px" }}>STATUS</label>
                <select style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", background: "#1a2235", border: "1px solid #1e2d45", color: "#e2e8f0", fontSize: "14px" }}>
                  <option>Nao Iniciado</option>
                  <option>Em Andamento</option>
                  <option>Concluido</option>
                  <option>Atrasado</option>
                </select>
              </div>
            </div>
            <div style={{ marginTop: "12px" }}>
              <label style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "600", display: "block", marginBottom: "5px" }}>OBSERVACOES</label>
              <textarea rows={2} style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", background: "#1a2235", border: "1px solid #1e2d45", color: "#e2e8f0", fontSize: "13px", resize: "vertical" }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
        <button style={{ padding: "12px 32px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg, #00d4aa, #3b82f6)", color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
          Salvar Atualizacao
        </button>
      </div>
    </div>
  )
}