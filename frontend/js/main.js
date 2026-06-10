let allNotes = [];

let editingNoteId = null;

const colors = [
    "#FFD166",
    "#F79D65",
    "#BDB2FF",
    "#90DBF4",
    "#CAFFBF",
    "#FFADAD",
    "#A0C4FF",
    "#FDFFB6"
];

function getRandomColor() {

    return colors[
        Math.floor(
            Math.random() * colors.length
        )
    ];
}

async function loadNotes() {

    const response =
        await fetch("/api/notes");

    allNotes =
        await response.json();

    renderNotes(allNotes);
}

function renderNotes(notes) {

    const notesContainer =
        document.getElementById(
            "notesContainer"
        );

    notesContainer.innerHTML = "";

    notes.forEach(note => {

        notesContainer.innerHTML += `
            <div
                class="note-card"
                style="background:${getRandomColor()}"
            >

                <div class="note-content">

                    <p>
                        ${note.content}
                    </p>

                </div>

                <div class="note-actions">

                    <button
                        onclick="startEdit(${note.id})"
                        title="Edit Note"
                    >
                        🖊️
                    </button>

                    <button
                        onclick="deleteNote(${note.id})"
                        title="Delete Note"
                    >
                        🗑️
                    </button>

                </div>

            </div>
        `;
    });
}

async function addNote() {

    const noteInput =
        document.getElementById(
            "noteInput"
        );

    const content =
        noteInput.value.trim();

    if (!content) {
        return;
    }

    const actionButton =
        document.getElementById(
            "actionButton"
        );

    if (editingNoteId) {

        await fetch(
            `/api/notes/${editingNoteId}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    content: content
                })
            }
        );

        editingNoteId = null;

        actionButton.innerText =
            "Add Note";

    } else {

        await fetch("/api/notes", {

            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                content: content
            })

        });
    }

    noteInput.value = "";

    loadNotes();
}

function startEdit(id) {

    const note =
        allNotes.find(
            note => note.id === id
        );

    if (!note) {
        return;
    }

    editingNoteId = id;

    document.getElementById(
        "noteInput"
    ).value = note.content;

    document.getElementById(
        "actionButton"
    ).innerText = "Update Note";

    document.getElementById(
        "noteInput"
    ).focus();
}

async function deleteNote(id) {

    await fetch(
        `/api/notes/${id}`,
        {
            method: "DELETE"
        }
    );

    if (editingNoteId === id) {

        editingNoteId = null;

        document.getElementById(
            "actionButton"
        ).innerText = "Add Note";

        document.getElementById(
            "noteInput"
        ).value = "";
    }

    loadNotes();
}

function filterNotes() {

    const searchValue =
        document
            .getElementById(
                "searchInput"
            )
            .value
            .toLowerCase();

    const filteredNotes =
        allNotes.filter(note =>
            note.content
                .toLowerCase()
                .includes(searchValue)
        );

    renderNotes(filteredNotes);
}

window.onload = loadNotes;