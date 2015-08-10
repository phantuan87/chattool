'use strict';

describe('filter unit test', function() {
  var cusDate, $filter;

  beforeEach(function() {
    module('app');
  });

  beforeEach(inject(function(_$filter_) {
    $filter = _$filter_;
    cusDate = $filter('date');
  }));

  it('should convert string to date', function() {
    expect(cusDate('1970/01/01')).toBe('1970/01/01');
    expect(cusDate('1984/09/20')).toBe('1984/09/20');
  });
});
