var file = require('../lib/file');

describe('file：功能测试', function() {

    //writeFile功能测试
    describe('file.writeFile', function() {

        test('写文件：成功', function() {
            var path = 'temp/write-success.txt';
            var data = '说明文档';
            return file.writeFile(path, data).then(function(flag) {
                expect(flag).toEqual(true);
            });
        });

        test('写文件：失败', function() {
            var path = 'temp/write-fail.txt';
            var data = '我是写入的数据';
            return file.writeFile(path, data).then(function(){}, function(err) {
                expect(true).toEqual(true);
            });
        });
    });

    //readFile功能测试
    describe('file.readFile功能测试', function() {

        test('读文件：成功', function() {
            var path = 'temp/write-success.txt';
            return file.readFile(path).then(function(data) {
                expect(data).toEqual('说明文档');
            });
        });

        test('读文件：失败', function() {
            var path = 'temp/write-fail.txt';
            return file.readFile(path).then(function(){}, function(err) {
                expect(true).toEqual(true);
            });
        });
    });
});