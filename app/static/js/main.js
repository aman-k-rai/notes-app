async function addNote() {

    const noteInput = document.getElementById("noteInput");

    const content = noteInput.value;

    if (!content.trim()) {
        return;
    }

    await fetch("/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: content
        })
    });

    location.reload();
}

async function deleteNote(id) {

    await fetch(`/delete/${id}`, {
        method: "POST"
    });

    location.reload();
}