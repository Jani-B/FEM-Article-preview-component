const onClickEvent = () => {
  let containerStatus = document.getElementById("person-container");
  let shareContainer = document.getElementById("share-container");
  if (containerStatus.style.display === "none") {
    containerStatus.style.display = "flex";
    shareContainer.style.display = "none";
  } else {
    containerStatus.style.display = "none";
    shareContainer.style.display = "flex";
  }
};
