
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio, tallaId, cantidadId) {
  const talla = document.getElementById(tallaId)?.value || 'M';
  const cantidad = parseInt(document.getElementById(cantidadId)?.value || '1');
  const productoExistente = carrito.find(p => p.nombre === nombre && p.talla === talla);
  if (productoExistente) {
    productoExistente.cantidad += cantidad;
  } else {
    carrito.push({ nombre, precio, talla, cantidad });
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${cantidad} x ${nombre} (Talla ${talla}) añadido al carrito.`);
}

function mostrarCarrito() {
  const contenedor = document.getElementById("lista-carrito");
  if (!contenedor) return;
  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    return;
  }
  let total = 0;
  contenedor.innerHTML = "<ul>" + carrito.map(p => {
    total += p.precio * p.cantidad;
    return `<li>${p.cantidad} x ${p.nombre} (Talla ${p.talla}) - $${p.precio * p.cantidad}</li>`;
  }).join("") + "</ul>";
  contenedor.innerHTML += `<h3>Total: $${total}</h3>`;
}
