# TortuMar SV — Mapa de sitio y descripción visual

Versión: 1.0 · Estado: prototipo validado en Fase 2, pendiente de migración a WordPress (Fase 3)
Dominio previsto: `tortumar.dsoftin.net`

---

## 1. Mapa de sitio

### 1.1 Estructura actual del prototipo (archivos HTML)

```
TortuMar SV (prototipo)
├── index.html ............................ Inicio
│   ├── #mision ........................... Nosotros (misión, historia y cifras de referencia)
│   ├── #ciclo ............................ El recorrido de un nido (4 etapas)
│   ├── #programas ........................ Cuatro programas (patrullaje, limpieza, educación, liberación)
│   ├── #impacto .......................... Contexto de conservación (cifras con fuente)
│   ├── #participar ....................... Adopta, sé voluntario, dona
│   └── #tienda ........................... Resumen de la tienda (enlaza a tienda.html)
├── galeria.html .......................... Galería de imágenes (6 tarjetas + visor)
├── creadores.html ........................ Equipo (4 integrantes)
├── tienda.html ........................... Catálogo (6 productos), carrito y datos de entrega
└── contacto.html ......................... Formulario de contacto (?asunto= prellena el campo)
```

Todas las páginas comparten el mismo encabezado, el mismo pie y el mismo script (`js/main.js`).

### 1.2 Estructura objetivo en WordPress (Fase 3)

| # | Página | Slug | Contenido | Origen |
|---|---|---|---|---|
| 1 | Inicio | `/` | Hero, misión, ciclo, programas, impacto, participar, resumen de tienda | `index.html` |
| 2 | Galería | `/galeria/` | Productos y servicios con visor | `galeria.html` |
| 3 | Creadores | `/creadores/` | Equipo con foto, nombre, carné y rol | `creadores.html` |
| 4 | Tienda | `/tienda/` | Catálogo WooCommerce | WooCommerce |
| 5 | Carrito | `/carrito/` | Carrito WooCommerce | WooCommerce |
| 6 | Finalizar compra | `/finalizar-compra/` | Datos de entrega, PayPal y pago contra entrega | WooCommerce |
| 7 | Mi cuenta | `/mi-cuenta/` | Pedidos del cliente | WooCommerce |
| 8 | Donar | `/donar/` (pendiente) | Formularios de donación por niveles | GiveWP |
| 9 | Contacto | `/contacto/` | Formulario que envía a `mf21015@ues.edu.sv` | Contact Form 7 o WPForms |
| 10 | Envíos | `/envios/` (pendiente) | Zonas y tarifas | Página de texto |
| 11 | Devoluciones | `/devoluciones/` (pendiente) | Política de devoluciones | Página de texto |
| 12 | Privacidad | `/privacidad/` (pendiente) | Política de privacidad | Página de texto |

**Notas:**
- El encabezado enlaza a `/#mision`, `/#ciclo`, `/#programas`, `/#impacto`, `/galeria/`, `/creadores/`, `/tienda/`, `/carrito/`, `/contacto/` y `/#participar`.
- El botón "Donar" enlaza hoy a `/#participar`. Cuando exista `/donar/`, se cambia el enlace.
- En el prototipo, el enlace "Carrito" del encabezado llevaba a `tienda.html#carrito`. En WordPress, el enlace va a `/carrito/`.

### 1.3 Navegación

| Dispositivo | Comportamiento |
|---|---|
| Escritorio (más de 960 px) | Barra superior con enlaces, carrito y botón "Donar" visibles |
| Tablet y móvil (960 px o menos) | Botón ☰ que despliega la lista vertical; el botón "Donar" se oculta y el enlace queda dentro del menú |
| Al tocar un enlace | El menú se cierra solo |

Recursos de navegación:
- Enlaces del pie de página: Nosotros, Galería, Creadores, Tienda, Contacto.
- El pie no muestra correos; el contacto se hace por el formulario.

---

## 2. Descripción visual

### 2.1 Concepto

El diseño se basa en el mar de noche: fondos azules profundos, luz de luna en la parte superior y acentos verdes y turquesa que evocan a la tortuga y al oleaje. Las secciones alternan fondos oscuros y arena para dar ritmo sin sobrecargar la página. Las imágenes son fotografías reales de `img/`; no hay ilustraciones vectoriales.

### 2.2 Paleta de colores

| Variable CSS | Color | Uso |
|---|---|---|
| `--ocean` | `#1B4F72` | Azul océano: fondo de sección "Nosotros", tarjeta de tienda, gradiente |
| `--ocean-deep` | `#0E2F45` | Fondo principal de la página, encabezado y títulos sobre fondo claro |
| `--turtle` | `#3E8E62` | Verde tortuga: botón principal, bordes de impacto, precios |
| `--turquoise` | `#2A9D9F` | Turquesa: reservado para acentos |
| `--turquoise-bright` | `#5FC2C3` | Turquesa claro: kicker de sección, marca de programas, enlaces del pie, foco |
| `--sand` | `#F3E9D2` | Arena: fondos de sección clara, etiqueta de carné |
| `--sand-dim` | `#CFD9DF` | Texto secundario sobre fondo oscuro |
| `--white` | `#FFFFFF` | Texto principal sobre fondo oscuro, tarjetas, formularios |
| `--ink` | `#1F2D3A` | Texto sobre fondo claro |

Colores auxiliares usados en componentes:
- `#3B4A57`: texto de párrafos sobre fondo claro.
- `#B9C5CE`: bordes de campos de formulario.
- `#A83A2A`: errores de validación.
- `#EAF4F1`: caja de aviso de PayPal (simulación) y de confirmación de pedido.
- `#0A2233`: fondo del pie de página.

**Contraste:** el texto principal blanco sobre `#0E2F45` y el texto oscuro sobre `#F3E9D2` cumplen contraste alto. Los textos secundarios usan `#CFD9DF` sobre fondo oscuro.

### 2.3 Tipografía

| Uso | Familia | Pesos | Carga |
|---|---|---|---|
| Títulos, marca, cifras, precios | **Montserrat** | 600, 700 | Google Fonts |
| Texto de párrafos, menú, formularios, botones | **Work Sans** | 400, 500, 600 | Google Fonts |

Respaldos: `sans-serif` (Montserrat) y `sans-serif` (Work Sans) si no cargan las fuentes.

**Escala tipográfica (escritorio):**

| Elemento | Tamaño | Peso | Notas |
|---|---|---|---|
| Cuerpo | 17 px (1.06 rem) | 400 | Interlineado 1.6 |
| Título principal (h1 de inicio) | `clamp(2.2rem, 4.8vw, 3.4rem)` | 700 | Interlineado 1.12; la frase final va en turquesa |
| Título de página (galería, creadores, tienda, contacto) | `clamp(2rem, 4vw, 2.8rem)` | 700 | |
| Título de sección (h2) | `clamp(1.6rem, 3vw, 2.2rem)` | 700 | Interlineado 1.2 |
| Subtítulo de tarjeta (h3) | 1.05 a 1.2 rem | 600 | |
| Kicker de sección | 0.92 rem | 600 | Mayúsculas, espaciado de 0.08em, turquesa |
| Cifras de impacto | 2.3 rem | 700 | |
| Texto de tarjetas y notas | 0.88 a 0.95 rem | 400 | |
| Etiqueta de botón | 0.98 rem | 600 | |

### 2.4 Espaciado, medidas y forma

- Contenedor: máximo 1120 px, con 32 px de margen interno a cada lado.
- Separación vertical entre secciones: 88 px (56 px en páginas interiores, bajo el encabezado de página).
- Esquinas redondeadas: 4 px (botones, campos), 6 px (tarjetas de galería y de productos), 8 px (formularios, banner del hero, bloques de tienda).
- Sombras: suaves y azuladas en tarjetas claras (`0 10px 30px` con opacidad baja), más fuertes en la imagen del hero.
- Línea divisoria: 1 px con 10% de blanco.

### 2.5 Componentes

| Componente | Aspecto |
|---|---|
| Encabezado | Fijo al desplazar, fondo azul profundo con 94% de opacidad y desenfoque; logo circular de 44 px |
| Botón primario | Fondo verde tortuga, texto blanco; al pasar el cursor, verde más claro |
| Botón fantasma | Borde blanco translúcido; al pasar el cursor, borde blanco completo |
| Hero | Gradiente azul profundo con resplandor turquesa arriba a la derecha; imagen de banner con esquinas de 8 px y sombra |
| Cifras de misión | Número grande en turquesa claro |
| Pasos del ciclo | Círculos de 44 px en arena con borde verde y número en verde; línea horizontal en escritorio |
| Filas de programas | Etiqueta en cursiva turquesa a la izquierda y texto a la derecha, separadas por líneas finas |
| Tarjetas de impacto | Fondo blanco con 6% de opacidad y borde izquierdo verde de 3 px |
| Tarjetas de participación | Fondo blanco, título en azul profundo, enlace en verde |
| Bloque de tienda | Gradiente de azul océano a azul profundo, con etiquetas redondeadas de borde blanco |
| Tarjetas de galería, productos y creadores | Fondo blanco, imagen superior, texto en azul profundo; creadores con carné en píldora arena |
| Visor de imagen | Fondo oscuro translúcido, imagen centrada y botón de cierre circular blanco |
| Formularios | Tarjeta blanca, campos con fondo crema y borde gris; errores en rojo; mensajes de éxito en verde |
| Carrito | Tarjeta blanca pegada a la derecha en escritorio; se apila debajo en pantallas pequeñas |
| Caja de PayPal | Fondo verde pálido con borde izquierdo verde, indica simulación |
| Pie de página | Fondo azul muy oscuro (`#0A2233`), tres columnas que se apilan en móvil |

### 2.6 Imágenes

| Archivo | Uso |
|---|---|
| `Banner.jpg` | Hero de inicio y campaña de la galería |
| `logo.jpg` | Logo en el encabezado (circular) |
| `adopcion.jpg` | Adopta una tortuga |
| `artesanias.jpg` | Joyería de vidrio de mar |
| `bolso.jpg` | Bolsos tote |
| `camisas.jpg` | Camisetas y hoodies |
| `termo.jpg` | Termos reutilizables |
| `Creador1.jpg` a `Creador4.jpg` | Equipo (recortadas en 3:4) |

Las imágenes pesan entre 2 y 4.5 MB. Está previsto reducirlas a versiones web en la Fase 6.

### 2.7 Iconografía y estados

- Iconos: caracteres de texto (☰ para el menú, ✕ para cerrar, → en enlaces). No hay iconos vectoriales.
- Foco de teclado: contorno turquesa claro de 2 px con 3 px de separación.
- Hover: los enlaces cambian a turquesa claro; las tarjetas de galería y de creadores amplían la imagen 3%.
- Movimiento: desplazamiento suave entre anclas; sin animaciones decorativas.

### 2.8 Responsive

| Ancho | Cambio principal |
|---|---|
| Más de 960 px | Diseño completo: menú horizontal, columnas múltiples |
| 960 px | Menú se convierte en ☰; carrito se apila; equipo a dos columnas |
| 900 px | Hero a una columna (imagen arriba); impacto a dos columnas; galería a dos columnas |
| 820 px | Misión y ciclo a una columna; bloque de tienda a una columna |
| 700 px | Filas de programas a una columna |
| 560 px | Galería, productos y formularios a una columna |
| 520 px | Impacto y equipo a una columna |

---

## 3. Pendientes de diseño para WordPress

1. Aplicar la paleta en `theme.json` (ya definida en el tema hijo) y verificar que el tema padre no sobrescriba colores ni tipografías.
2. Revisar el contraste del texto de los botones del carrito dentro de WooCommerce.
3. Definir el estilo de las páginas de WooCommerce (carrito, finalizar compra, mi cuenta), que no existen en el prototipo.
4. Reemplazar las cifras de referencia por datos propios de la ONG cuando existan.
5. Reducir el peso de las imágenes antes de publicar.
