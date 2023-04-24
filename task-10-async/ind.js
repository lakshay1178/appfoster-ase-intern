
let dataTable = {};

fetch("https://gorest.co.in/public/v2/users").then((data) => {
  return data.json(); // Converted to json object
}).then((inData) => {

  let tableData = "";

  dataTable = inData;

  inData.map((value) => {
    tableData += `<tr class="text-center">
        <td class="text-center">${value.name}</td>
        <td>
          <button type="button" class="btn btn-primary bg-light border-0 " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="handleOnClick(${value.id})">
            
          <i class="fa-solid fa-eye" style="color: #1f2e47;"></i>

          </button>
        </td></tr>`;
  });
  document.getElementById("tableBody").innerHTML = tableData;
}).catch((err) => {
  console.log(err);
});


handleOnClick = (id) => {
  fetch(`https://gorest.co.in/public/v2/users/${id}`)
    .then(res => res.json())
    .then((data) => {
      let showData = `<div>
                        <p><strong>Name: </strong> ${data.name} <span id="name"></span></p>
                        <p><strong>Email: </strong> ${data.email}<span id="email"></span></p>
                        <p><strong>Gender: </strong> ${data.gender}<span id="gender"></span></p>
                        <p><strong>Status: </strong> ${data.status}<span id="status"></span></p>
                     </div>`

      document.getElementById("modal-data").innerHTML = showData;
    })
    .catch(err => console.log(err));
}



