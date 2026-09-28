import fitz
import os

os.makedirs("rendered_pages", exist_ok=True)
doc = fitz.open("36th AGM.pdf")
print("Total pages:", len(doc))

# Render pages 1 to 15
for i in range(min(15, len(doc))):
    page = doc[i]
    pix = page.get_pixmap(dpi=150) # Render at 150 DPI for good readability
    out_path = f"rendered_pages/page_{i+1}.png"
    pix.save(out_path)
    print(f"Saved {out_path}")
