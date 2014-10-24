"use strict";
var __moduleName = "annotations";
var AnyAnnotation = function() {};
function simpleFunction() {
  return 'any';
}
Object.defineProperty(simpleFunction, "annotations", {get: function() {
    return [new AnyAnnotation];
  }});
