from flask import Flask, request, jsonify

app = Flask(__name__)

# Busineses explore page
class Business():
    def __init__(self, name: str, location: str, phone: str = None, website: str = None):
        self.name = name
        self.contact = {"Phone":phone, "Website":website, "location":location}

businesses = {"Laurelwood":[],"Erbsville":[], "Maple Hills":[]}

@app.route("/explore/<community>", methods=["GET"])
def explore(community):
    return jsonify({"Businesses": [biz.__dict__ for biz in businesses[community]]})

# Creating new business
@app.route("/sign-in/business")
def newbiz ():
    data = request.json
    community = data.get("community")
    name = data.get("name")
    location = data.get("location")
    phone = data.get("phone")
    website = data.get("website")
    biz = Business(name, location, phone, website)
    businesses[community].append(biz)
    return jsonify({"message": "Business added successfully"}), 201



if __name__ == "__main__":
    app.run(debug=True)