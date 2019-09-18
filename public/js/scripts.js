$(document).foundation();

function isVisable(section) {
  let sectionRec = section.getBoundingClientRect();
  let distanceFromTop = -200;

  if (sectionRec.top - window.innerHeight < distanceFromTop) {
    return true;
  } else {
    return false;
  }
}

function scanDocument() {
  let hiddenElements = document.querySelectorAll('.hidden');

  for (let i = 0; i < hiddenElements.length; i += 1) {
    if (isVisable(hiddenElements[i])) {
      hiddenElements[i].classList.remove('hidden');
      hiddenElements[i].style.setProperty('animation-name', 'fadeInMoveUp');
      hiddenElements[i].style.setProperty('animation-duration', '.8s');
    }
  }
}

scanDocument();