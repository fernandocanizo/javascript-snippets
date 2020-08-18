const myModule = () => {
  console.log('myModule has been called');
};

if (require.main === module) {
  console.log('Running from module');
  myModule();
} else {
  module.exports = myModule;
}
