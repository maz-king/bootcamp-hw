from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return (
        f"My text would go here<br/>"
        f"IF I HAD ANY<br/>"
    )