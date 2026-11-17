# Guía de instalación — TortuMar SV en WordPress 7.1.4 (Hostinger)

Fase 3 de la propuesta: WordPress con WooCommerce y plugin de donaciones.
Versión de WordPress verificada en WordPress.org: **7.1.4** (publicada el 28 de octubre de 2026).

> Esta guía la ejecuta quien tenga acceso a hPanel de Hostinger. No se comparten contraseñas por este medio.

---

## 1. Hosting y dominio

1. En hPanel, contratar un plan **WordPress** (o Business si se usará la tienda con volumen).
2. Crear el subdominio `tortumar.dsoftin.net` desde el dominio `dsoftin.net` (ver sección 12).
3. Activar **SSL** (Hostinger lo ofrece sin costo).
4. Verificar que la versión de PHP sea **8.3 o superior** (recomendada por WordPress).

## 2. Instalar WordPress

1. hPanel > **Sitios web** > **Instalar WordPress**.
2. Usuario administrador: uno personal, no genérico. Contraseña fuerte.
3. Idioma: **Español**.
4. Confirmar en **Escritorio > Actualizaciones** que la versión sea **7.1.4**.

## 3. Idioma, zona horaria y moneda

- **Ajustes > Generales:** título "TortuMar SV", zona horaria de El Salvador (UTC−6).
- **WooCommerce > Ajustes > General:** moneda **Dólar estadounidense (USD)**, país **El Salvador**.

## 4. Plugins a instalar

| Plugin | Para qué | Notas |
|---|---|---|
| **WooCommerce** | Tienda, carrito, pedidos, envíos | Plugin oficial |
| **WooCommerce PayPal Payments** | Cobro con PayPal | Plugin oficial de PayPal para WooCommerce |
| **GiveWP** | Donaciones únicas y por niveles | Versión gratuita; las donaciones recurrentes pueden requerir complementos de pago |
| **Contact Form 7** o **WPForms Lite** | Formulario de contacto | Envía las consultas a `mf21015@ues.edu.sv` |
| **Complemento de respaldos** (UpdraftPlus o el de Hostinger) | Copias de seguridad | Antes de cada actualización |

Instalar desde **Plugins > Añadir nuevo**. Activar solo lo necesario.

## 5. Configuración de WooCommerce

### 5.1 Pago contra entrega
- **WooCommerce > Ajustes > Pagos > Pago contra entrega:** activar y dejar la instrucción: "Pagarás al recibir tu pedido".

### 5.2 Pago con PayPal (modo simulación)
- Crear una aplicación **sandbox** en developer.paypal.com con la cuenta `awmoris@yahoo.com`.
- **WooCommerce > Ajustes > Pagos > PayPal:** activar **modo sandbox** y pegar el *Client ID* y *Secret* de sandbox.
- Pruebas: realizar compras de prueba y confirmar que el pedido aparece como **pagado** en WooCommerce.

### 5.3 Envíos
- **WooCommerce > Ajustes > Envío > Zonas:**
  - Zona 1: *Área metropolitana de San Salvador* — tarifa **$3.50** (pendiente de confirmar).
  - Zona 2: *Resto de El Salvador* — tarifa **$5.00** (pendiente de confirmar).
- El total de cada pedido = precio del producto + envío. Está cubierto por WooCommerce.

### 5.4 Productos
- Crear los seis productos de la tienda actual (camiseta, hoodie, termo, bolso tote, pulsera de vidrio de mar, kit "Adopta una tortuga").
- Precios del documento de planeación (sección 2.4).
- Cargar después los demás artículos del PDF cuando se tengan fotos.

### 5.5 Pedidos y responsable administrador
- **Usuarios > Añadir:** rol **Gestor de tienda** (*Shop manager*) para el responsable de pedidos. Puede ver y cambiar pedidos sin tocar el diseño ni los plugins.
- Estados de pedido a usar: **Pendiente de pago → Procesando → Completado** (y **En espera** para pagos contra entrega pendientes de cobro).
- **WooCommerce > Ajustes > Correo electrónico:** el aviso de **pedido nuevo** llega al administrador.

## 6. Donaciones con GiveWP

1. **GiveWP > Ajustes > Pagos:** activar PayPal (mismo modo sandbox).
2. **Formularios de donación:** crear un formulario con **niveles**. Propuesta:
   - Apoyo básico (estudiantes locales): $5
   - Protector de nidos: $25
   - Guardián de playa: $50
   - Aliado de la conservación (empresas y diáspora): $100 o monto libre
3. **Concepto de la donación:** se define en el formulario como texto fijo, por ejemplo:
   *"Donación para la protección de nidos de tortugas marinas, limpieza de playas y educación ambiental en El Salvador."*
4. **Recibo:** ver sección 7.

## 7. Recibo de donación con la identidad de TortuMar SV

Plantilla lista en `wordpress/recibo-donacion/recibo-donacion.html`. Incluye logo, nombre de la organización, número de recibo, datos del donante, forma de pago, referencia de transacción, **concepto** y monto.

Forma de generarlo:
- **Opción A (recomendada):** usar la plantilla como base de la nota de correo que GiveWP envía después de cada donación (GiveWP > Ajustes > Correos electrónicos), usando los campos que GiveWP ofrece (nombre, monto, formulario, fecha, referencia).
- **Opción B:** complemento de recibos PDF de GiveWP (de pago), si se requiere archivo PDF descargable.

Datos pendientes para el recibo:
- **NIT o registro fiscal** de TortuMar SV. Si la ONG no lo tiene, el campo se muestra como "No aplica" y se retira del diseño.
- Confirmar si el recibo es **comprobante fiscal** o solo acreditación de donación (el pie de página lo indica como donación voluntaria).

## 8. Páginas del sitio

| Página | Contenido | Herramienta |
|---|---|---|
| Inicio | Hero, misión, ciclo, programas, impacto, participar | Página con bloques |
| Galería | Productos y servicios | Bloques de galería |
| Creadores | Equipo con foto, nombre, carné y rol | Bloques de columnas |
| Tienda | Catálogo | Páginas de WooCommerce |
| Carrito / Pagar | Carrito y pago | Páginas de WooCommerce |
| Donar | Formularios de GiveWP | Bloque de GiveWP |
| Contacto | Formulario | Contact Form 7 o WPForms |
| Políticas | Envíos, pagos, devoluciones, privacidad | Páginas de texto |

El diseño se llevará a WordPress con un **tema hijo** que use los colores y tipografías aprobados en la Fase 1.

## 9. Pruebas antes de publicar

- [ ] Compra de prueba con PayPal sandbox: el pedido queda como pagado.
- [ ] Compra de prueba contra entrega: el pedido queda pendiente de cobro.
- [ ] Total = producto + envío para ambas zonas.
- [ ] Donación de prueba en sandbox: aparece en GiveWP y llega el correo de recibo.
- [ ] Formulario de contacto: el mensaje llega a `mf21015@ues.edu.sv`.
- [ ] Menú funciona en móvil, tablet y escritorio.
- [ ] Correo oculto: la dirección no aparece en ninguna página, solo el formulario.

## 10. Pasar a producción

1. Cambiar PayPal de sandbox a **producción** con cuenta PayPal Business de TortuMar SV.
2. Desactivar el modo prueba de GiveWP.
3. Hacer una compra y una donación reales de monto mínimo y reembolsarlas.
4. Activar respaldos automáticos.

## 11. Administración diaria

- **Pedidos:** WooCommerce > Pedidos. Revisar diariamente en horario de atención (8:00 a. m. a 6:00 p. m.).
- **Donaciones:** GiveWP > Donaciones. Exportar a Excel cada mes para el informe a la junta directiva.
- **Actualizaciones:** WordPress, plugins y tema se actualizan después de hacer respaldo, nunca en horario de ventas.

## 12. Datos confirmados

| Dato | Valor |
|---|---|
| Dominio / subdominio | `tortumar.dsoftin.net` |
| Responsable de pedidos y donaciones | Rocío Guadalupe Escobar Rivera (rol *Gestor de tienda* y responsable de GiveWP) |
| Cuenta PayPal | `awmoris@yahoo.com` (modo sandbox) |
| PayPal Client ID (sandbox) | `BAAs2wzd2gGFlUAiEMj65omJNkS7oO5J_3frtguVYmkYNl0Dm4vQtJhP0nUccen32M1IpgbepIRJfNRkc8` |
| PayPal Secret | **No se guarda en este documento.** Se pega solo en el panel de WooCommerce y GiveWP. |
| Tarifas de envío | Área metropolitana $3.50 · Resto del país $5.00 |
| NIT (referencia para el recibo) | `0000-000000-000-0` |

Notas:
- El subdominio `tortumar.dsoftin.net` se crea en hPanel desde el dominio `dsoftin.net`, que debe estar administrado en la misma cuenta de Hostinger.
- Confirmar que el Client ID corresponde a una aplicación **sandbox**. Para producción se necesita otro Client ID de la cuenta PayPal Business.
- Después de la configuración, **regenerar el Secret** en developer.paypal.com, porque quedó expuesto en un mensaje.

## 13. Pendientes para esta fase

1. Acceso a hPanel de Hostinger (lo maneja el responsable técnico).
2. Crear el subdominio `tortumar` en `dsoftin.net` e instalar WordPress allí.
3. Regenerar el Secret de PayPal después de configurarlo.
4. Reemplazar el NIT de referencia por el NIT real cuando la organización lo tenga.
5. Dominio definitivo, si después se decide migrar desde el subdominio.

## 14. Despliegue desde Git (opci�n A)

- Repositorio: privado (GitHub o GitLab). Rama de producci�n: main.
- Ruta versionada: wp-content/themes/tortumar-child/.
- En hPanel (Git), conectar el repositorio y configurar la carpeta de destino:
  public_html/wp-content/themes/tortumar-child. Revisar la ruta exacta del subdominio antes de activar el despliegue autom�tico.
- Cada commit en main publica el tema. El n�cleo de WordPress, plugins, pedidos, donaciones y uploads no pasan por Git.
- Antes de cada despliegue: respaldo de la base de datos y de wp-content/uploads desde el complemento de respaldos.
- Para revertir: git revert <commit> y hacer push; Hostinger vuelve a desplegar.
- El tema hijo requiere el tema oficial **Twenty Twenty-Five** instalado en WordPress.
- Despu�s de activar el tema: en **Apariencia > Editor**, verificar que el encabezado y el pie se vean como el prototipo.
- P�ginas de WordPress a crear (con los nombres de la secci�n 8): galeria, creadores, 	ienda, carrito, contacto. Los slugs deben coincidir con los enlaces del encabezado.
- El carrito y el pago de la tienda los maneja WooCommerce. El script 	ienda.js del prototipo **no** se usa en WordPress.
