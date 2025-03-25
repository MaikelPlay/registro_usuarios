// Clase Persona (ES6)
class Persona {
    constructor(nombre) {
      this._nombre = nombre;
    }
    setNombre(nombre) {
      this._nombre = nombre;
    }
    getNombre() {
      return this._nombre;
    }
  }
  
  // Clase Usuario que hereda de Persona
  class Usuario extends Persona {
    constructor(nombre, user, password) {
      super(nombre); 
      this._user = user;
      this._password = password;
    }
    setUser(user) {
      this._user = user;
    }
    getUser() {
      return this._user;
    }
    setPassword(password) {
      this._password = password;
    }
    getPassword() {
      return this._password;
    }
  }
  
