const cellElements = document.querySelectorAll("[data-cell]");

let isCircleTurn;

const handleClick = (e) => {
    // Colocar a marca (X ou Circulo)
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";

    cell.classList.add(classToAdd);
    // Verificar por vitória

    // Verificar um empate

    // Mudar o Símbolo

}

for (const cell of cellElements){
    cell.addEventListener("click", handleClick, { once: true });
}

