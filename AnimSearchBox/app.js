function searchToggle(obj, evt) {
  var container = document.querySelector(obj).closest(".search-wrapper");
  if (!container.classList.contains("active")) {
    container.classList.add("active");
    evt.preventDefault();
  } else if (
    container.classList.contains("active") &&
    document.querySelector(obj).closest(".input-holder").length == 0
  ) {
    container.removeClass("active");
    // clear input
    container.querySelector(".search-input").val("");
  }
}
