"use client";

import { FormEvent, useState } from "react";

type FormState = {
  nombreApoderado: string;
  correo: string;
  telefono: string;
  nombreEstudiante: string;
  cursoInteres: string;
  mensaje: string;
};

const initialState: FormState = {
  nombreApoderado: "",
  correo: "",
  telefono: "",
  nombreEstudiante: "",
  cursoInteres: "",
  mensaje: ""
};

export function AdmissionForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/admision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      setStatus("success");
      setFeedback("Solicitud enviada correctamente. Te contactaremos pronto.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setFeedback("Hubo un problema al enviar. Intenta nuevamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card form-grid" style={{ padding: "1.2rem" }}>
      <label className="form-field">
        Nombre del apoderado
        <input
          required
          value={form.nombreApoderado}
          onChange={(e) => setForm((prev) => ({ ...prev, nombreApoderado: e.target.value }))}
          placeholder="Ej: María González"
        />
      </label>

      <label className="form-field">
        Correo electrónico
        <input
          required
          type="email"
          value={form.correo}
          onChange={(e) => setForm((prev) => ({ ...prev, correo: e.target.value }))}
          placeholder="ejemplo@correo.cl"
        />
      </label>

      <label className="form-field">
        Teléfono de contacto
        <input
          required
          value={form.telefono}
          onChange={(e) => setForm((prev) => ({ ...prev, telefono: e.target.value }))}
          placeholder="+56 9 1234 5678"
        />
      </label>

      <label className="form-field">
        Nombre del estudiante
        <input
          required
          value={form.nombreEstudiante}
          onChange={(e) => setForm((prev) => ({ ...prev, nombreEstudiante: e.target.value }))}
          placeholder="Nombre completo"
        />
      </label>

      <label className="form-field">
        Curso de interés
        <select
          required
          value={form.cursoInteres}
          onChange={(e) => setForm((prev) => ({ ...prev, cursoInteres: e.target.value }))}
        >
          <option value="">Selecciona una opción</option>
          <option>Pre Kinder</option>
          <option>Kinder</option>
          <option>Enseñanza Básica (1° a 8°)</option>
          <option>Enseñanza Media (1° a 4°)</option>
        </select>
      </label>

      <label className="form-field form-span-2">
        Mensaje
        <textarea
          rows={4}
          value={form.mensaje}
          onChange={(e) => setForm((prev) => ({ ...prev, mensaje: e.target.value }))}
          placeholder="Cuéntanos más sobre tu consulta."
        />
      </label>

      <div className="form-span-2" style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap" }}>
        <button type="submit" className="btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Enviar solicitud"}
        </button>
        {feedback ? (
          <p style={{ margin: 0, color: status === "success" ? "#166534" : "#b91c1c" }}>{feedback}</p>
        ) : null}
      </div>
    </form>
  );
}
