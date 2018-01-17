import _ from 'underscore';

export function getFieldNameFromName(name){
  var ret = name.split('#');
  return ret[0];
}

export function getFieldNameAndIndexFromName(name){
  var ret = name.split('#');
  return ret;
}

export function getNextDefinitionKey(spreadDefinition) {
  var maxDefinitionKey = 0;
  _.map(spreadDefinition, (val, key)=>{
    var keyVal = key.charCodeAt();
    maxDefinitionKey = maxDefinitionKey > keyVal?maxDefinitionKey:keyVal;
  });
  return String.fromCharCode(maxDefinitionKey+1);
}
