# Landing pública de SEU para Play Store

Documento para armar el sitio que Google Play exige antes de publicar la app. **No es la página hecha:** es el contenido, las URLs y lo que hay que pegar en Play Console.

El nombre público es **SEU**. La frase del logo es **Siempre estarás ubicado**. El sitio y la ficha de la tienda usan ese nombre, no el nombre interno del backend.

Play no pide una landing de marketing por sí sola. Pide dos direcciones HTTPS públicas, estables y sin login:

| Dónde se pega en Play Console | URL de este sitio |
|-------------------------------|-------------------|
| Política de privacidad | `https://[DOMINIO]/privacidad` |
| Eliminación de cuenta | `https://[DOMINIO]/eliminar-cuenta` |
| Sitio web del desarrollador (ficha) | `https://[DOMINIO]/` |

Si esas rutas no existen, o la privacidad es un PDF suelto, o borrar la cuenta solo se puede dentro de la app, la revisión rechaza el envío. La app permite crear cuenta, pide ubicación y guarda el chat del viaje: las dos URLs son obligatorias.

Antes de publicar hay que reemplazar los corchetes. No inventar razón social ni NIT.

| Hueco | Qué va |
|-------|--------|
| `[RAZÓN SOCIAL]` | Nombre legal de quien responde por los datos |
| `[NIT]` | NIT |
| `[DIRECCIÓN]` | Dirección de notificación |
| `[CIUDAD]` | Ciudad |
| `[CORREO]` | Correo de soporte y de habeas data, el mismo en todo el sitio |
| `[DOMINIO]` | Dominio del sitio, con HTTPS |

Un abogado en Colombia debe leer privacidad y términos antes de dejarlos en producción. El texto de abajo ya describe lo que la app hace de verdad, para que Play no encuentre una política genérica que no habla de ubicación ni de viajes.

## 1. Logo

Archivo: `docs/brand/seu-logo.jpg`.

Es el emblema circular completo. El lila pálido de alrededor es el margen de la foto, no parte de la marca. En el sitio se recorta al aro plateado. No se pone otro cuadro claro detrás del círculo.

El emblema lleva:

- Campo verde oscuro, tipo bosque.
- Aro plateado.
- Wordmark **SEU** en plata, con un pin de mapa formando la parte alta de la U.
- Carro visto desde arriba, en plata.
- Dos líneas de vía.
- Frase en script: *Siempre estarás ubicado*.

En la landing el logo va entero, con la frase. En el ícono de Play (512×512) también va el círculo completo, frase incluida, ocupando casi todo el cuadrado. El aro no debe quedar cortado: Play redondea el ícono y se come las esquinas. El círculo ya cabe en esa zona segura.

No reescribir “SEU” en otra tipografía al lado del emblema en el hero. El wordmark ya está dentro del círculo. Debajo, en texto normal, sí puede ir la frase otra vez como subtítulo.

Colores de partida, tomados del emblema. Se afinan mirando el archivo, no al revés:

| Uso | Color |
|-----|--------|
| Verde del círculo | `#143D2E` |
| Verde del hero, un poco más oscuro | `#0E2A20` |
| Plata de títulos sobre verde | `#F2F4F5` |
| Texto legal sobre blanco | `#1C1C1C` |
| Fondo de las páginas de texto | `#FFFFFF` |
| Línea o botón | `#143D2E` |

La portada es verde, como el logo. Privacidad, términos y eliminar cuenta son hoja blanca con el emblema chico arriba: Play y el usuario tienen que poder leerlas y copiarlas.

## 2. Páginas

Sitio estático. Cinco rutas, el mismo encabezado y el mismo pie.

```
/                     Inicio
/privacidad           Política de privacidad
/terminos             Términos del servicio
/eliminar-cuenta      Pedir el borrado de la cuenta
/soporte              Contacto
```

Encabezado: emblema pequeño que vuelve al inicio, y enlaces a Privacidad, Términos, Eliminar cuenta y Soporte.

Pie, en todas:

- `[RAZÓN SOCIAL]` — NIT `[NIT]`
- `[DIRECCIÓN]`, `[CIUDAD]`
- `[CORREO]`
- “SEU no está dirigida a menores de 18 años.”

No hace falta blog, tienda ni login del panel en este sitio.

## 3. Inicio

Hero verde oscuro, emblema centrado, y debajo:

**Siempre estarás ubicado**

Pide un conductor, mira la oferta y sigue el viaje en el mapa.

Un solo botón: “Descargar en Google Play”. Hasta que exista la ficha, el botón apunta a `#descarga` con el texto “Próximamente en Google Play”. No enlazar una ficha vacía.

Tres bloques, en texto corto, sin inventar funciones que la app no tiene:

1. **Pides el viaje.** Eliges origen, destino y categoría. Ves la tarifa antes de confirmar. El conductor ofrece y tú eliges. Nadie te asigna un carro solo.
2. **Ves dónde va.** Con el viaje en curso, el mapa muestra la posición del conductor. Origen y destino quedan en el recibo.
3. **Pagas claro.** En esta versión el pago de la app es en efectivo al conductor. El pago en línea se muestra solo cuando esté activo.

Cierre del inicio, en tres enlaces con una línea cada uno:

- Cómo tratamos tus datos → `/privacidad`
- Cómo pedir que borremos tu cuenta → `/eliminar-cuenta`
- Escribir a soporte → `/soporte`

Eso basta para que el revisor de Play encuentre las dos URLs desde la portada.

## 4. Privacidad

Título: **Política de privacidad de SEU**

Primera línea visible: **Última actualización: [FECHA]**

El texto que sigue es el que se publica. Los corchetes se reemplazan; el resto se deja, porque describe el sistema actual.

---

`[RAZÓN SOCIAL]`, identificada con NIT `[NIT]` y domicilio en `[DIRECCIÓN]`, `[CIUDAD]`, es quien responde por los datos personales que recoge la app SEU. Correo: `[CORREO]`.

SEU sirve para pedir un viaje, recibirlo como conductor y hacer el seguimiento de ese viaje. No es una red social, no muestra publicidad de terceros y no está dirigida a menores de 18 años. No hay módulo infantil.

### Qué datos recogemos

Cuenta. Nombre, correo, contraseña (solo guardamos un hash, no la clave en claro), teléfono, país y ciudad. Si pides ser conductor, también el número de documento y el estado de esa solicitud (pendiente, aprobado, rechazado, suspendido o inactivo).

Viaje. Origen y destino (dirección y coordenadas), ciudad, categoría del vehículo, distancia y duración que envía la app, tarifa sugerida y tarifa acordada, método de pago (efectivo o pago en línea), estado del viaje, recibo y, si se cancela, el motivo.

Ubicación precisa. La usamos cuando hace falta para el servicio:

- para convertir tu posición en una dirección de origen, si tú lo pides;
- si eres conductor y te conectas, para mostrar viajes cerca y para que el mapa del viaje tenga tu punto;
- durante el viaje asignado, el conductor envía la posición cada pocos segundos y el pasajero la ve;
- si alguien usa el botón de auxilio (SOS), guardamos el punto y la nota para que el administrador la vea.

No pedimos ubicación en segundo plano con la app cerrada. Si más adelante eso cambia, esta política y la ficha de Play se actualizan antes de publicar esa versión.

Chat del viaje. Texto, una ubicación que tú eliges enviar y fotos (JPG, PNG o WEBP, hasta 5 MB). La foto se guarda en nuestra base de datos. El otro participante del viaje la puede ver. El administrador de SEU puede leer el chat y cerrarlo. No hay chat con comercios ni con un bot.

Calificación. Nota de 1 a 5, comentario opcional y motivos de una lista (por ejemplo puntualidad o vehículo limpio).

Pago. Registramos si el viaje fue en efectivo o por pasarela, el valor y el estado del cobro. En esta versión no guardamos número de tarjeta ni billetera. El pago en línea permanece apagado hasta que haya un proveedor configurado. Cuando se encienda, el cobro lo hace ese proveedor y su nombre se agrega a esta página.

Auxilio. El SOS no llama a la policía ni al 123. Solo crea una alerta interna con la coordenada.

### Para qué los usamos

Para crear la cuenta, cotizar, buscar conductor, mostrar el mapa del viaje, el chat, el recibo, la calificación y las alertas de seguridad. También para calcular la comisión del viaje y, en efectivo, la comisión que queda anotada al conductor. No vendemos datos. No los usamos para publicidad de terceros.

### Con quién se comparten

Con la otra persona del viaje: el pasajero ve el nombre del conductor, su calificación y la placa; el conductor ve el nombre del pasajero y su calificación. El teléfono completo lo ve el administrador, no el otro usuario en la ficha del viaje.

Con el administrador de la plataforma, que puede ver viajes, mapa, clientes, conductores y el chat.

Con encargados que alojan el servicio: la API en Vercel y la base de datos en MongoDB Atlas. Al buscar una dirección, la consulta (y, si la app la envía, una coordenada aproximada para centrar los resultados) sale hacia el proveedor de mapas. Hoy ese proveedor es OpenStreetMap (Nominatim). Si se cambia a Google, esta frase se actualiza.

No hay SDK de anuncios ni de analítica en esta versión. Si se agrega uno, se dice aquí qué dato manda y para qué, antes de publicar esa versión.

### Cuánto tiempo los guardamos

La cuenta sigue mientras esté activa. Si pides eliminarla, aplican los plazos de `/eliminar-cuenta`.

Los viajes terminados, recibos y registros de pago se conservan cinco años, como soporte de la operación. Las alertas de auxilio y los chats de un viaje se conservan dos años. Pasado ese plazo se borran o se dejan de forma que ya no identifiquen a la persona, salvo que una autoridad pida conservarlos.

### Tus derechos

Puedes conocer, actualizar, rectificar y pedir la supresión de tus datos, y revocar la autorización cuando no exista un deber legal de conservarlos. Escríbenos a `[CORREO]` o usa `/eliminar-cuenta`. Respondemos en un plazo máximo de quince días hábiles.

La queja ante la Superintendencia de Industria y Comercio sigue disponible. Esta página no la reemplaza.

### Seguridad

La contraseña no se guarda en claro. El acceso a la API usa un token de corta duración. Nadie puede prometer que un servicio en internet es imposible de vulnerar. Si ocurre un incidente que te afecte, te avisamos por el correo de la cuenta.

### Cambios

Si esta política cambia, actualizamos la fecha de arriba. Si el cambio es grande (por ejemplo, cobrar con un proveedor nuevo o pedir ubicación en segundo plano), lo verás en la app antes de seguir usándola.

---

## 5. Términos

Título: **Términos del servicio de SEU**

Primera línea: **Última actualización: [FECHA]**

---

Estos términos aplican a la app SEU y al sitio `[DOMINIO]`, operados por `[RAZÓN SOCIAL]`, NIT `[NIT]`.

SEU conecta a quien pide un viaje con un conductor que ofrece hacerlo. SEU no es el conductor ni el dueño del vehículo. El contrato de transporte del viaje es entre pasajero y conductor. `[RAZÓN SOCIAL]` presta la plataforma: la cuenta, la cotización, la oferta, el mapa, el chat y el recibo.

Para crear una cuenta hay que tener 18 años o más, dar datos ciertos y mantener la contraseña en reserva. Una cuenta es personal.

El pasajero arma el viaje, ve la tarifa sugerida y confirma. Los conductores habilitados pueden ofrecer un valor dentro del rango que muestra la app. El pasajero elige una oferta. No hay asignación automática.

El precio que vale es el de la oferta aceptada. En efectivo, el pasajero se lo paga al conductor al final. La comisión de la plataforma queda registrada. El pago en línea, mientras figure desactivado, no se puede usar para confirmar un viaje.

El conductor solo puede conectarse si la plataforma lo aprobó y tiene un vehículo asignado y activo. La posición que envía debe ser la real.

Se puede cancelar antes de que el viaje empiece, con un motivo. Un viaje ya iniciado solo lo cancela el administrador.

Está prohibido usar SEU para hostigar, enviar contenido ilegal por el chat, falsear la ubicación o crear cuentas a nombre de otra persona. Podemos suspender una cuenta de conductor o de pasajero por eso.

El botón de auxilio avisa al administrador con la ubicación. No contacta a las autoridades. En una emergencia, llama al 123.

El recibo del viaje muestra el valor, la distancia y la duración. No es una factura electrónica.

La cuenta se puede cerrar desde `/eliminar-cuenta`. Borrar la cuenta no borra en el acto los viajes y pagos que la ley o la sección de privacidad mandan conservar.

El servicio se ofrece como está. No prometemos que siempre habrá un conductor disponible ni un tiempo exacto de llegada. La duración que ves al cotizar es un estimado que calcula la app.

Estos términos se rigen por las leyes de Colombia. Cualquier disputa se lleva ante los jueces de `[CIUDAD]`.

---

## 6. Eliminar cuenta

Esta es la URL que se pega en Play Console, en la sección de seguridad de los datos, campo de eliminación de cuenta. Tiene que abrir sin tener la app instalada.

Título: **Eliminar tu cuenta de SEU**

Texto visible, en este orden:

Puedes pedir que eliminemos la cuenta de SEU asociada a tu correo. No necesitas tener la app instalada.

Qué se borra en un plazo de 30 días corridos desde la solicitud:

- nombre, teléfono, correo y contraseña de la cuenta;
- la sesión y el acceso a la app;
- si eras conductor, el documento y el estado de la solicitud, siempre que no haya un deber de conservarlos por un viaje o un pago todavía vigente.

Qué no se borra de una vez, y por qué:

- viajes terminados, recibos y registros de pago: cinco años, como soporte de la operación;
- chat del viaje y alertas de auxilio: dos años, por seguridad.

Esos registros dejan de estar atados a una cuenta con la que se pueda entrar. No se usan para publicidad.

Si tienes un viaje en curso, la eliminación empieza cuando ese viaje termina o se cancela.

Formulario, una sola columna:

| Campo | Regla |
|-------|--------|
| Correo de la cuenta | Obligatorio, el mismo con el que se registró |
| Nombre | Obligatorio |
| Mensaje | Opcional. Ejemplo: “Quiero eliminar mi cuenta” |
| Casilla | Obligatoria: “Entiendo qué datos se borran y cuáles se conservan el tiempo indicado” |

Botón: **Enviar solicitud**.

Al enviar, la página confirma: “Recibimos tu solicitud. Te escribiremos a ese correo. El plazo máximo es de 30 días corridos.”

Hoy el backend no tiene una ruta pública de borrado. La página, mientras tanto, envía la solicitud al correo `[CORREO]` (un `mailto` o un formulario que llegue a esa bandeja). El superadmin borra o anonimiza la cuenta en ese plazo y responde. Cuando exista un endpoint, el formulario lo usa y el texto de esta página no cambia: Play ya conoce la URL.

No pidas la contraseña en esta página. Quien escribe desde el correo de la cuenta, o responde un mensaje de confirmación que mandemos a ese correo, es suficiente para saber que es el titular.

## 7. Soporte

Título: **Soporte**

Un párrafo: escribe a `[CORREO]` para problemas de acceso, un viaje, privacidad o esta solicitud de borrado. Incluye el correo de la cuenta y, si lo tienes, el código del viaje (`UB-…`).

No pongas un chat nuevo ni un número de WhatsApp salvo que de verdad lo vayan a atender. Play a veces escribe al correo de la ficha: tiene que ser el mismo `[CORREO]`.

## 8. Qué pegar en Play Console

Categoría sugerida: **Mapas y navegación**. Si la consola ofrece Viajes y guías locales y encaja mejor con el país, se puede usar esa. No marques la app como dirigida a niños. Grupo de edad: 18 años o más.

Descripción breve (menos de 80 caracteres):

```
Pide un viaje, sigue al conductor en el mapa y paga en efectivo.
```

Descripción completa:

```
SEU — Siempre estarás ubicado.

Pide un conductor en tu ciudad. Armas el origen y el destino, ves la tarifa y eliges la oferta. El conductor no se asigna solo.

Durante el viaje sigues la posición en el mapa, puedes escribir por el chat del viaje y, al terminar, ves el recibo y dejas una calificación.

El pago de esta versión es en efectivo, directo al conductor. El pago en línea aparece en la app solo cuando esté disponible.

SEU es para mayores de 18 años. En una emergencia usa el 123. El botón de auxilio de la app avisa al equipo de SEU; no reemplaza esa llamada.

Para eliminar tu cuenta, entra a la página indicada en la ficha, aunque ya no tengas la app instalada.
```

Ícono: 512×512, el emblema de `docs/brand/seu-logo.jpg` recortado al círculo, fondo verde del propio logo. Gráfico de funciones: el mismo emblema centrado sobre `#0E2A20`, sin el margen lila de la foto.

### Seguridad de los datos

Las respuestas tienen que coincidir con la privacidad. Si Play pregunta y la casilla no está en esta tabla, la respuesta es no.

| Pregunta de Play | Respuesta |
|------------------|-----------|
| ¿Se recogen datos? | Sí |
| ¿Se comparten con terceros? | Sí, con encargados (Vercel, MongoDB Atlas y el mapa OpenStreetMap) para prestar el servicio. No se venden |
| ¿Se cifran en tránsito? | Sí, HTTPS |
| ¿El usuario puede pedir el borrado? | Sí. URL: `https://[DOMINIO]/eliminar-cuenta` |
| Nombre | Sí. Cuenta, y se muestra a la otra persona del viaje |
| Correo | Sí. Cuenta |
| Teléfono | Sí. Cuenta y administración |
| Documento de identidad | Sí, solo si la persona pide ser conductor |
| Ubicación precisa | Sí. Viaje, conductor en línea y SOS. No en segundo plano |
| Fotos | Sí, las que la persona envía en el chat del viaje |
| Información financiera | Método y valor del viaje. No número de tarjeta |
| Mensajes en la app | Sí, el chat de ese viaje |
| Interacciones en la app | Viajes, ofertas y calificaciones |
| Publicidad o analítica | No |
| Datos de niños | No se dirigen a menores |

Permisos de Android que la ficha debe poder explicar: ubicación precisa (mientras la app se usa) e internet. La cámara o la galería solo si el chat abre el selector de fotos; no se piden contactos, SMS ni micrófono.

## 9. Cuando el sitio esté en línea

1. Sustituir todos los corchetes.
2. Comprobar que `/privacidad` y `/eliminar-cuenta` abren sin cuenta y en el celular.
3. Pegar esas dos URLs en Play Console.
4. Completar la seguridad de los datos con la tabla de arriba.
5. Poner el mismo `[CORREO]` en la ficha y en el pie del sitio.
6. En la app Flutter, enlazar Privacidad y Eliminar cuenta a esas URLs. Play también mira que dentro de la app se pueda llegar a borrar la cuenta; la web no reemplaza ese camino, lo acompaña.
