setInterval(function () {
  // Select all elements
  const allElements = document.getElementsByTagName("*");
  let customElements = [];

  for (let i = 0; i < allElements.length; i++) {
    // Check if the element's tag name starts with "tfl-dev"
    if (
      allElements[i].nodeName.includes("-") &&
      allElements[i].nodeName.startsWith("TFL-DEV")
    ) {
      customElements.push(allElements[i]);
    }
  }

  for (let customElement of customElements) {
    // Check if the web component has a shadow root
    if (customElement.shadowRoot) {
      let claimElementList =
        customElement.shadowRoot.querySelectorAll(".c-button.claim");
      console.log(claimElementList);

      for (let claimElement of claimElementList) {
        claimElement.click();
      }
    }
  }
}, 5000);
