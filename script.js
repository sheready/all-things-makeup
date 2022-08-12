// implementing the API

fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].name);
    let data1="";
    completedata.map((values) =>{
        data1 +=`
        <div class="col">
            <div class="card h-100">
                <img src=${values.image_link} class="card-img-top" alt=${values.name}/>
                <div class="card-body">
                    <h5 class="card-title" id="product-name">${values.brand} : ${values.name}</h5>
                    <p class="card-text">${values.price} </p>
                </div>
            </div>
        </div>`
    });
    document.getElementById("product-card").innerHTML = data1;
    
}).catch((err) =>{ console.log(err);

})