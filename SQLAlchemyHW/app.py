import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


engine = create_engine("Resources/hawaii.sqlite")


Base = automap_base()

Base.prepare(engine, reflect=True)


Measurement = Base.classes.measurement
Station = Base.classes.station


from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return (
        f"Hi there!<br/>"
        f"Below are the available routes<br/><br/>"
        f"/api/v1.0/precipation<br/>"
        f"/api/v1.0/stations<br/>"
    )

@app.route("/api/v1.0/precipation")
def precipitation():

    session = Session(engine)

    results = session.query(Measurement.date, Measurement.prcp).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    prcp = []
    for date, prcp in results:
        prcp_dict = {}
        prcp_dict["date"] = date
        prcp_dict["prcp"] = precipitation
        prcp.append(prcp_dict)

    return jsonify(prcp)



@app.route("/api/v1.0/stations")
def stations():

    session = Session(engine)

    results = session.query(Station.station).all()

    session.close()

    # Convert list of tuples into normal list
    stationlist = list(np.ravel(results))

    return jsonify(stationlist)





