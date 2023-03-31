#!/usr/bin/python3
"""a Python script that fetches https://alx-intranet.hbtn.io/status
"""
import requests

if __name__ == "__main__":
    r = requests.get('https://alx-intranet.hbtn.io/status')
    print("Body response:")
    print("    - type:", type(r.text))
    print("    - content:", r.text)
