async function getData() {
  try {
    let data = await fetch("https://fakestoreapi.com/products/");
    let products = await data.json();
    // console.log(products);
    let table = "";
    products.map((product) => {
      table += `<tr><td>${product.id}</td><td>${product.title}</td><td>${product.price}</td><td style="width:200px">${product.description}</td><td>${product.category}</td><td><img src="${product.image}" style="width : 40px"></td></tr>`;
    });
    const tableBody = (document.getElementById("tableBody").innerHTML = table);
    console.log(tableBody);
  } catch (error) {
    let p = document.createElement("p");
    p.style.fontSize = "20px";
    p.style.color = "red";
    document.body.appendChild(p);
  }
}
getData();

// async function getData() {
//   try {
//     let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let products = await data.json();

//     products.map((product) => {
//       let p = document.createElement("p");
//       p.textContent = "პოსტი " + product.id + " :";
//       document.body.appendChild(p);
//       let titleP = document.createElement("p");
//       titleP.textContent = product.title;
//       document.body.appendChild(titleP);
//       let bodyP = document.createElement("p");
//       bodyP.textContent = product.body;
//       document.body.appendChild(bodyP);
//     });
//   } catch (error) {}
// }

// getData();
