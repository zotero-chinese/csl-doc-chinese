function addListenerMulti(element, eventNames, listener) {
    const events = eventNames.split(" ")
    for (let i = 0, iLen = events.length; i < iLen; i++) {
      element.addEventListener(events[i], listener, false)
    }
  }
  icon = "<span><svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"icon outbound\" style=\"vertical-align: middle;\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\" data-darkreader-inline-fill=\"\" style=\"--darkreader-inline-fill:currentColor;\"></path> <polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\" data-darkreader-inline-fill=\"\" style=\"--darkreader-inline-fill:currentColor;\"></polygon></svg> <span class=\"sr-only\">(opens new window)</span></span>"
  addListenerMulti(document, "DOMContentLoaded DOMContentSwitch", (event) => {
    // Add an icon to all external links
    const links = document.querySelectorAll(".md-content a")
    for (let i = 0, length = links.length; i < length; i++) {
      if (
        links[i].hostname !== window.location.hostname &&
        links[i].hostname !== "" &&
        links[i].classList.contains("md-icon") !== true &&
        links[i].classList.contains("download-button") !== true
      ) {
        links[i].target = "_blank"
        links[i].classList.add("external")
        links[i].rel = "noopener"
        links[i].insertAdjacentHTML("beforeend", icon);


      }
    }
  })