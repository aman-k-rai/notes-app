from app.repositories.note_repository import NoteRepository


class NoteService:

    @staticmethod
    def get_all_notes():
        return NoteRepository.get_all_notes()

    @staticmethod
    def create_note(content):
        return NoteRepository.create_note(content)

    @staticmethod
    def update_note(note_id, content):

        note = NoteRepository.get_note_by_id(note_id)

        if not note:
            return None

        return NoteRepository.update_note(
            note,
            content
        )

    @staticmethod
    def delete_note(note_id):

        note = NoteRepository.get_note_by_id(note_id)

        if note:
            NoteRepository.delete_note(note)