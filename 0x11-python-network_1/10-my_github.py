#!/usr/bin/python3
"""a Python script that takes your GitHub credentials (username and password)
and uses the GitHub API to display your id
"""
import requests
from requests.auth import HTTPBasicAuth
from sys import argv

if __name__ == "__main__":
    basic_credential = HTTPBasicAuth(argv[1], argv[2])
    req = requests.get(
        'https://api.github.com/users/{}'.format(argv[1]),
        auth=basic_credential
    )
    print(req.json().get('id'))
    # you can also use
    # req = requests.get(
    #    'https://api.github.com/users/{}'.format(argv[1]),
    #     auth=(argv[1], argv[2])
    # )
