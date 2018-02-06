let recipes = {
  prop: 1
  
}

function updateObjectWithKeyAndValue (object, key, value) {
   Object.assign(object, {key: 'value'});
   return object;
  
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
   Object.assign(Object, {key: 'value'});
   return Object;
}

function deleteFromObjectByKey (object, key) {
  return delete Object.key;
}

function destructivelyDeleteFromObjectByKey (object, key) {
  return delete Object.key;
}