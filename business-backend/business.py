from flask import Flask, request, jsonify

app = Flask(__name__)

# Busineses explore page
class Business():
    def __init__(self, name: str, location: str, phone: str = None, website: str = None):
        self.name = name
        self.contact = {"Phone":phone, "Website":website, "location":location}
template1 = Business("Smith Burger CO.", "415 Constega Drive Waterloo ", "123-456-7890", "SmithBurg.com")
template2 = Business("Jones Bakery", "123 Baker Street, Toronto", "987-654-3210", "JonesBakery.com")
template3 = Business("Tech Innovators Inc.", "1000 Innovation Way, Ottawa", "555-123-4567", "TechInnovators.com")
template4 = Business("Green Grocers", "789 Market Lane, Vancouver", "444-555-6666", "GreenGrocers.com")
template5 = Business("Blue Ocean Travel", "456 Ocean Drive, Halifax", "333-222-1111", "BlueOceanTravel.com")

businesses = {
    "Laurelwood":[template1, template2, template3, template4, template5],
    "Erbsville":[],
    "Maple Hills":[]
    }

@app.route("/explore/<community>", methods=["GET"])
def explore(community):
    return jsonify({"Businesses": [biz.__dict__ for biz in businesses[community]]})

# Creating new business
@app.route("/sign-in/business")
def newbiz ():
    data = request.json
    community = data["community"]
    name = data["name"]
    location = data["address"]
    phone = data["phone"]
    website = data["website"]
    biz = Business(name, location, phone, website)
    businesses[community].append(biz)
    return jsonify({"message": "Business added successfully"}), 201



if __name__ == "__main__":
    app.run(debug=True)