  // Booleans
  // ---------------------------------------------------------------------------

  /**
   * @alias toBeBoolean
   *
   * @description
   * Assert subject is not only truthy or falsy, but an actual Boolean.
   *
   * @example
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeBoolean = function() {
    return matchers.toBeTrue.call(this) || matchers.toBeFalse.call(this);
  };

  /**
   * @alias toBeTrue
   *
   * @description
   * Assert subject is not only truthy, but an actual Boolean true.
   *
   * @example
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeTrue = function() {
    return this.actual === true || this.actual instanceof Boolean && this.actual.valueOf() === true;
  };

  /**
   * @alias toBeFalse
   *
   * @description
   * Assert subject is not only falsy, but an actual Boolean false.
   *
   * @example
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeFalse = function() {
    return this.actual === false || this.actual instanceof Boolean && this.actual.valueOf() === false;
  };

  // Boolean Members
  // ---------------------------------------------------------------------------

  /**
   * @alias toHaveBoolean
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveBoolean = function(memberName) {
    return priv.assertMember.call(this, 'toBeBoolean', memberName);
  };

  /**
   * @alias toHaveFalse
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveFalse = function(memberName) {
    return priv.assertMember.call(this, 'toBeFalse', memberName);
  };

  /**
   * @alias toHaveTrue
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveTrue = function(memberName) {
    return priv.assertMember.call(this, 'toBeTrue', memberName);
  };
