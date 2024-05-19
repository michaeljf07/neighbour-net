from flask import Flask, request, jsonify
import json

app = Flask(__name__)

#Sign in page
@app.route("/sign-in", methods = ['POST'])
def signin():
    with open('neighbour-net/signin-backend/users.json', 'r') as file:
        users = json.load(file)

    data = request.json
    if {data["email"]: data["password"]} in users:
        return True
    return False



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

if __name__ == "__main__":
    app.run(debug=True)



