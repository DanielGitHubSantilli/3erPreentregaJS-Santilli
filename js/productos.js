const piepag = document.getElementById("telefono")
piepag.innerText = "02324-1111111"
const form = document.getElementById('crear-producto');

form.addEventListener('submit', event => {
    event.preventDefault();
    for (let i = 0; i < 10; i++) {
        const codigo = document.getElementById('codigo').value;
        const descripcion = document.getElementById('descripcion').value;
        const precio = document.getElementById('precio').value;
        const stock = document.getElementById('stock').value;
        const precioIva = document.getElementById('precio-iva').value;
        const producto = {
            codigo,
            descripcion,
            precio,
            stock,
            precioIva
        };
        localStorage.setItem(codigo, JSON.stringify(producto));
        }
});
const formVenta = document.getElementById('venta-producto');
formVenta.addEventListener('submit', event => {
    event.preventDefault();
    const codigo = document.getElementById('codigo-venta').value;
    const cantidad = document.getElementById('cantidad-venta').value;
    const producto = JSON.parse(localStorage.getItem(codigo));
    if (producto && producto.stock >= cantidad) {
        alert("Excelente compra.")
        //Código por desarrollar
        // El producto existe y hay suficiente stock
        // Agregar producto al carrito de compras
    } else {
        alert("No existe stock")
        //Código por desarrollar
        // El producto no existe o no hay suficiente stock
        // Mensaje al usuario
    }
});
