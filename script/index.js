const onClickEvent = () => {
  let containerStatus = document.getElementById("person-container");
  let shareContainer = document.getElementById("share-container");
  if (shareContainer.className === "share-container share-remove") {
    containerStatus.classList.add("person-remove");
    shareContainer.classList.remove("share-remove");
  } else {
    containerStatus.classList.remove("person-remove");
    shareContainer.classList.add("share-remove");
  }
};

const onClickEventWide = () => {
  let bubble = document.getElementById("links-bubble");

  if (bubble.style.display !== "flex") {
    bubble.style.display = "flex";
  } else {
    bubble.style.display = "none";
  }
};
