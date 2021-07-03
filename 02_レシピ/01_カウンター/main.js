const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")


plusButton.onclick = function() {
  count += 1

  display.textContent = count
}