#!/usr/bin/python3
""" a python script that fetches https://alx-intranet.hbtn.io/status
using ``urllib`` module
"""
from urllib.request import urlopen

if __name__ == "__main__":
    with urlopen('https://alx-intranet.hbtn.io/status') as response:
        res = response.read()
        print("Body response:")
        print("    - type: {}".format(type(res)))
        print("    - content: {}".format(res))
        print("    - utf8 content: {}".format(res.decode('utf-8')))
