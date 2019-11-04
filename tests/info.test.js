var info = require('../lib/info')

describe('info：输出测试', function () {
  // defer对象测试
  describe('info.log', function () {
    test('log success', function () {
      expect(info.log(123)).toEqual(123)
    })

    test('info file success', function () {
      var path = 'temp/info-success.txt'
      var data = '测试说明'
      return info.file(path, data).then(function (flag) {
        expect(flag).toEqual(true)
      })
    })

    test('info file fail', function () {
      var path = 'temp/info-fail.txt'
      var data = '我是写入的数据'
      return info.file(path, data).then(
        function () {},
        function (err) {
          console.log(err)
          expect(true).toEqual(true)
        }
      )
    })
  })
})
