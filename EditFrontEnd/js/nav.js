// variable for current page object with all the data
const currentPage = {
  depth: 0,
  title: 'Attract',
  data: {},
  currentUserId: 0,
  userSettings: {},
};

// navigation functions

function homeToClump(clumpSelected) {
  currentPage.depth = 2;
  currentPage.title = clumpSelected.title;
  currentPage.data = clumpSelected.data;
  homeOut(loadClump(clumpSelected));
}

function clumpToClump(clumpSelected) {
  currentPage.depth = 2;
  currentPage.title = clumpSelected.title;
  currentPage.data = clumpSelected.data;
}

module.exports = {
  currentPage,
  homeToClump,
  clumpToClump,
};
