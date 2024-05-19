from flask import Flask, request, jsonify
import json

search = Flask(__name__)

with open("src/json/blog_info.json", 'r') as f:
    blog_data = json.load(f)

with open("src/json/business_info.json", 'r') as f:
    biz_data = json.load(f)

blog_data += biz_data

@search.route("/search", methods=['GET'])
def searchBar():
    print("hello")
    keyword = request.args.get('q').lower()
    
    searchList = []
    for person in blog_data:
        for value in person.values():
            if keyword in str(value).lower():
                searchList.append(person)
                break
    return jsonify({"list":searchList})

if __name__ == "__main__":
    search.run(debug=True)
