# Pizzería Mamma Mía! - Hito 3

Aplicación web desarrollada en **React** y JavaScript puro, centrada en la gestión de componentes reutilizables, renderizado dinámico de arreglos, manejo de estados con hooks (`useState`) y diseño CSS centralizado sin frameworks externos.

## 🚀 Características del Hito 3
- **Renderizado del Carrito (`<Cart />`):** Recorrido dinámico del arreglo `pizzaCart` para mostrar los productos seleccionados con sus respectivas imágenes, nombres y precios formateados en moneda chilena (`CLP`)[cite: 14].
- **Interactividad en el Carrito:** 
  - Botones de incremento (`+`) y decremento (`-`) funcionales que actualizan la cantidad de unidades en tiempo real[cite: 14].
  - Eliminación automática del producto del carrito si su cantidad llega a cero.
- **Cálculo Dinámico del Total:** Suma automática del costo total de los productos según las cantidades actuales en el pedido[cite: 14].
- **Diseño Responsivo:** Estilos CSS optimizados para evitar desbordamientos, controlar tamaños de imágenes y mantener una estructura fluida de ancho completo con pie de página fijo.

## 🛠️ Tecnologías Utilizadas
- **React.js** (con Hooks: `useState`)
- **JavaScript (ES6+)**
- **HTML5 / CSS3** (Diseño centralizado y flexible)
- **Vite** (Entorno de desarrollo rápido)
