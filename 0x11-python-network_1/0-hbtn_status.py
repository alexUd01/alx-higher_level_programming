#!/usr/bin/python3
""" a python script that fetches https://alx-intranet.hbtn.io/status
using ``urllib`` module
"""
from urllib.request import urlopen

with urlopen('https://alx-intranet.hbtn.io/status') as response:
    res = response.read()

print("Body response:")
print("    - type:", type(res))
print("    - content:", res)
print("    - utf8 content:", res.decode('utf-8'))
