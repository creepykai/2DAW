# Animaciones en CSS - Guía Completa

## Introducción

Las animaciones CSS permiten crear efectos visuales dinámicos sin necesidad de JavaScript. Se basan en el concepto de transiciones pero son más potentes y flexibles, permitiendo múltiples estados intermedios.

---

## Transformaciones CSS

### Concepto General

Las transformaciones permiten cambios de forma, tamaño y posición de un elemento. CSS admite transformaciones **2D y 3D**.

#### Propiedades Principales

| Propiedad            | Formato                         | Significado                                                        |
| -------------------- | ------------------------------- | ------------------------------------------------------------------ |
| `transform`        | `función 1, función 2, ...` | Aplica una o varias funciones de transformación sobre un elemento |
| `transform-origin` | `pos-x pos-y pos-z`           | Cambia el punto de origen del elemento en una transformación      |

---

### Transformaciones 2D

#### **translate() - Traslación**

Mueve un elemento de un lugar a otro.

- Valores positivos en X: movimiento a la derecha
- Valores negativos en X: movimiento a la izquierda
- Valores positivos en Y: movimiento hacia abajo
- Valores negativos en Y: movimiento hacia arriba

| Función            | Significado                                      |
| ------------------- | ------------------------------------------------ |
| `translate(x, y)` | Traslada horizontalmente (x) y verticalmente (y) |
| `translateX(x)`   | Traslada solo horizontalmente                    |
| `translateY(y)`   | Traslada solo verticalmente                      |

**Ejemplo:**

```css
div {
  transform: translate(50px, 100px);
}
```

---

#### **scale() - Escalado**

Aumenta o reduce el tamaño de un elemento basándose en un factor de escala.

| Función          | Significado                                         |
| ----------------- | --------------------------------------------------- |
| `scale(fx, fy)` | Reescala con factor horizontal (fx) y vertical (fy) |
| `scaleX(fx)`    | Reescala solo horizontalmente                       |
| `scaleY(fy)`    | Reescala solo verticalmente                         |

**Ejemplo:**

```css
transform: scale(2, 2);  /* Amplia al doble del tamaño original */
```

---

#### **rotate() - Rotación**

Gira el elemento el número de grados indicado.

| Función          | Significado                           |
| ----------------- | ------------------------------------- |
| `rotate(deg)`   | Rotación 2D en grados                |
| `rotateX(xdeg)` | Rotación solo en el eje horizontal X |
| `rotateY(ydeg)` | Rotación solo en el eje vertical Y   |

**Ejemplo:**

```css
transform: rotate(5deg);  /* Rotación de 5 grados */
```

---

#### **skew() - Sesgo**

Inclina o sesga un elemento.

| Función       | Significado                           |
| -------------- | ------------------------------------- |
| `skew(x, y)` | Sesga horizontalmente y verticalmente |
| `skewX(x)`   | Sesga solo horizontalmente            |
| `skewY(y)`   | Sesga solo verticalmente              |

---

### Transformaciones 3D

Para trabajar en tres dimensiones, se utiliza el eje Z además de X e Y.

| Función                   | Significado                                      |
| -------------------------- | ------------------------------------------------ |
| `translateZ(z)`          | Traslada en el eje de profundidad Z              |
| `translate3d(x, y, z)`   | Translación 3D aplicando parámetros a cada eje |
| `scaleZ(fz)`             | Reescala con factor de profundidad               |
| `scale3d(fx, fy, fz)`    | Escalado 3D aplicando factores a cada eje        |
| `rotateZ(zdeg)`          | Rotación en el eje de profundidad Z             |
| `rotate3d(x, y, z, deg)` | Rotación 3D aplicando grados a cada eje         |
| `perspective(n)`         | Establece una perspectiva 3D                     |
| `matrix3d(...)`          | Matriz de transformación 3D (16 valores)        |

---

## Transiciones CSS

### Concepto

Las transiciones crean un efecto suavizado entre un estado inicial y un estado final. Son más simples que las animaciones, ya que solo tienen dos estados.

### Propiedades de Transición

| Propiedad                      | Valores                                                                              | Descripción                            |
| ------------------------------ | ------------------------------------------------------------------------------------ | --------------------------------------- |
| `transition-property`        | `nombre-propiedad` o `all`                                                       | Especifica qué propiedad será animada |
| `transition-duration`        | Tiempo (ej:`2s`, `500ms`)                                                        | Duración total de la transición       |
| `transition-timing-function` | `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier()` | Tipo de aceleración/desaceleración    |
| `transition-delay`           | Tiempo (ej:`1s`, `500ms`)                                                        | Retraso antes de iniciar la transición |

---

### transition-property

Especifica qué propiedad CSS será afectada por la transición. Se puede indicar una propiedad específica (`width`, `color`, etc.) o `all` para aplicar a todas.

**Ejemplo:**

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s, height 4s;
}

div:hover {
  width: 300px;
  height: 300px;
}
```

---

### transition-duration

Define cuánto tiempo durará la transición desde inicio hasta finalización.

**Recomendaciones:**

- Usar valores cortos para transiciones rápidas y elegantes
- Evitar duraciones demasiado largas (pueden causar parpadeos o resultar molestas)

**Ejemplo:**

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition-property: width;
  transition-duration: 5s;
}

div:hover {
  width: 300px;
}
```

---

### transition-timing-function

Controla la velocidad de la transición en diferentes momentos.

| Valor                        | Inicio | Transcurso | Final  | cubic-bezier              |
| ---------------------------- | ------ | ---------- | ------ | ------------------------- |
| `ease`                     | Lento  | Rápido    | Lento  | `(0.25, 0.1, 0.25, 1)`  |
| `linear`                   | Normal | Normal     | Normal | `(0, 0, 1, 1)`          |
| `ease-in`                  | Lento  | Normal     | Normal | `(0.42, 0, 1, 1)`       |
| `ease-out`                 | Normal | Normal     | Lento  | `(0, 0, 0.58, 1)`       |
| `ease-in-out`              | Lento  | Normal     | Lento  | `(0.42, 0, 0.58, 1)`    |
| `cubic-bezier(A, B, C, D)` | -      | -          | -      | Transición personalizada |

**Explicación de valores:**

- **linear**: Velocidad constante
- **ease**: Comienza suavemente, continúa rápido, termina suavemente
- **ease-in**: Comienza lentamente, acelera hacia el final
- **ease-out**: Comienza rápido, desacelera hacia el final
- **ease-in-out**: Combinación de ease-in y ease-out

**Nota:** En www.cubic-bezier.com se puede visualizar interactivamente la velocidad según los parámetros.

---

### transition-delay

Retrasa el inicio de la transición los segundos especificados.

**Ejemplo:**

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 3s;
  transition-delay: 1s;  /* Comienza después de 1 segundo */
}

div:hover {
  width: 300px;
}
```

---

### transition (Propiedad de Atajo)

Resume todas las propiedades de transición en una sola línea.

**Sintaxis:**

```css
transition: <property> <duration> <timing-function> <delay>;
```

**Ejemplo:**

```css
a {
  background: #DDD;
  color: #222;
  padding: 2px;
  border: 1px solid #AAA;
  transition: all 0.2s ease-in 0s;
}

a:hover {
  background: #FFF;
  color: #666;
  padding: 8px 14px;
  border: 1px solid #888;
}
```

---

## Animaciones CSS

### Concepto

Las animaciones amplían el concepto de transiciones permitiendo múltiples estados intermedios. Se definen mediante fotogramas (keyframes) que especifican cómo debe cambiar el elemento en diferentes puntos de la animación.

### Componentes Necesarios

1. **@keyframes**: Define los fotogramas de la animación
2. **Propiedades CSS de animación**: Controlan el comportamiento

---

### Propiedades de Animación

| Propiedad                     | Valores por Defecto | Significado                              |
| ----------------------------- | ------------------- | ---------------------------------------- |
| `animation-name`            | -                   | Nombre del fotograma a utilizar          |
| `animation-duration`        | `0`               | Duración total de la animación         |
| `animation-timing-function` | `ease`            | Velocidad de la animación               |
| `animation-delay`           | `0`               | Retraso antes de iniciar                 |
| `animation-iteration-count` | `1`               | Número de repeticiones (o `infinite`) |
| `animation-direction`       | `normal`          | Orden de reproducción de fotogramas     |
| `animation-fill-mode`       | `none`            | Estilos aplicados antes/después         |
| `animation-play-state`      | `running`         | `running` o `paused`                 |

---

### animation-name

Especifica el nombre del fotograma (@keyframes) a utilizar.

---

### animation-duration

Define cuánto tiempo durará una iteración completa de la animación.

---

### animation-timing-function

Controla la velocidad de la animación. Utiliza los mismos valores que las transiciones: `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, o `cubic-bezier()`.

---

### animation-delay

Retrasa el inicio de la animación los segundos especificados.

---

### animation-iteration-count

Indica cuántas veces se repite la animación.

- Valor numérico: número específico de repeticiones (ej: `3`)
- `infinite`: se repite continuamente

---

### animation-direction

Define el orden en que se reproducen los fotogramas.

| Valor                 | Significado                                 |
| --------------------- | ------------------------------------------- |
| `normal`            | Fotogramas del principio al final           |
| `reverse`           | Fotogramas del final al principio           |
| `alternate`         | Iteraciones pares: normal, impares: inversa |
| `alternate-reverse` | Iteraciones impares: normal, pares: inversa |

---

### animation-fill-mode

Especifica qué estilos mostrar cuando la animación ha finalizado.

| Valor         | Significado                                  |
| ------------- | -------------------------------------------- |
| `none`      | Sin estilos especiales antes/después        |
| `backwards` | Muestra el estado inicial antes de empezar   |
| `forwards`  | Muestra el estado final después de terminar |
| `both`      | Combinación de backwards y forwards         |

---

### animation-play-state

Controla si la animación está en reproducción o pausada.

| Valor       | Significado             |
| ----------- | ----------------------- |
| `running` | Reproduce la animación |
| `paused`  | Pausa la animación     |

---

### animation (Propiedad de Atajo)

Resume todas las propiedades de animación en una sola línea.

**Sintaxis:**

```css
animation: <name> <duration> <timing-function> <delay> <iteration-count> <direction> <fill-mode> <play-state>;
```

---

## Definición de Fotogramas (@keyframes)

### Concepto

La regla `@keyframes` define los estilos en diferentes puntos de la animación. Se puede usar selectores `from`/`to` o porcentajes `0%` a `100%`.

### Selectores de Fotogramas

- **`from`**: Equivalente a `0%` (fotograma inicial)
- **`to`**: Equivalente a `100%` (fotograma final)
- **Porcentajes**: `0%`, `25%`, `50%`, `75%`, `100%`, etc.

### Ejemplos

#### Ejemplo 1: Movimiento Horizontal Simple

```css
@keyframes animacion1 {
  from { left: 0px; }      /* Primer fotograma */
  to { left: 500px; }      /* Último fotograma */
}

.anim {
  position: relative;
  background: #000;
  color: #FFF;
  animation: animacion1 2s ease 0 infinite;
}
```

#### Ejemplo 2: Movimiento con Cambio de Color

```css
@keyframes animacion2 {
  0% { left: 0; }                      /* Primer fotograma */
  50% { left: 500px; background: #FF0000; }  /* Segundo fotograma */
  100% { left: 0; }                    /* Último fotograma */
}

.anim {
  position: relative;
  background: #000;
  color: #FFF;
  animation: animacion2 2s ease 0 infinite;
}
```

#### Ejemplo 3: Recorrido en Forma de Cuadrado

```css
@keyframes ejemplo {
  0%, 100% { background-color: red; left: 0px; top: 0px; }
  25% { background-color: yellow; left: 200px; top: 0px; }
  50% { background-color: blue; left: 200px; top: 200px; }
  75% { background-color: green; left: 0px; top: 200px; }
}

div {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation-name: ejemplo;
  animation-duration: 4s;
}
```

### Nota sobre Selectores Múltiples

Si varios fotogramas utilizan los mismos estilos, se pueden separar con comas:

```css
@keyframes ejemplo {
  0%, 100% { /* estilos comunes */ }
  50% { /* estilos diferentes */ }
}
```

---

## Encadenamiento de Animaciones

Es posible ejecutar múltiples animaciones secuencialmente. Se separan con comas y se establece un `animation-delay` a cada una para que comiencen en el momento deseado.

### Ejemplo: Encadenamiento de Animaciones

```css
.animated {
  animation: 
    lookUp 5s linear 0,           /* Comienza a los 0s */
    moveRight 2.5s linear 5s,     /* Comienza a los 5s */
    moveLeft 2s linear 7.5s,      /* Comienza a los 7.5s (5 + 2.5) */
    disappear 2s linear 9.5s;     /* Comienza a los 9.5s (5 + 2.5 + 2) */
}
```

**Cálculo de tiempos:**

- Primera animación: comienza en 0s, dura 5s (termina en 5s)
- Segunda animación: comienza en 5s, dura 2.5s (termina en 7.5s)
- Tercera animación: comienza en 7.5s, dura 2s (termina en 9.5s)
- Cuarta animación: comienza en 9.5s, dura 2s (termina en 11.5s)

---

## Resumen Comparativo: Transiciones vs Animaciones

| Aspecto     | Transiciones                                   | Animaciones                                      |
| ----------- | ---------------------------------------------- | ------------------------------------------------ |
| Estados     | 2 (inicial y final)                            | Múltiples (keyframes)                           |
| Complejidad | Más simple                                    | Más flexible y potente                          |
| Trigger     | Requiere cambio de estado (hover, click, etc.) | Inicia automáticamente o por código            |
| Control     | Básico                                        | Completo (iteration, direction, fill-mode, etc.) |
| Uso ideal   | Cambios simples de propiedades                 | Secuencias complejas de efectos                  |

---

## Recomendaciones Prácticas

1. **Duración**: Mantener transiciones y animaciones cortas (0.2s a 2s) para mejor experiencia
2. **Timing Function**: Usar `ease` o `ease-in-out` para efectos más naturales
3. **Performance**: Animar propiedades como `transform` y `opacity` para mejor rendimiento
4. **Accesibilidad**: Considerar usuarios con preferencias de movimiento reducido
5. **Encadenamiento**: Usar delays para crear secuencias animadas profesionales
