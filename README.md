# Programa de Amigo Secreto en JavaScript

## Descripción
Este programa permite llevar a cabo un **sorteo de amigos secretos** de manera sencilla.  
El principal objetivo de este desafío es **fortalecer habilidades en lógica de programación**, manejo de arrays y manipulación del DOM con JavaScript.

El usuario puede:
- Agregar nombres de amigos en un campo de texto.
- Visualizar la lista de amigos agregados en pantalla.
- Realizar un sorteo aleatorio para elegir un amigo secreto.

---

## Funcionalidades

1. **Agregar amigos**
   - Se ingresa el nombre en un input.
   - Al presionar el botón "Agregar", el nombre se guarda en un array y se muestra en la lista de amigos.
   - Si el input está vacío, se muestra una alerta indicando que no se puede agregar un nombre vacío.

2. **Mostrar lista de amigos**
   - Cada vez que se agrega un amigo, la lista en pantalla se actualiza automáticamente.
   - Cada nombre se muestra dentro de un `<li>` dentro de un `<ul>`.

3. **Sorteo del amigo secreto**
   - Al presionar el botón de sorteo, el programa selecciona un nombre aleatorio del array de amigos.
   - Se muestra en pantalla el resultado del sorteo.
   - Si no hay amigos en la lista, se muestra una alerta indicando que no se puede realizar el sorteo.
