# Propuesta de sitio web de comercio electrónico — TortuMar SV

Proyecto: Trabajo Grupal Fase I — Comercio Electrónico (CET 115), Ciclo II 2026
Base de diseño: plantilla `index.html` del proyecto
Plataforma final: WordPress 7.1.4 en Hostinger
Estado: **Decisiones confirmadas. Fase 1 lista para cierre.**

---

## 1. Decisiones confirmadas

| Tema | Decisión |
|---|---|
| Marca | **TortuMar SV** (nombre oficial del logo y del PDF) |
| Enfoque | Tortuga carey y especies marinas que llegan a las costas de El Salvador |
| Carné de Francisco Antonio Barrios Urías | **BU03002** |
| Orden de fotos de creadores | Creador1 = Kevin, Creador2 = Rocío, Creador3 = Francisco, Creador4 = Alan |
| Correo de contacto | `mf21015@ues.edu.sv` (institucional) |
| Pagos | **PayPal** y **pago contra entrega** |
| Cobertura | Todo El Salvador |
| Total de compra | Costo del producto + costo de envío |
| Cuenta PayPal | `awmoris@yahoo.com`, en **modo simulación (sandbox)** por ahora |
| Cifras propias | TortuMar SV no tiene datos propios; se usan los datos de referencia de la sección 9 |
| Plataforma | WordPress 7.1.4 en Hostinger |

---

## 2. Diagnóstico de la plantilla

| Aspecto | Estado en `index.html` | Acción |
|---|---|---|
| Marca | "Tortumar" | Cambiar a **TortuMar SV** |
| Colores | Noche, arena, ámbar, tide | Ajustar a la identidad del logo: azul océano, verde tortuga, arena, blanco |
| Hero | Ilustración SVG | Reemplazar por `img/Banner.jpg` |
| Logo | Texto "● Tortumar" | Reemplazar por `img/logo.jpg` |
| Navegación | Anclas de una página | Páginas reales en WordPress con menú superior y toggle móvil |
| Tienda | Resumen sin productos | Catálogo WooCommerce con los artículos del PDF |
| Contacto | `hola@tortumar.org` | Cambiar a `mf21015@ues.edu.sv` |
| Cifras | "1993", "70 días", impacto con "—" | Retirar "1993" (no verificado). Sección de impacto con datos de la sección 9 |
| Ciclo del nido | "60-70 días" de incubación | Ajustar a **~50 días** según MARN (ver fuentes) |

---

## 3. Estructura del sitio

1. **Inicio**: hero con Banner, misión breve, programas, llamadas a "Adopta", "Dona" y "Voluntariado".
2. **Nosotros**: misión, visión, reseña histórica (Jiquilisco, Usulután) y valores.
3. **Impacto**: datos de referencia de la conservación (sección 9).
4. **Tienda**: catálogo WooCommerce (productos y servicios).
5. **Adopta una tortuga**: kit simbólico y proceso de compra.
6. **Donaciones**: niveles escalonados y donación recurrente.
7. **Voluntariado**: inscripción a jornadas de limpieza y patrullajes.
8. **Galería de imágenes**: productos y servicios en cuadrícula con visor.
9. **Creadores**: foto, nombre, carné y rol.
10. **Contacto**: formulario de consulta enviado a `mf21015@ues.edu.sv`.
11. **Políticas**: envíos, pagos, devoluciones y privacidad.

**Menú:** barra superior en escritorio; en tablet y móvil, menú hamburguesa desplegable. El botón "Donar" permanece visible.

---

## 4. Identidad visual

- **Colores (tomados del logo y del PDF):**
  - Azul océano `#1B4F72`
  - Verde tortuga `#3E8E62`
  - Turquesa `#2A9D9F` (acento)
  - Arena `#F3E9D2` (fondos claros)
  - Blanco `#FFFFFF`
  - Texto `#1F2D3A`
- **Tipografía:** títulos en sans geométrica (similar al logo) y texto en Work Sans.
- **Estilo:** secciones alternadas claras y oscuras, tarjetas con esquinas suaves y fotografías reales.

---

## 5. Asignación de imágenes

| Uso | Archivo |
|---|---|
| Hero de inicio | `img/Banner.jpg` |
| Logo (encabezado y pie) | `img/logo.jpg` |
| Tarjeta "Adopta una tortuga" | `img/adopcion.jpg` |
| Joyería de vidrio de mar | `img/artesanias.jpg` |
| Bolsos tote | `img/bolso.jpg` |
| Camisetas y hoodies | `img/camisas.jpg` |
| Botellas y termos | `img/termo.jpg` |
| Creadores | `img/Creador1.jpg` a `Creador4.jpg` |

Los archivos pesan entre 2 y 4.5 MB. Se generarán versiones web (WebP, ~200 a 400 KB).

---

## 6. Creadores

| Foto | Nombre | Carné | Rol |
|---|---|---|---|
| Creador1.jpg | Kevin Alfonso Ramírez Campos | RC21111 | Coordinador |
| Creador2.jpg | Rocío Guadalupe Escobar Rivera | ER22011 | Desarrollador y Documentador |
| Creador3.jpg | Francisco Antonio Barrios Urías | BU03002 | Diseñador y Desarrollador |
| Creador4.jpg | Alan Wilner Moris Fermán | MF21015 | Analista y Desarrollador |

---

## 7. Fases (cada una requiere aprobación antes de iniciar)

### Fase 1 — Diseño y arquitectura  *(aprobada)*
- Paleta, tipografía, mapa de páginas y asignación de imágenes (secciones 1 a 5).
- Entregable: este documento aprobado.

### Fase 2 — Sitio base responsivo (HTML/CSS/JS)  *(entregada, pendiente de revisión visual)*
- Archivos: `index.html`, `galeria.html`, `creadores.html`, `contacto.html`, `css/styles.css`, `js/main.js`. Original en `docs/plantilla_original.html`.
- Cargan en `http://localhost/Tortumar/` sin errores de consola.
- Actualizar `index.html` con la nueva marca, hero, logo, misión, impacto y ciclo del nido.
- Páginas: Nosotros, Galería, Creadores, Contacto.
- Menú superior con toggle móvil.
- Formulario de contacto con validación (nombre, correo, teléfono, asunto, mensaje).
- Pruebas en 360px, 768px y 1280px.

### Fase 3 — Migración a WordPress 7.1.4 en Hostinger
- Tema hijo con el diseño aprobado, páginas y menús.
- Formulario con Contact Form 7 o WPForms, enviado a `mf21015@ues.edu.sv`.

### Fase 4 — Tienda en línea (WooCommerce)
- Catálogo con precios del PDF (sección 2.4 del documento de planeación).
- Envíos a domicilio cobrados por separado del producto.
- Pagos con **PayPal** (modo sandbox, cuenta `awmoris@yahoo.com`) y **pago contra entrega**.
- Total = precio del producto + envío. El envío se calcula por zona dentro de El Salvador.
- Páginas de políticas de envío, devoluciones y privacidad.
- Para pasar a producción: cuenta PayPal Business verificada y desactivar sandbox.

### Fase 5 — Donaciones y servicios
- Donaciones en niveles escalonados y recurrentes (PayPal).
- Producto "Adopta una tortuga" con certificado digital.
- Formulario de voluntariado.

### Fase 6 — Multimedia, SEO y pruebas
- Galería optimizada y textos finales.
- Pruebas responsivas, de formularios y de pago en modo sandbox.
- Metadatos SEO y accesibilidad básica.

### Fase 7 — Publicación en Hostinger
- Dominio, SSL, respaldos automáticos y correo.
- Prueba de pago real con monto mínimo.
- Manual de administración.

---

## 8. Pendientes abiertos

1. **Tarifa de envío:** definir el costo de envío por zona o tramo dentro de El Salvador (por ejemplo, área metropolitana, resto del país). Mientras tanto se usará una tarifa fija de marcador.
2. **Cuenta PayPal de producción:** la cuenta actual (`awmoris@yahoo.com`) es personal. Para producción conviene una cuenta PayPal Business de TortuMar SV.
3. **Donaciones:** confirmar si la ONG tiene personería o registro que deba mostrarse en el sitio para recibir donaciones.

---

## 9. Datos de impacto (investigación de referencia)

Los datos siguientes provienen de fuentes públicas y describen el contexto de conservación en El Salvador. **No son cifras propias de TortuMar SV.** Se presentan con su fuente en el sitio.

| Dato | Cifra | Fuente |
|---|---|---|
| Programa nacional QUELONIA: corrales de incubación instalados | 21, desde oriente hasta occidente | FIAES (fiaes.org.sv) |
| Huevos incubados en el programa QUELONIA | 4 millones | FIAES |
| Tortugas liberadas en más de 30 playas (QUELONIA) | 3.5 millones | FIAES |
| Especies que llegan a las costas salvadoreñas | 4: golfina, carey, prieta y baule | FIAES; MARN |
| Anidación de carey en Bahía de Jiquilisco | ~167 nidos/año | Ficha de especie, IMARPE (cita datos de la región) |
| Anidación de carey en Los Cóbanos | ~60 nidos/año | Ficha de especie, IMARPE |
| Anidaciones de carey en la costa del Pacífico de América | Cerca de la mitad, en Bahía de Jiquilisco | CNN Español, 2025 |
| Estado de conservación de la carey | En peligro crítico de extinción | CNN Español, 2025; UICN |
| Incubación de huevos hasta la eclosión | Alrededor de 50 días | MARN, 2026 |
| Prohibición del consumo de huevos y productos de tortuga | Desde 2009; multas hasta $30,000 o hasta 5 años de prisión | Latin American Post (EFE), 2026 |

**Notas sobre las fuentes:**
- El dato de **"1993"** de la plantilla no se encontró en fuentes verificadas y se retira.
- La plantilla decía "60-70 días" de incubación. MARN indica **~50 días**. Se usa el dato de MARN.
- Las cifras de anidación de carey (IMARPE) son de un registro de la región. Para el sitio conviene citar la fuente y el año.

**Texto propuesto para la sección de impacto:**
> *"En El Salvador llegan cuatro especies de tortugas marinas a anidar. La carey está en peligro crítico de extinción, y la Bahía de Jiquilisco concentra cerca de la mitad de las anidaciones documentadas en el Pacífico de América. Entre 2007 y hoy, el trabajo comunitario y los corrales de incubación del programa nacional QUELONIA han incubado 4 millones de huevos y liberado 3.5 millones de tortugas en más de 30 playas. TortuMar SV trabaja en esa misma costa."*

---

## 10. Solicitud de aprobación

- [x] Estructura de páginas (sección 3)
- [x] Paleta y tipografía (sección 4)
- [x] Asignación de imágenes (sección 5)
- [x] Datos de impacto de referencia (sección 9)
- [ ] Inicio de la **Fase 2** (pendiente de confirmación)
