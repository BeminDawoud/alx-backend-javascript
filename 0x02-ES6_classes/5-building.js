export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== 'Building') {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  /* setters  */
  set sqft(value) {
    this._sqft = value;
  }

  /* getters  */
  get sqft() {
    return this._sqft;
  }
}
