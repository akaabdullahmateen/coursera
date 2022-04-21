import json

with open("./courses.json", "r") as infile:
    data = json.load(infile)
    outdata = []
    mcn = []

    for item in data:
        if item["mcn"] not in mcn:
            mcn.append(item["mcn"])
            outdata.append(item)
    
with open("out.json", "w") as outfile:
    json.dump(outdata, outfile, indent=4)