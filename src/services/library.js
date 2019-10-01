import drive from './drive';

const Library = function () { 
  this.namespaces = {};
  this.substrings = {};
};

Library.prototype.initLibrary = async function () {
  this.namespaces = await drive.getFile('namespaces');
  this.substrings = await drive.getFile('substrings');
};

Library.prototype.getNamespaces = function () {
  return this.namespaces;
};

export default new Library();