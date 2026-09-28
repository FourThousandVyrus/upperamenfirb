import sys
import subprocess

packages = ["pytesseract", "easyocr", "fitz", "pdfplumber", "pdf2image", "PIL"]
installed = []

for package in packages:
    try:
        __import__(package)
        installed.append(package)
    except ImportError:
        pass

print("Installed packages:", installed)

# Check if tesseract-ocr executable is in PATH
try:
    res = subprocess.run(["tesseract", "--version"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    print("Tesseract version:", res.stdout.strip())
except FileNotFoundError:
    print("Tesseract CLI is not in PATH")
