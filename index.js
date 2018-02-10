var recipes = { prop: 1 };

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, recipes, {[key]:value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes[key];
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, recipes);
  delete newObj[key];
  return newObj;
}