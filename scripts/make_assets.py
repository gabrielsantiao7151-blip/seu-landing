"""Recorta el emblema al aro plateado y arma las piezas de Play Store."""

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
SRC = Path(r"c:\Users\gabri\OneDrive\Escritorio\SEU\BACKEND\docs\brand\seu-logo.jpg")
GREEN = (20, 61, 46, 255)  # #143D2E
HERO = (14, 42, 32, 255)  # #0E2A20
CENTER = (512, 512)
RADIUS = 470


def circular_crop(image: Image.Image) -> Image.Image:
    side = RADIUS * 2
    left = CENTER[0] - RADIUS
    top = CENTER[1] - RADIUS
    crop = image.crop((left, top, left + side, top + side)).convert("RGBA")
    scale = 4
    mask = Image.new("L", (side * scale, side * scale), 0)
    ImageDraw.Draw(mask).ellipse((1, 1, side * scale - 2, side * scale - 2), fill=255)
    crop.putalpha(mask.resize((side, side), Image.Resampling.LANCZOS))
    return crop


def paste_center(canvas: Image.Image, logo: Image.Image, diameter: int) -> None:
    resized = logo.resize((diameter, diameter), Image.Resampling.LANCZOS)
    x = (canvas.width - diameter) // 2
    y = (canvas.height - diameter) // 2
    canvas.paste(resized, (x, y), resized)


def main() -> None:
    source = Image.open(SRC).convert("RGBA")
    logo = circular_crop(source)
    web = logo.resize((640, 640), Image.Resampling.LANCZOS)

    brand = ROOT / "docs" / "brand"
    img = ROOT / "img"
    play = ROOT / "play"
    for folder in (brand, img, play):
        folder.mkdir(parents=True, exist_ok=True)

    source.convert("RGB").save(brand / "seu-logo.jpg", quality=92, optimize=True)
    web.save(img / "logo.png", optimize=True)

    icon = Image.new("RGBA", (512, 512), GREEN)
    paste_center(icon, logo, 480)
    icon.convert("RGB").save(play / "icon-512.png", optimize=True)

    feature = Image.new("RGBA", (1024, 500), HERO)
    paste_center(feature, logo, 460)
    feature.convert("RGB").save(play / "feature-1024x500.png", optimize=True)
    print("assets ok", web.size)


if __name__ == "__main__":
    main()
