fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json())
  .then(data => {
    console.log(data)
var posts = '';
data.data.forEach(element => {
    posts += `
    
    <div class="card" style="width: 18rem;">
  <img src="${element.avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="${element.email}">${element.email}</h5>
    <p class="${element.first_name}">${element.first_name} ${element.last_name}</p>
  </div>
</div>
    ` 
});

document.querySelector(".postRow").innerHTML=posts
  })