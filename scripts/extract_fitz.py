import fitz

doc = fitz.open("36th AGM.pdf")
print("Total pages in doc:", len(doc))

for i in range(min(10, len(doc))):
    page = doc[i]
    text = page.get_text()
    print(f"\n--- PAGE {i+1} ---")
    if text.strip():
        print(text[:1000])
    else:
        print("[No text found by fitz]")
