from flask import Blueprint, render_template, request, jsonify
from app.models.note import Note
from app import db

notes_bp = Blueprint("notes", __name__)

@notes_bp.route("/")
def home():

    notes = Note.query.all()

    return render_template(
        "index.html",
        notes=notes
    )

@notes_bp.route("/add", methods=["POST"])
def add_note():

    data = request.get_json()

    new_note = Note(
        content=data["content"]
    )

    db.session.add(new_note)
    db.session.commit()

    return jsonify({
        "message": "Note added"
    })

@notes_bp.route("/delete/<int:id>", methods=["POST"])
def delete_note(id):

    note = Note.query.get(id)

    if note:
        db.session.delete(note)
        db.session.commit()

    return jsonify({
        "message": "Note deleted"
    })