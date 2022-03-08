import { canvasUI } from "./canvas-ui/canvas-ui.js";

const ui = canvasUI.ui.new("#ui");

const root = canvasUI.layout.new("root", "frame");

const sudoku = canvasUI.composite.new("sudoku", "sudoku");

sudoku.set("size", 450);
sudoku.get("text").size = 30;

root.insert(sudoku);

sudoku.layoutParams.set("gravity", {
  horizontal: "middle",
  vertical: "middle",
});

ui.start(root);

root.listeners.add("click", function (root, event) {
  sudoku.call("unselectPosition");
});

sudoku.listeners.add("click", function (sudoku, event) {
  const cell = event.cell;
  sudoku.call("selectPosition", cell);
});

sudoku.listeners.add("number-pressed", function (sudoku, event) {
  const selected = sudoku.call("getSelectedPosition");
  sudoku.call("setNumber", selected, event.num, true);
});

sudoku.listeners.add("backspace-pressed", function (sudoku, event) {
  const selected = sudoku.call("getSelectedPosition");
  sudoku.call("delNumber", selected);
});
