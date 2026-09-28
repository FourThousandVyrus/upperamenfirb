import os
try:
    import pypdf
except ImportError:
    os.system("pip install pypdf")
    import pypdf

reader = pypdf.PdfReader("36th AGM.pdf")
print(f"Total Pages: {len(reader.pages)}")

# Print text of first 10 pages to see structure
for i in range(min(15, len(reader.pages))):
    print(f"\n--- PAGE {i+1} ---")
    text = reader.pages[i].extract_text()
    if text:
        print(text[:1500])
    else:
        print("[No text found / Image page]")
