from flask import Flask
from flask import render_template
from flask import url_for

app = Flask(__name__)
wsgi_app = PrefixMiddleware(app.wsgi_app, voc=True)

@app.route("/")
def index():
    return render_template("index.html",css_link = url_for('static', filename='style.css'), js_link = url_for('static', filename= 'script.js'))
