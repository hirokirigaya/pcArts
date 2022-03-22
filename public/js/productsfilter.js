const btnFilter = document.getElementById("category");

btnFilter.addEventListener("change", () => {
  if (btnFilter.selectedIndex == 0) {
    document.location.href = "/products";
  } else if (btnFilter.selectedIndex == 1) {
    document.location.href = "/products/computer";
  } else if (btnFilter.selectedIndex == 2) {
    document.location.href = "/products/peripherals";
  } else document.location.href = "/products";
});

window.onload = () => {
  if (document.location.pathname == "/products") {
    btnFilter.value = 'category';
  } else if (document.location.pathname == "/products/computer") {
    btnFilter.value = 'computer';
  } else if (document.location.pathname == "/products/peripherals") {
    btnFilter.value = 'peripherals';
  }
  else btnFilter.value = 'category'
};
