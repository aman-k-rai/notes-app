from flask import Blueprint, request, jsonify

from app.services.note_service import NoteService

notes_bp = Blueprint("notes", __name__)


@notes_bp.route("/api/notes", methods=["GET"])
def get_notes():

    notes = NoteService.get_all_notes()

    return jsonify([
        {
            "id": note.id,
            "content": note.content
        }
        for note in notes
    ])


@notes_bp.route("/api/notes", methods=["POST"])
def add_note():

    data = request.get_json()

    note = NoteService.create_note(
        data["content"]
    )

    return jsonify({
        "id": note.id,
        "content": note.content
    }), 201


@notes_bp.route("/api/notes/<int:id>", methods=["PUT"])
def update_note(id):

    data = request.get_json()

    note = NoteService.update_note(
        id,
        data["content"]
    )

    if not note:

        return jsonify({
            "message": "Note not found"
        }), 404

    return jsonify({
        "id": note.id,
        "content": note.content
    })


@notes_bp.route("/api/notes/<int:id>", methods=["DELETE"])
def delete_note(id):

    NoteService.delete_note(id)

    return jsonify({
        "message": "Note deleted"
    })