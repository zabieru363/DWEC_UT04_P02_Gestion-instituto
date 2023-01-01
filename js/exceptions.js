"use strict";

/**
 * Clase de excepción base para crear correctamente
 * objetos Error. Esta tiene acceso al callstack.
 */
class BaseException extends Error {
  constructor(message = "", fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "BaseException";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseException);
    }
  }
}

/**
 * Clase de excepción que genera un error cada vez que
 * llamamos a un constructor sin el operador new.
 */
class InvalidAccessConstructorException extends BaseException {
  constructor(fileName, lineNumber) {
    super("El constructor se debe de invocar con new.", fileName, lineNumber);
    this.name = "InvalidAccessConstructorException";
  }
}

/**
 * Clase de excepción que genera un error cada vez que intentamos
 * instanciar una clase abstracta.
 */
class AbstractClassException extends BaseException {
  constructor(className, fileName, lineNumber) {
    super(`La clase ${className} es abstracta.`, fileName, lineNumber);
    this.className = className;
    this.name = "AbstractClassException";
  }
}

class EmptyValueException extends BaseException {
  constructor(param, fileName, lineNumber) {
    super("El campo  " + param + " no puede estar vacío.", fileName, lineNumber);
    this.param = param;
    this.name = "EmptyValueException";
  }
}