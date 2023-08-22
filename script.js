function createGrid() {
      let columns = parseInt(document.querySelector(".columns").value);
      let rows = parseInt(document.querySelector(".rows").value);
      let gridContainer = document.querySelector(".grid");

      gridContainer.innerHTML = "";

      gridContainer.style.setProperty("--columns", columns);
      gridContainer.style.setProperty("--rows", rows);

      for (let i = 0; i < columns * rows; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        gridContainer.appendChild(box);
      }
    }