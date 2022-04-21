import os

all_files = os.listdir("./")

for file in all_files:
    a = file.split(".")
    if a[-1] == "png" or a[-1] == "py":
        continue
    b = file.split(".")
    c = ("-").join(b)
    d = c + ".png"
    os.rename(file, d)
