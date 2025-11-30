# Configuraciones y Propiedades Clave de CSS

## 1. Introducción y Sintaxis Básica

CSS, abreviatura de **Cascade Style Sheets** (Hojas de Estilo en Cascada), es un lenguaje de texto que se incrusta en las páginas web para definir su formato [1]. CSS actúa sobre los elementos HTML para definir cómo se mostrarán en pantalla o en otros dispositivos [1].

La sintaxis fundamental de CSS sigue la estructura de **selector, seguido de un bloque de declaraciones** (propiedades y valores) [2, 3].

### Propiedad: Estructura Básica de Regla CSS

Una regla CSS consiste en un **selector** que indica a qué elemento se aplica el formato, seguido de un bloque de **formato** indicado por un conjunto de propiedades y valores [2].

| Configuración | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **Sintaxis** | La estructura general es `selector { propiedad1: valor1; propiedad2: valor2; }` [3]. | ```css p { color:red; text-align:center; } ``` [3] |
| **Comentarios** | El texto del comentario se encierra entre los símbolos `/*` y `*/` [3]. | ```css p { /* Esto es un comentario */ text-decoration:underline; } ``` [3] |

---

## 2. Modelo de Cajas (Box Model)

El **modelo de cajas** ("box model") es una característica fundamental de CSS, donde todos los elementos de las páginas se representan mediante cajas rectangulares que se crean automáticamente con cada etiqueta HTML [4, 5]. Cada caja se compone de: Contenido, Relleno (`padding`), Borde (`border`) y Margen (`margin`) [6].

### Propiedad: Dimensiones (`width` y `height`)

Se utilizan para asignar tamaños específicos (ancho y alto) a los elementos de un documento HTML [7].

| Configuración | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`width` / `height`** | Establece el ancho y el alto de la caja [7]. | `div { width: 300px; height: 150px; }` |
| **`overflow`** | Determina qué sucede si el contenido es demasiado grande y no cabe dentro del elemento [8]. | `div { overflow: scroll; }` |

### Propiedad: Margen (`margin`)

Se utilizan para crear un espacio **alrededor** de los elementos, fuera de cualquier borde definido [8].

| Configuración | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`margin`** | Propiedad *shorthand* para definir los cuatro márgenes de forma simultánea [8]. | `margin: .5em 1em;` (Superior/Inferior: 0.5em, Izquierdo/Derecho: 1em) [9, 10] |
| **Márgenes Verticales** | Los márgenes verticales (`margin-top` y `margin-bottom`) solo se pueden aplicar a elementos de bloque e imágenes [11]. | `div { margin-top: 10px; }` |

### Propiedad: Relleno (`padding`)

Los espaciados (`padding`) son los espacios que existen **entre los bordes del elemento y su contenido** [12].

| Configuración | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`padding`** | Propiedad *shorthand* para establecer los cuatro rellenos de forma simultánea, con la misma notación que `margin` [13]. | `body { padding: 1em 2em 3em 4em; }` (Superior: 1em, Derecho: 2em, Inferior: 3em, Izquierdo: 4em) [14] |

### Propiedad: Bordes (`border`)

Permite modificar el aspecto de los cuatro bordes de la caja de un elemento, pudiendo establecer su anchura, color y estilo [14, 15].

| Configuración | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`border-width`** | Define el grosor de los cuatro bordes (por ejemplo, en píxeles) [15, 16]. | `div { border-width: 5px 10px; }` |
| **`border-style`** | Establece el estilo de los bordes (por ejemplo, `solid`, `dashed`, `dotted`) [17, 18]. | `div { border-style: solid; }` |
| **`border-color`** | Establece el color de los bordes [17]. | `div { border-color: blue; }` |

---

## 3. Colores, Fondos e Imágenes

CSS define diversas propiedades para manipular los colores del texto, fondos e imágenes [19].

### Propiedad: Colores (`color` y formatos)

Los colores se pueden especificar usando 4 formas alternativas: **Palabra clave**, **Formato RGB**, **Formato hexadecimal** y **Formato HSL** [20-22].

| Configuración | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`color`** | Propiedad básica para establecer el color del texto [23]. | `p { color: purple; }` [20] |
| **Formato Hexadecimal** | Notación más utilizada, consiste en una cifra hexadecimal precedida de `#` (ej. `#FF0000` es rojo puro) [21]. | `p { color: #8A8E27; }` [24] |
| **Canales Alfa (RGBA/HSLA)** | Permiten establecer una **transparencia parcial** mediante un parámetro alfa (entre 0.0 y 1.0) [25, 26]. | `div { background-color: rgba(76, 175, 80, 0.3); }` [26, 27] |

### Propiedad: Fondos (`background-*`)

El fondo puede ser un color simple (`background-color`) o una imagen (`background-image`) [28].

| Configuración | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`background-color`** | Establece el color de fondo [28]. | `body { background-color: #f0f0f0; }` |
| **`background-image`** | Muestra una imagen como fondo, indicada a través de su URL [29]. | `body { background-image: url("imagenes/fondo.png"); }` [29] |
| **`background-repeat`** | Controla la forma en que la imagen de fondo se repite. Valores comunes: `repeat` (por defecto), `no-repeat`, `repeat-x` (horizontal), `repeat-y` (vertical) [30, 31]. | `div { background-repeat: no-repeat; }` |
| **`background-position`** | Controla la posición de la imagen dentro del fondo del elemento [31]. | `div { background-position: center top; }` |
| **`background-size`** | Ajusta el tamaño de la imagen de fondo. Valores: `auto`, `length`, `cover`, `contain` [32, 33]. | `div { background-size: cover; }` |
| **`opacity`** | Establece una transparencia total sobre el elemento indicado, afectando también a los elementos hijos. El valor va de 0 (transparente) a 1 (visible) [34]. | `div { opacity: 0.5; }` |

---

## 4. Fuentes y Tipografías

CSS define propiedades para modificar la apariencia del texto y las tipografías [35].

| Propiedad | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`font-family`** | Indica el tipo de letra con el que se muestra el texto. Se recomienda listar varias opciones (familias genéricas) en caso de que la primera no esté disponible [36]. | `p { font-family: Arial, Helvetica, sans-serif; }` [24] |
| **`font-size`** | Modifica el tamaño de la fuente [37]. | `p { font-size: 16px; }` |
| **`font-weight`** | Controla la anchura o grosor de la letra (e.g., `normal`, `bold`, o valores numéricos) [37]. | `h1 { font-weight: normal; }` [24] |
| **`font-style`** | Permite variar el estilo (e.g., `normal`, `italic`, `oblique`) [38]. | `em { font-style: italic; }` |
| **`text-align`** | Establece la alineación horizontal de un texto (`left`, `right`, `center`, `justify`) [39]. | `p { text-align: justify; }` |
| **`text-decoration`** | Establece la decoración que se aplica al texto. Se utiliza a menudo `none` para eliminar el subrayado de los enlaces [40, 41]. | `a { text-decoration: none; }` |
| **`text-transform`** | Permite transformar el texto para mostrarlo en mayúsculas (`uppercase`), minúsculas (`lowercase`) o capitalizado (`capitalize`) [41, 42]. | `h1 { text-transform: uppercase; }` |
| **`text-shadow`** | Establece sombra al texto [43]. | `h1 { text-shadow: 3px 2px red; }` [43] |

---

## 5. Selectores

Los selectores permiten indicar a qué elemento o elementos de la página web se va a aplicar el formato CSS [2]. Existen selectores básicos y avanzados [44].

### Selectores Básicos

| Selector | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **Universal** (`*`) | Selecciona todos los elementos de la página [45]. | `* { color: black; }` [46] |
| **De Tipo/Etiqueta** | Selecciona todos los elementos cuya etiqueta HTML coincide con el valor del selector [46]. | `p { color: red; }` [46] |
| **De ID** (`#`) | Selecciona un único elemento de la página a través del valor de su atributo `id`. Se utiliza el símbolo de la almohadilla (`#`) [47, 48]. | `#destacado { color: red; }` [48] |
| **De Clase** (`.`) | Selecciona elementos que comparten el mismo valor en su atributo `class`. Se prefija con un punto (`.`) [49, 50]. | `.destacado { color: red; }` [50] |

### Selectores Avanzados y Pseudo-clases/Elementos

| Selector | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **Descendiente** | Selecciona un elemento contenido dentro de otro (separados por espacio en blanco), sin importar la profundidad [51, 52]. | `p span { color: red; }` [52] |
| **De Hijos** (`>`) | Selecciona un elemento que es **hijo directo** de otro [53, 54]. | `p > span { color: blue; }` [54] |
| **Adyacente** (`+`) | Selecciona elementos que son hermanos y están seguidos en el código HTML [55]. | `h1 + h2 { color: red; }` [55] |
| **De Atributos** | Aplica estilos a etiquetas que tengan ciertos atributos o valores de atributos [56]. | `a[href^="https:"] { color: blue; }` (Enlaces que comienzan con `https:`) [57] |
| **Pseudo-clase `:hover`** | Se activa cuando el usuario pasa el ratón por encima de un elemento [58]. | `a:hover { background-color: yellow; }` |
| **Pseudo-clase `:nth-child`** | Resulta útil para alternar estilos en estructuras (e.g., `odd` para impar, `even` para par) [59]. | `li:nth-child(odd){ background-color: green; }` [59] |
| **Pseudo-elemento `::first-letter`** | Se utiliza para agregar un estilo a la primera letra del selector especificado [60, 61]. | `p::first-letter { font-size: 200%; }` [61] |
| **Pseudo-elemento `::before` / `::after`** | Se utiliza para agregar contenido antes o después de un elemento. El valor del contenido se especifica mediante la propiedad `content` [61, 62]. | `p::after { content: " - ok -"; }` [62] |

---

## 6. Maquetación y Colocación

Estas configuraciones controlan cómo se muestran y se ubican los elementos en la página.

### Propiedad: Display y Visibilidad

| Propiedad | Explicación de Valores Clave | Ejemplo |
| :--- | :--- | :--- |
| **`display`** | Modifica la forma en que se visualiza un elemento. Permite cambiar un elemento de bloque a línea o viceversa [63]. | `span { display: block; }` |
| **`display: block`** | Ocupa todo el ancho del contenedor, empieza en una nueva línea, acepta `width` y `height`, y los márgenes/rellenos verticales empujan y separan [64]. | `div { display: block; }` |
| **`display: inline`** | Ocupa solo el ancho del contenido, no empieza en nueva línea, y **no acepta `width` ni `height`**. Los márgenes/rellenos verticales no empujan [64]. | `a { display: inline; }` |
| **`display: inline-block`** | Ocupa solo el ancho del contenido, no empieza en nueva línea, pero **sí acepta `width` y `height`** [65]. | `img { display: inline-block; }` |
| **`display: none`** | Oculta completamente un elemento, haciendo que **desaparezca de la página** y el resto de elementos ocupen su lugar [66, 67]. | `div.oculto { display: none; }` |
| **`visibility: hidden`** | Hace invisible un elemento, pero el navegador **mantiene el vacío** con el mismo tamaño que ocupaba, sin que el resto de elementos modifiquen su posición [65, 67]. | `div.invisible { visibility: hidden; }` |

### Propiedad: Posicionamiento (`position`)

Define el modelo de posicionamiento de una caja, lo que influye en cómo se interpreta su desplazamiento mediante `top`, `right`, `bottom` y `left` [68-70].

| Valor de `position` | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`static`** | Posicionamiento por defecto (normal), ignora las propiedades de desplazamiento [69, 71]. | `div { position: static; }` |
| **`relative`** | La caja se posiciona de forma normal y luego se desplaza respecto a su posición original [71, 72]. | `div { position: relative; top: 10px; }` |
| **`absolute`** | La posición se establece de forma absoluta respecto al elemento contenedor posicionado (el ancestro más cercano con `position` diferente de `static`) [73-75]. | `div { position: absolute; right: 0; }` |
| **`fixed`** | Similar a `absolute`, pero su posición es **inamovible** dentro de la ventana del navegador, sin importar el *scroll* [73, 74, 76]. | `nav { position: fixed; top: 0; }` |
| **`sticky`** | Alterna entre `relative` y `fixed` dependiendo de la posición de desplazamiento del usuario [69, 73, 77]. | `div.sticky { position: sticky; top: 0; }` [78] |
| **`z-index`** | Se utiliza para controlar el orden de apilamiento (profundidad) de los elementos posicionados [70]. | `div.adelante { z-index: 10; }` |

### Propiedad: Desplazamiento (`float`)

Permite que un elemento "flote" a la izquierda (`left`) o a la derecha (`right`) de otro elemento, sacando la caja del flujo normal de la página [78-80].

| Configuración | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`float`** | Posiciona una caja flotante a la izquierda o derecha. El valor `none` elimina esta característica [80]. | `img { float: left; margin-right: 1em; }` |
| **`clear`** | Fuerza a un elemento a mostrarse debajo de cualquier caja flotante, indicando el lado que no debe ser adyacente (`left`, `right`, `both`) [81, 82]. | `p { clear: both; }` |

### Propiedad: Flexbox (Layout de una sola dimensión)

Flexbox es un sistema para crear estructuras de una sola dimensión, facilitando que los elementos se adapten y coloquen automáticamente [83]. Las propiedades se dividen entre las que aplican al **Contenedor Padre** y a los **Ítems Hijos** [84, 85].

#### Propiedades del Contenedor Flex

| Propiedad | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`display: flex`** | Activa el modo flexbox para el contenedor [86]. | `.contenedor { display: flex; }` |
| **`flex-direction`** | Modifica la dirección del eje principal (`row` por defecto, `column`, `row-reverse`, `column-reverse`) [87, 88]. | `.contenedor { flex-direction: column; }` |
| **`flex-wrap`** | Establece si los ítems se colocan en una sola línea o en varias (`nowrap`, `wrap`, `wrap-reverse`) [89]. | `.contenedor { flex-wrap: wrap; }` |
| **`justify-content`** | Reparte el espacio libre disponible en la **dirección principal** (e.g., `center`, `space-between`, `space-around`) [90]. | `.contenedor { justify-content: space-around; }` |
| **`align-items`** | Alinea los ítems en el **eje secundario** (perpendicular al `flex-direction`). Funciona para una o varias líneas [91, 92]. | `.contenedor { align-items: center; }` |
| **`align-content`** | Alinea el **conjunto de las líneas** de ítems cuando hay varias líneas (`flex-wrap: wrap`) [93, 94]. | `.contenedor { align-content: flex-start; }` |

#### Propiedades de los Ítems Flex Hijos

| Propiedad | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`flex-grow`** | Factor de expansión. Indica la proporción en que un ítem crece para ocupar el espacio disponible en la dirección principal [85, 95, 96]. | `.item { flex-grow: 1; }` |
| **`flex-shrink`** | Factor de compresión. Indica la proporción en que un ítem se estrecha si el contenido no cabe [95, 96]. | `.item { flex-shrink: 0; }` |
| **`flex-basis`** | Establece el tamaño inicial del elemento antes de que se reparta el espacio libre [97, 98]. | `.item { flex-basis: 150px; }` [99] |
| **`flex`** | Propiedad *shorthand* para `flex-grow`, `flex-shrink` y `flex-basis` [100]. | `.item { flex: 1 1 0; }` [100] |
| **`order`** | Modifica el orden de los ítems según una secuencia numérica (los valores más pequeños van primero) [101]. | `.item-3 { order: -1; }` |
| **`align-self`** | Permite que un ítem individual tenga una alineación en la dirección secundaria distinta a la establecida por `align-items` en el contenedor [102]. | `.item-especial { align-self: flex-end; }` |

### Propiedad: Grid CSS (Layout de dos dimensiones)

Grid CSS permite crear estructuras de cuadrícula potentes y sencillas [103].

| Propiedad | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`display: grid`** | Activa la cuadrícula grid en el elemento contenedor [104]. | `.contenedor { display: grid; }` |
| **`grid-template-columns`** | Indica las dimensiones de cada columna de la cuadrícula [104, 105]. | `.contenedor { grid-template-columns: 1fr 1fr 1fr; }` (3 columnas iguales) [105] |
| **`grid-template-rows`** | Indica las dimensiones de cada fila de la cuadrícula [104, 105]. | `.contenedor { grid-template-rows: 100px auto; }` |
| **`grid-template-areas`** | Permite nombrar y posicionar cada área de la cuadrícula en el contenedor padre [106, 107]. | `.contenedor { grid-template-areas: "head head" "menu main" "foot foot"; }` [107] |
| **`grid-area` (Ítem)** | Asigna un ítem hijo al nombre del área definido en el contenedor [106]. | `.item-1 { grid-area: head; }` [107] |

---

## 7. Representación de Datos (Listas)

CSS permite personalizar la apariencia de las listas ordenadas (`<ol>`) y no ordenadas (`<ul>`) [108, 109].

| Propiedad | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`list-style-type`** | Controla el tipo de viñeta o numeración (e.g., `disc`, `circle`, `square`, `decimal`, `lower-roman`) [109-111]. | `ul { list-style-type: square; }` |
| **`list-style-position`** | Controla la colocación de las viñetas, dentro o fuera del contenido de la lista [112]. | `li { list-style-position: inside; }` |
| **`list-style-image`** | Permite mostrar una imagen propia en vez de una viñeta automática [113]. | `li { list-style-image: url('bullet.png'); }` |
| **`list-style`** | Propiedad *shorthand* para especificar el tipo, la posición y la imagen en una sola declaración [113, 114]. | `ul { list-style: square inside; }` [114] |

---

## 8. CSS Avanzado y Responsive

### Propiedad: Sombras y Bordes

| Propiedad | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`box-shadow`** | Aplica sombra a los elementos. Requiere desplazamiento horizontal (obligatorio), vertical (obligatorio), y opcionalmente radio de difuminado, radio de expansión y color [115-117]. | `div { box-shadow: 10px 10px 5px grey; }` |
| **`border-radius`** | Permite crear bordes con esquinas redondeadas. Se puede especificar un radio para el borde de las esquinas [117, 118]. Es posible redondear las esquinas de forma elíptica [119]. | `div { border-radius: 15px; }` [118] |
| **`border-image-source`** | Fuente de la imagen que se va a usar en el borde [120]. | `div { border-image-source: url(border.png); }` |

### Propiedad: Gradientes

Permiten mostrar transiciones suaves entre dos o más colores, definiendo gradientes lineales o radiales [27, 121].

| Tipo de Gradiente | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **Gradiente Lineal** | Va hacia arriba, abajo, izquierda, derecha o en diagonal [121]. | `div { background: linear-gradient(red, yellow); }` [122] |
| **Gradiente Radial** | Definido por su centro [121]. | `div { background: radial-gradient(circle, red, yellow); }` [123] |
| **Gradiente Recursivo** | Añadiendo el prefijo `repeating-` se consigue que el efecto se repita constantemente [123, 124]. | `div { background: repeating-linear-gradient(red 0px, white 10px); }` |

### Propiedad: Media Queries (Diseño Web Responsive)

Las *Media Queries* son la solución técnica para adaptar las interfaces web al entorno del usuario, permitiendo aplicar estilos CSS solo si se cumplen ciertas condiciones físicas del dispositivo [125, 126].

| Configuración | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **`@media` Rule** | Permite crear un bloque de código CSS que solo se procesará en los dispositivos que cumplan los criterios especificados (como ancho de pantalla o tipo de medio) [126, 127]. | ```css @media screen and (max-width: 640px) { body { background-color: blue; } } ``` [127, 128] |
| **Características Comunes** | Se inspeccionan características como `max-width`, `min-width`, `orientation`