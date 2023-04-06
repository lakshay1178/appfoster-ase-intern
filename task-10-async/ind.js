// async function getJobAsync()
// {
//   let response = await fetch(`https://gorest.co.in/public/v2/users`);
//   let data = await response.json()
//   return data;
// }
// getJobAsync('jobPositionHere')
//   .then(data => console.log(data));


console.log("This is working")


let dataTable = {}


fetch("https://gorest.co.in/public/v2/users").then((data) => {
  return data.json(); // Converted to json object
}).then((inData) => {
  
  let tableData = "";

  dataTable = inData;
  console.log(inData);
  

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




handleOnClick = (data) => {
  let showData = "";
  dataTable.map((each) => {
    if (each.id == data) {
      showData = `<div>
                        <p><strong>Name: </strong> ${each.name} <span id="name"></span></p>
                        <p><strong>Email: </strong> ${each.email}<span id="email"></span></p>
                        <p><strong>Gender: </strong> ${each.gender}<span id="gender"></span></p>
                        <p><strong>Status: </strong> ${each.status}<span id="status"></span></p>
            </div>`
      return;
    }
  })
  document.getElementById("modal-data").innerHTML = showData;
}


 
