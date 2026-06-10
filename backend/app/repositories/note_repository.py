from app.models.note import Note
from app import db


class NoteRepository:

    @staticmethod
    def get_all_notes():
        return Note.query.all()

    @staticmethod
    def create_note(content):

        note = Note(
            content=content
        )

        db.session.add(note)
        db.session.commit()

        return note

    @staticmethod
    def get_note_by_id(note_id):
        return Note.query.get(note_id)

    @staticmethod
    def update_note(note, content):

        note.content = content

        db.session.commit()

        return note

    @staticmethod
    def delete_note(note):

        db.session.delete(note)
        db.session.commit()