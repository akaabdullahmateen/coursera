import requests
from bs4 import BeautifulSoup
import json

with open("./courses.json", "r") as infile:
    data = json.load(infile)
    for row in data:
        tag = row["mcn"]
        if "Spring" in row["sem"]:
            m = "s"
        else:
            m = "f"
        tag = tag + m + row["sem"][-2:]
        
        url = f"https://ocw.mit.edu/{row['href']}"
        r = requests.get(url)
        soup = BeautifulSoup(r.content, "html.parser")
        s = soup.find("div", class_="image")
        t = s.find("img")
        content = t["src"]

        with open(f"./images/{tag}", "wb") as file:
            file.write(requests.get(f"https://ocw.mit.edu/{content}").content)