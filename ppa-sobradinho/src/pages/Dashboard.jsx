export default function Dashboard({ user }) {
  const secretarias = [
    { nome: "Educacao", acoes: 24, concluidas: 8, andamento: 12, atrasadas: 4, fisica: 52, orcam: 48 },
    { nome: "Saude", acoes: 20, concluidas: 6, andamento: 11, atrasadas: 3, fisica: 47, orcam: 44 },
    { nome: "Infraestrutura", acoes: 18, concluidas: 5, andamento: 9, atrasadas: 4, fisica: 38, orcam: 35 },
    { nome: "Assistencia Social", acoes: 15, concluidas: 7, andamento: 6, atrasadas: 2, fisica: 61, orcam: 58 },
    { nome: "Agricultura", acoes: 14, concluidas: 4, andamento: 8, atrasadas: 2, fisica: 43, orcam: 40 },
    { nome: "Agua e Saneamento", acoes: 10, concluidas: 4, andamento: 5, atrasadas: 1, fisica: 55, orcam: 50 },
  ]
  const total = secretarias.reduce((s, x) => s + x.acoes, 0)
  const concluidas = secretarias.reduce((s, x) => s + x.concluidas, 0)
  const atrasadas = secretarias.reduce((s, x) => s + x.atrasadas, 0)
  const andamento = secretarias.reduce((s, x) => s + x.andamento, 0)

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#e2e8f0" }}>Painel Executivo</h1>
        <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "4px" }}>PPA 2026-2029 - Sobradinho BA</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "32px" }}>
        {[
          { label: "TOTAL DE ACOES", value: total, color: "#e2e8f0" },
          { label: "CONCLUIDAS", value: concluidas, color: "#00d4aa" },
          { label: "EM ANDAMENTO", value: andamento, color: "#3b82f6" },
          { label: "ATRASADAS", value: atrasadas, color: "#ef4444" },
        ].map(k => (
          <div key={k.label} style={{ background: "#111827", border: "1px solid #1e2d45", borderRadius: "12px", padding: "20px" }}>
            <p style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "600", marginBottom: "8px" }}>{k.label}</p>
            <p style={{ fontSize: "36px", fontWeight: "700", color: k.color, lineHeight: 1 }}>{k.value}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {secretarias.map(s => (
          <div key={s.nome} style={{ background: "#111827", border: "1px solid #1e2d45", borderRadius: "12px", padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <div>
                <p style={{ fontWeight: "600", color: "#e2e8f0" }}>{s.nome}</p>
                <p style={{ fontSize: "12px", color: "#4a5568", marginTop: "2px" }}>{s.acoes} acoes - {s.concluidas} concluidas - {s.atrasadas} atrasadas</p>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <span style={{ background: "#00d4aa15", color: "#00d4aa", padding: "4px 10px", borderRadius: "99px", fontSize: "12px", fontWeight: "600" }}>Fisica {s.fisica}%</span>
                <span style={{ background: "#3b82f615", color: "#3b82f6", padding: "4px 10px", borderRadius: "99px", fontSize: "12px", fontWeight: "600" }}>Orcam {s.orcam}%</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "11px", color: "#4a5568", width: "45px" }}>Fisica</span>
                <div style={{ flex: 1, background: "#1a2235", borderRadius: "99px", height: "6px" }}>
                  <div style={{ width: s.fisica + "%", background: "#00d4aa", height: "6px", borderRadius: "99px" }} />
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "11px", color: "#4a5568", width: "45px" }}>Orcam</span>
                <div style={{ flex: 1, background: "#1a2235", borderRadius: "99px", height: "6px" }}>
                  <div style={{ width: s.orcam + "%", background: "#3b82f6", height: "6px", borderRadius: "99px" }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}