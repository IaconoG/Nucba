### Temario

- Historia
- Sintaxis y vinculacion con html
- Selectores CSS y Especificidad
- Unidades absolutas y relativas
- Propiedades Basicas
- Tipografia Web

### Vetajas

- Animaciones / Transiciones
- Diseño Responsive
- Gradients / Degradados
- Filtros

### Slectores

**Universal** : Sirve para agregar estilos a todos los elemetnos de la pagina con el \*. Normalemente se usa para resetear los estilos por defecto de los navegadores.

```css
* {
  margin: 0;
  padding: 0;
}
```

**Selector ID**: Aplica estilos a un elemento unico con ese ID, se recomienda hacer buen uso de ese selector y no abusar del mismo

```css
#id {
  color: red;
}
```

**Selector clase**: Aplica estilos a todos los elementos con esa clase.

```css
.clase {
  color: red;
}
```

**Combinardor de descendientes**: Selecciona los elementos que son descendientes del primer elemento. Se palica poneind un espacio entre selectores.

```css
div p {
  color: red;
}
```

**Combinador de hijo**: Selecciona los elemetnos que son hijos directos del primer elmento. Se aplica utilizando el simbolo ">"

```css
div > p {
  color: red;
}
```

**Combinador de hermanos adyacentes**: Selecciona los elementos que son hermanos adyacentes del primer elemento. Se aplica utilizando el simbolo "+"

```css
div + p {
  color: red;
}
```

**Combinador de hermanos generales**: Selecciona los elementos que son hermanos generales del primer elemento. Se aplica utilizando el simbolo "~"

```css
div ~ p {
  color: red;
}
```

### Unidades Absolutas

- **px**: Unidad absoluta de medida mas uada en la web. No es responsive.

```css
div {
  width: 100px;
  height: 100px;
}
```

### Unidades Relativas

- **%**: Unidad relativa al elemento padre. Es responsive.

```css
div {
  width: 100%;
  height: 100%;
}
```

- **em**: Unidad relativa al tamaño de la fuente del elemento padre. Es responsive.

```css
div {
  font-size: 16px;
  width: 10em; /* 10 * 16px = 160px */
  height: 10em; /* 10 * 16px = 160px */
}
```

- **rem**: Unidad relativa al tamaño de la fuente del elemento raiz (html). Es responsive.

```css
html {
  font-size: 16px;
}

div {
  font-size: 16px;
  width: 10rem; /* 10 * 16px = 160px */
  height: 10rem; /* 10 * 16px = 160px */
}
```

- **vh**: Unidad relativa al tamaño del viewport en altura. Es responsive.

```css
div {
  width: 100vh; /* 100% del viewport en altura */
  height: 100vh; /* 100% del viewport en altura */
}
```

- **vw**: Unidad relativa al tamaño del viewport en ancho. Es responsive.

```css
div {
  width: 100vw; /* 100% del viewport en ancho */
  height: 100vw; /* 100% del viewport en ancho */
}
```

### Resumen medidas

- **px**: Cuando se quiere un tamaño fijo y no se quiere que sea responsive.
- **%**: Para tamaño responsive en relacion con el elemento padre.
- **em** y **rem**: Para tamaños escalables en relacion con tama;os de fuente.
- **rem**: Se utiliza cuando se quiere un tamaño relativo al tamaño de la fuente del elemento raiz (html).
- **vw** y **vh**: Para tamaños responsive en relacion con el viewport.
