from flask import Flask, jsonify
import json
import random
blog = Flask(__name__)

try:
    with open('src/json/request.json') as f:
        request_data = json.load(f)

except FileNotFoundError:
    print("Error: request.json not found.")
    request_data = {}

except json.JSONDecodeError:
    print("Error: request.json is not valid JSON.")
    request_data = {}

try:
    with open('src/json/blog_info.json', 'r') as f:
        write_data = json.load(f)
    write_data.append(request_data[0])

    with open('src/json/blog_info.json', 'w') as f:
        json.dump(write_data, f, indent=4)

except FileNotFoundError:
    print("Error: blog_info.json not found.")

    write_data = {}

except json.JSONDecodeError:
    print("Error: blog_info.json is not valid JSON.")
    write_data = {}

@blog.route("/blogs")
def blogs():
    random.shuffle(write_data)
    return jsonify(write_data)

if __name__ == "__main__":
    blog.run(debug=True)
