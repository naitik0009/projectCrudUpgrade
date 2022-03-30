let body = {};
let data = [];

const fetch = async () => {
  const response = await axios.get("http://localhost:5600/api/v1/tasks");
  response.data.result.map(function (items, index) {
    data.push(items);
    console.log(index);
  });
};

async function postData(body) {
  try {
    (await axios.post("http://localhost:5600/api/v1/tasks", body))
      ? console.log("posted")
      : console.log("cant post");
  } catch (error) {
    console.log(error);
  }
}

async function completeTask(id) {
  try {
    await axios
      .patch(`http://localhost:5600/api/v1/tasks/${id}`, body)
      .finally(() => {
        console.log("updated");
      });
  } catch (error) {
    console.log(error);
  }
}

async function deletePost(id) {
  try {
    (await axios.delete(`http://localhost:5600/api/v1/tasks/${id}`))
      ? console.log("deleted")
      : console.log("cant delete");
  } catch (error) {
    console.log("");
  }
}

function promptDelete() {
  console.log("delete");
}
function promptEdit() {}
// console.log(tr);

const div = document.querySelector("#main");
const form = document.querySelector("#submit");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(form.elements["name"].value);
  body.name = form.elements["name"].value;
  // console.log(body);
  postData(body).then(() => {
    form.elements["name"].value = "";
    location.reload();
  });
});

fetch().then(() => {
  data.forEach((element) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `

    <td class="table-primary">
    
    ${element.name} + ${
      !element.completed == false ? "completed" : "not completed"
    }

    
    </td><button id="delete"> delete </button><button id="edit">complete</button>




`;
    div.appendChild(tr);
    const btn = document.querySelector("#delete");

    // console.log(btn, btnEdit);
    // const td = document.createElement("td");

    // td.innerHTML = `${element.name} + ${
    // !element.completed == false ? "completed" : "not completed"
    // } `;
    // tr.appendChild(td);
    // tr.appendChild(td1);

    btn.addEventListener("click", (event) => {
      console.log(element._id);
      body = { completed: element.completed ? false : true };
      completeTask(element._id).finally(() => {
        location.reload();
      });
    });
  });
});
