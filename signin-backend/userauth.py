from flask import Flask, request, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
#Sign in page
@app.route("/sign-in", methods = ['POST'])
def signin():
    return "Yo"
    with open('neighbour-net/signin-backend/users.json', 'r') as file:
        users = json.load(file)

    data = request.json
    if {data.get("email"): data.get("password")} in users:
        print("signed in")
        return "Valid"
    
    
    return "Invalid"



@app.route("/sign-up", methods = ['POST'])
def signup():
    with open('neighbour-net/signin-backend/users.json', 'r') as file:
        users = json.load(file)

    data = request.json

    if any(data["email"] in users[x] for x in range(len(users))):
        return "Email already in use"
    
    new_user = {data["email"]: data["password"]}
    users.append(new_user)
    with open('neighbour-net/signin-backend/users.json', 'w') as file:
        json.dump(users, file, indent=4)
    print("New User Made")
    return "User created", 201

if __name__ == "__main__":
    app.run(debug=True)


if __name__ == "__main__":
    app.run(debug=True)
