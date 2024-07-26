export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  /* setters  */
  set name(value) {
    this._name = value;
  }

  set code(value) {
    this._code = value;
  }

  /* getters  */
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
