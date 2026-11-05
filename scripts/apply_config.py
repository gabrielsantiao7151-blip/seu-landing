"""Sustituye los huecos legales en el HTML con site.config.json.

Los HTML conservan los corchetes ([RAZÓN SOCIAL], [NIT], …) hasta que este
script corre con datos reales. No inventa razón social ni NIT: si el JSON
sigue con corchetes, el sitio no cambia.
"""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    config = json.loads((ROOT / "site.config.json").read_text(encoding="utf-8"))
    pairs = {
        "[RAZÓN SOCIAL]": config["razonSocial"],
        "[NIT]": config["nit"],
        "[DIRECCIÓN]": config["direccion"],
        "[CIUDAD]": config["ciudad"],
        "[CORREO]": config["correo"],
        "[DOMINIO]": config["dominio"].rstrip("/"),
        "[FECHA]": config["fecha"],
    }
    changed = 0
    for path in ROOT.rglob("*.html"):
        if "scripts" in path.parts:
            continue
        original = path.read_text(encoding="utf-8")
        text = original
        for token, value in pairs.items():
            if token == value:
                continue
            text = text.replace(token, value)
        if text != original:
            path.write_text(text, encoding="utf-8")
            changed += 1
            print(path.relative_to(ROOT))
    print(f"archivos actualizados: {changed}")


if __name__ == "__main__":
    main()
