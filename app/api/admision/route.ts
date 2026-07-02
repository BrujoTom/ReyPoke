import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = (await request.json()) as Record<string, string>;

  const requiredFields = [
    "nombreApoderado",
    "correo",
    "telefono",
    "nombreEstudiante",
    "cursoInteres"
  ];

  const missing = requiredFields.find((field) => !data[field]?.trim());
  if (missing) {
    return NextResponse.json(
      { ok: false, message: `Falta el campo requerido: ${missing}` },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true });
}
