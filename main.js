'use strict';
window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;

        if (!task) {
            alert("Wypełnij pole z zadaniem");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");


        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerText = "Edytuj";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerText = "Usuń";

        const date_el = document.createElement("div");
        date_el.classList.add("date");
        date_el.innerText = "Date";

        task_action_el.appendChild(task_edit_el)
        task_action_el.appendChild(task_delete_el)

        task_el.appendChild(task_action_el);
        list_el.appendChild(date_el);

        list_el.appendChild(task_el);

        input.value = "";

        task_input_el.addEventListener('click', () => {
            if (task_input_el.style.textDecoration === "none" && task_input_el.getAttribute("readonly") === "readonly") {
                task_delete_el.style.visibility = "hidden";
                task_edit_el.style.visibility = "hidden";
                task_input_el.style.textDecoration = "line-through";
                task_input_el.style.color = "grey";
                var today = new Date();

                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

                var dateTime = date + ' ' + time;

                date_el.innerText = 'Zadanie wykonano: ' + dateTime;
                date_el.style.visibility = "visible";

            }
            else if (task_input_el.getAttribute("readonly") === "readonly") {
                task_input_el.style.textDecoration = "none";
                date_el.style.visibility = "hidden"
                task_delete_el.style.visibility = "visible";
                task_edit_el.style.visibility = "visible";
            }

        })

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() === "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Zapisz";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edytuj";
            }
        })


        $('#tasks').on('click', '.delete', function () {
            $(this).parent('.actions').parent('.task').remove();
            console.log("Siema");
        });

    })
})
