
//DATOS 

 const datosProducts = [
  {
    "id":1 ,
    "nombreProducto": "Auriculares HyperX Cloud Stinger Core 7.1",
    "precioProducto": 8900,
    "categoriaProducto": "Auriculares",
    "categoria" : "Perifericos",
    "thumbnailUrl": "./img/Perifericos/auris1.jpg"
  },
  {
    "id":2 ,
    "nombreProducto": "Micrófono Marvo Mic-03 Condenser Usb",
    "precioProducto": 7338,
    "categoriaProducto": "Microfonos",
    "categoria" : "Perifericos",
    "thumbnailUrl": "./img/Perifericos/MIC-03_800-500x500.jpg"
  },
  {
    "id":3 ,
    "nombreProducto": "Monitor LG 22MN430H-B 27″ IPS FullHD",
    "precioProducto": 32370,
    "categoriaProducto": "Monitores",
    "categoria" : "Perifericos",
    "thumbnailUrl": "./img/Perifericos/Z1-500x500.jpg"
  },
  {
    "id":4 ,
    "nombreProducto": "Notebook Asus X509 i3-1005G1 4GB 1TB 15.6″",
    "precioProducto": 79560,
    "categoria" : "Notebooks",
    "categoriaProducto": "Asus",
    "thumbnailUrl": "./img/Notebook/note1.jpg"
  },
  {
    "id":5,
    "nombreProducto": "Geforce 2080",
    "precioProducto": 150560,
    "categoria" : "Componentes",
    "categoriaProducto": "Placas de video",
    "thumbnailUrl": "./img/Componentes/geforce.jpg"
  }

]
 

// BTN SUBIR PRODUCTO
let btnSubir = document.getElementById("subirCard");

// VARIABLES DATOS - LLAMADO A LOS IMPUTS PARA ADMINISTADOR 
const nombreProducto = document.querySelector(".nameProduct")
const precioProducto = document.querySelector(".price") 
const thumbnailUrl = document.querySelector(".imagenCard")
//const categoriaProducto = document.querySelector("categoriaProducto") 


// CONSTRUCTOR

class Product {
    constructor(nombreProducto, precioProducto, categoriaProducto, categoria, thumbnailUrl) {
        
        this.nombreProducto = nombreProducto;
        this.precioProducto = precioProducto;
        this.categoriaProducto = categoriaProducto;
        this.categoria = categoria;
        this.thumbnailUrl = thumbnailUrl;

    }
}



for (const productos of datosProducts) {
    $("#listadoProduct").append(`<div class="col">
                        <div class="card h-100">
                            <img src="${productos.thumbnailUrl}" class="card-img-top imagenCard" alt="...">
                            <div class="card-body bg-light">
                                <h5 class="card-title nameProduct" > ${productos.nombreProducto}</h5>
                                <p class="price"> $${productos.precioProducto}</p>
                                
                                <div class="addCarrito ">
                                    <a href="#" class="shopingCartClick"  > <i class="fas fa-shopping-cart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> `);

                    
    }

// CLASS UI - CARD DINAMICA

class UI {
    agregarProducto(productos) {
        const productList = document.getElementById('listadoProduct');
        const element = document.createElement('div');

        element.innerHTML = `<div class="col">
                        <div class="card h-100">
                            <img src="./img/Perifericos/auris1.jpg" class="card-img-top imagenCard" alt="...">
                            <div class="card-body bg-light">
                                <h5 class="card-title nameProduct"> ${productos.nombreProducto}</h5>
                                <p class="price"> $${productos.precioProducto}</p>
                                
                                <div class="addCarrito ">
                                    <a href="#" > <i class="fas fa-shopping-cart shopingCartClick "></i></a>
                                </div>
                            </div>
                        </div>
                    </div> `

        productList.appendChild(element);
        this.resetForm();
        
    }
 
    resetForm() {
        document.getElementById('product-form').reset();
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert- ${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        //VISUALIZANDO EN EL DOM 
        const container = document.querySelector('.productosCards');
        const app = document.querySelector('#listadoProduct');
        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000)
    }
}

class AddCart {
    AddShopingCart(productos) {

        $(".tablee").append(`<tr id="tableCart">

        <th scope="row"><img class="shopingCartImagen" src="${productos.thumbnailUrl}" alt=""></th>

        <td class="shopingCartParrafo">${productos.nombreProducto}</td>

        <td><input type="number" class="form-control mb-3" id="shoppingCartCantidad" value="1"></td>

        <td><p class="p-3 price2">${productos.precioProducto}</p></td>

        </tr>`)

    }
}


//CLICK BOTON SUBIR - LLAMA A LOS IMPUTS ADMINISTRADOR

document.getElementById('product-form').addEventListener('submit',function(event) {
    event.preventDefault();
    let nombreProducto = document.getElementById("nombreProducto").value
    let precioProducto = document.getElementById("precioProducto").value
    let categoriaProducto = document.getElementById("categoriaProducto").value

    const product = new Product(nombreProducto, precioProducto, categoriaProducto);
    const ui = new UI();

    if (nombreProducto === '' || precioProducto === '' || categoriaProducto === '') {
        return ui.showMessage("Complete los campos necesarios", 'alert alert-info');
    }

    ui.agregarProducto(product);

    
    ui.showMessage('Producto agregado satisfactoriamente', 'alert alert-success');

    sessionStorage.setItem("product", JSON.stringify(product));
}   
)

// VALIDACIÓN DE LOGIN


let administrador = "jonatanbelfiore@outlook.com"
let passwordAdmin = "jonatanbelfiore"
let usuario = "user@outlook.com"
let passwordUsuario = "password"

document.getElementById("loguearme").addEventListener("click", function () {
    if (document.getElementById("emailLogin").value === administrador && document.getElementById("passwordLogin").value === passwordAdmin ) {
    
        Swal.fire({
            title: "Bienvenido Admin!"  
        })
        $(".component-menu-lateral-admin").removeClass("hidden-card")
        $(".component-menu-lateral-admin").addClass("visible-card")
        
        

    }else if(document.getElementById("emailLogin").value === usuario && document.getElementById("passwordLogin").value === passwordUsuario) 
    {
        Swal.fire(
        {
            title: "Bienvenido User!"
            
        })      	
         

    }

    else {
        Swal.fire(
        {
            title: "Email y/o contraseña incorrectos",
        })
    }

   
})


// SHOPPING CART CLICK



   
$(".shopingCartClick").click(function() {
    
    const thumbnailUrl = document.querySelector(".imagenCard").src
    const nombreProducto = document.querySelector(".nameProduct").textContent
    const precioProducto = document.querySelector(".price").textContent

    const product = new Product(nombreProducto, precioProducto,thumbnailUrl);
    const uiCart = new AddCart();
    
    uiCart.AddShopingCart(product);


     
    console.log(thumbnailUrl)
    
});

