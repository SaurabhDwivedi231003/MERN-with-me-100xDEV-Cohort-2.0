import {useState} from "react";

export function CreateTodo() {
    // React query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input type="text" id="title" placeholder="title"
                onChange={(e) => {
                    const value = e.target.value;
                    setTitle(value);
                }} style={{ padding: 12, margin: 12, borderRadius: 6 }}></input>
            <br/>
            <input type="text" id="desc" placeholder="description" 
                 onChange={(e) => {
                    const value = e.target.value;
                    setDescription(value);
                }}
                style={{ padding: 12, margin: 12, borderRadius: 6}}></input>
            <br/>
            <button
                style={{
                    padding: 12,
                    margin: 12,
                    borderRadius: 6
                }}
                onClick={() => {
                    // Check if title or description is empty
                    if (!title.trim() || !description.trim()) {
                        alert("Title and description cannot be empty");
                        return;
                    }

                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            // title: document.getElementById("title").value, description:
                            // document.getElementById("desc").value
                            title,
                            description
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(async function (res) {
                        const json = await res.json();
                        alert("TODO Created");
                    })
                }}>
                Add a Todo
            </button>
        </div>
    );
}