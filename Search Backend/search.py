from flask import Flask, jsonify
import json
import random
search = Flask(__name__)


with open("src/json/request.json", 'r') as f:
    request_data = json.load(f)

with open("src/json/blog_info.json", 'r') as f:
    blog_data = json.load(f)

keyword = str(request_data[0]['search']).lower()


@search.route("/search")
def searchBar():
    searchList = []
    for person in blog_data:
        for value in person:
            if keyword in str(person[value]).lower():
                searchList.append(person)
                break
            else:
                print(keyword, str(value).lower())
    return (searchList)


if __name__ == "__main__":
    search.run(debug=True)
