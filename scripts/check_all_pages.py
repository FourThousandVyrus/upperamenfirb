import pypdf

reader = pypdf.PdfReader("36th AGM.pdf")
pages_with_text = []

for i, page in enumerate(reader.pages):
    text = page.extract_text()
    if text and text.strip():
        pages_with_text.append(i + 1)

print(f"Total pages: {len(reader.pages)}")
print(f"Pages with text: {pages_with_text}")
