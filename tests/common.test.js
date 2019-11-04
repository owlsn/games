var common = require('../lib/common')

describe('test common', function () {
  // defer对象测试
  describe('common.getDefer', function () {
    var deferred = common.getDefer()

    test('defer成功', function () {
      deferred.resolve(true)
      return deferred.promise.then(function (data) {
        expect(data).toEqual(true)
      })
    })

    test('defer失败', function () {
      deferred.reject(true)
      return deferred.promise.then(
        function () {},
        function (data) {
          expect(data).toEqual(true)
        }
      )
    })
  })
  // when测试
  describe('common.when', function () {
    var deferred1 = common.getDefer()
    var deferred2 = common.getDefer()
    var deferred3 = common.getDefer()
    var deferred4 = common.getDefer()

    test('when成功', function () {
      deferred1.resolve(true)
      deferred2.resolve(true)
      return common
        .when([deferred1.promise, deferred2.promise])
        .then(function (data) {
          expect(data).toEqual([true, true])
        })
    })

    test('when失败', function () {
      deferred3.resolve(true)
      deferred4.reject(false)
      return common.when([deferred3.promise, deferred4.promise]).then(
        function () {},
        function (data) {
          expect(data).toEqual(false)
        }
      )
    })
  })
})
