from flask import Flask
from flask_cors import CORS
from auth.auth import auth_bp
from businesses.businesses import business_bp
from reviews.reviews import reviews_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth_bp)
app.register_blueprint(business_bp)
app.register_blueprint(reviews_bp)

if __name__ == '__main__':
    app.run(debug=True)