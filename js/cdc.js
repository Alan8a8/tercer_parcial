const contGrid = document.querySelector('.contGrid');
const tablaCarr = document.querySelector('.tablaCarr');
const btnC = document.querySelector('.comprarTodo')

try {
    fetch('productos/elementos.json')
    .then(respuesta => {
        return respuesta.json()
})
    .then(datos => {
        let contador = 0 ;
        while(datos.length > contador){

            let producto = document.createElement('div')
            let imgCont = document.createElement('div')
            let img = document.createElement('img')
            
            let contenido = document.createElement('div')
            
            let titulo = document.createElement('h2')
            let precio = document.createElement('p')

            let btnAñadirCarrito = document.createElement('button')

            producto.setAttribute('class', 'producto')

            imgCont.setAttribute('class', 'imgCont')
            img.setAttribute('src', datos[contador].img)
            img.setAttribute('alt', 'Imagen de representacion')
            
            contenido.setAttribute('class', 'contenido')
            titulo.setAttribute('class', 'titulo')
            precio.setAttribute('class', 'precio')
            
            titulo.innerHTML = datos[contador].nombre
            precio.innerHTML = datos[contador].precio + "Bs."
        
            btnAñadirCarrito.setAttribute('class', 'btnAñadirCarrito')
            btnAñadirCarrito.setAttribute('value', contador)
            btnAñadirCarrito.innerHTML = 'Anadir al Carrito' 

            producto.appendChild(imgCont)
            imgCont.appendChild(img)
            producto.appendChild(contenido)
            contenido.appendChild(titulo)
            contenido.appendChild(precio)
            contenido.appendChild(btnAñadirCarrito)
            contGrid.appendChild(producto)
            
            btnAñadirCarrito.addEventListener('click',(e) =>{
                e.preventDefault()
                let tdGen = document.querySelectorAll('.obtjst')

                const tr = document.createElement('tr')
                const tdUno = document.createElement('td')
                const tdDos = document.createElement('td')

                tdUno.setAttribute('class', 'obtjst')
                tr.setAttribute('class', 'trJs')
               
                tdUno.innerHTML = datos[btnAñadirCarrito.value].nombre
                tdDos.innerHTML = datos[btnAñadirCarrito.value].precio

                if(tdGen.length == 0){

                    tr.appendChild(tdUno)
                    tr.appendChild(tdDos)
                    tablaCarr.appendChild(tr);
                }
                else{
                    tdGen = document.querySelectorAll('.obtjst')
                    tdGen.forEach((elem, i) => {
                    console.log(elem);
                        if (elem.innerHTML == datos[btnAñadirCarrito.value].nombre) {
                            alert('El elemento se agrego al carrito')         
                            tr.removeChild(tdUno)
                            tr.removeChild(tdDos)
                            tablaCarr.removeChild(tr);               
                        }
                         else{
                            tr.appendChild(tdUno)
                            tr.appendChild(tdDos)
                            tablaCarr.appendChild(tr);
                         }
                    })
                }
             
            });

            contador++;
        }


                 
    })
} catch (e) {
    console.log(e);
}

btnC.addEventListener('click', (e) =>{
    const trJs = document.querySelectorAll('.trJs')

    if(trJs.length ==0){
        alert('No hay elementos para comprar')
    }
    else{
        trJs.forEach(elem => {
            elem.outerHTML = ''
        })
       
        alert('Elementos comprados exitosamente')
    }
})
