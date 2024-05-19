from flask import Flask, request, jsonify

app = Flask(__name__)

# Buisneses explore page
class Buisness():
    def __init__(self, name: str, location: str, phone: str = None, website: str = None):
        self.name = name
        self.contact = {"Phone":phone, "Website":website, "location":location}

buisnesses = {"Laurelwood":[],"Erbsville":[], "Maple Hills":[]}

@app.route("/explore/<community>", methods=["GET"])
def explore(community):
    return jsonify({"Businesses": [biz.__dict__ for biz in buisnesses[community]]})


@app.route("/sign-in/buisness")
def newbiz ():
    data = request.json
    community = data.get("community")
    name = data.get("name")
    location = data.get("location")
    phone = data.get("phone")
    website = data.get("website")
    biz = Buisness(name, location, phone, website)
    buisnesses[community].append(biz)
    return jsonify({"message": "Business added successfully"}), 201



if __name__ == "__main__":
    app.run(debug=True)