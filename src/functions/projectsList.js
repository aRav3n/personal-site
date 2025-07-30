const pinFirstProjectsLength = 3;

const otherProjectsArray = [];

const pinnedProjectsArray = [];

function createProject(
  name,
  screenshotPath,
  description,
  livePreviewUrl,
  repoIfPublicElseNull
) {
  const arrayToPushInto =
    pinnedProjectsArray.length < pinFirstProjectsLength
      ? pinnedProjectsArray
      : otherProjectsArray;

  const projectObject = {
    name,
    screenshotPath,
    description,
    livePreviewUrl,
    repoIfPublicElseNull,
  };

  arrayToPushInto.push(projectObject);
}

export default function getProjects(setPinnedProjects, setOtherProjects) {
  createProject(
    "Spa Homepage",
    "https://github.com/aRav3n/punto-de-calma-homepage/raw/main/src/images/screenshot.png",
    "This is a simple Single Page App (SPA) that I built for a spa in Mexico City. It is built using Webpack and features the color palate used on their main price list image.",
    "https://groundedwanderer.dev/punto-de-calma-homepage/",
    "https://github.com/aRav3n/punto-de-calma-homepage"
  );

  createProject(
    "Simple Shopping Website",
    "https://github.com/aRav3n/shopping-cart/raw/main/src/assets/screenshot.png",
    "This is a shopping website frontend built with Vite and React. It pulls data from a generic test API to populate the store.",
    "https://shopping-cart-8jt.pages.dev/shop/products",
    "https://github.com/aRav3n/shopping-cart"
  );

  createProject(
    "Social Media Site",
    "https://github.com/aRav3n/odin-book-backend/raw/main/public/screenshot.png",
    "This is a social media website project that I built as part of The Odin Project curriculum. The frontend is build using React and Vite and can be used with an account or anonymously as a guest. The backend is a RESTful API that can be used per the endpoint instructions in the repo.",
    "https://odin-book-frontend-8xo.pages.dev/",
    "https://github.com/aRav3n/odin-book-backend"
  );

  createProject(
    "Packing List Site",
    "https://github.com/aRav3n/inventory-app/raw/main/public/screenshot.png",
    "I created this app as part of the curriculum for The Odin Project. Originally I was planning to do a store inventory but thought that this packing list would be more useful for me in the future.",
    "https://packing-list-67q7.onrender.com/",
    "https://github.com/aRav3n/inventory-app"
  );

  createProject(
    "Memory Card Game",
    "https://github.com/aRav3n/memory-game/raw/main/src/assets/screenshot.png",
    "This is a memory card game using the Scryfall API for the backend and Vite and React to build the frontend.",
    "https://memory-game-dga.pages.dev/",
    "https://github.com/aRav3n/memory-game"
  );

  createProject(
    "Hidden Image Game",
    "https://github.com/aRav3n/wheres-waldo-backend/blob/main/public/screenshot.png",
    "This is a hidden image game (similar to Where's Waldo) built as part of The Odin Project curriculum. The frontend is built using React and Vite; it allows users to click anywhere on the game image and sends the coordinates to the API for checking. The backend is a RESTful API built with Node.js and Express.",
    "https://98256945.wheres-waldo-frontend-top.pages.dev/",
    "https://github.com/aRav3n/wheres-waldo-backend"
  );

  createProject(
    "Gin Rummy Card Game Score Tracker",
    "https://github.com/aRav3n/gin-rummy-score-tracker/raw/main/public/start_screenshot.png",
    "This score tracker was built to fulfill my need to track game scores on something other than a napkin.",
    "https://gin-rummy-score-tracker.pages.dev/",
    "https://github.com/aRav3n/gin-rummy-score-tracker"
  );

  createProject(
    "Mini Message Board",
    "https://github.com/aRav3n/mini-message-board/raw/main/public/screenshot.png",
    "This is a mini message board app built using Node.js, Express, and EJS. It auto-populates a few messages at startup to demonstrate how it works.",
    "https://mini-message-board-arav3n.onrender.com/",
    "https://github.com/aRav3n/mini-message-board"
  );

  return { pinnedProjectsArray, otherProjectsArray };
}
