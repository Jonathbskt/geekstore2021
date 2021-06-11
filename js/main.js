
//DATOS 

 var datosProducts = [
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
  },

]

// BTN SUBIR PRODUCTO
let btnSubir = document.getElementById("subirCard");

// VARIABLES DATOS
let nombreProducto = document.getElementById("nombreProducto")
let precioProducto = document.getElementById("precioProducto") 
let categoriaProducto = document.getElementById("categoriaProducto") 


// CONSTRUCTOR

class Product {
    constructor(nombreProducto, precioProducto, categoriaProducto, categoria, thumnnairUrl) {
        
        this.nombreProducto = nombreProducto;
        this.precioProducto = precioProducto;
        this.categoriaProducto = categoriaProducto;
        this.categoria = categoria;
        this.thumnnairUrl = thumnnairUrl;

    }
}

for (const productos of datosProducts) {
    $("#listadoProduct").append(`<div class="col">
                        <div class="card h-100">
                            <img src="${productos.thumbnailUrl}" class="card-img-top" alt="...">
                            <div class="card-body bg-light">
                                <h5 class="card-title "> ${productos.nombreProducto}</h5>
                                <p id="price"> $${productos.precioProducto}</p>
                                
                                <div class="addCarrito ">
                                    <a href="#"> <i class="fas fa-shopping-cart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> `);
    }

// CLASS UI - CARD DINAMICA

class UI {
    agregarProducto(product) {
        const productList = document.getElementById('listadoProduct');
        const element = document.createElement('div');

        element.innerHTML = `<div class="col">
                        <div class="card h-100">
                            <img src="./img/Perifericos/auris1.jpg" class="card-img-top" alt="...">
                            <div class="card-body bg-light">
                                <h5 class="card-title "> ${product.nombreProducto}</h5>
                                <p id="price"> $${product.precioProducto}</p>
                                
                                <div class="addCarrito ">
                                    <a href="#"> <i class="fas fa-shopping-cart"></i></a>
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

//CLICK BOTON SUBIR

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
    console.log(categoriaProducto)
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
    }})




