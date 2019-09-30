var info = require('../lib/info.js');
var expect = require('chai').expect;

describe('info：输出测试', function() {
    //defer对象测试
    describe('info.log', function() {
        it('log成功', function() {
            return info.promise.then(function(data) {
                expect(data).to.be.equal(true);
            });
        });

        it('defer失败', function() {
            deferred.reject(true);
            return deferred.promise.then(function() {}, function(data) {
                expect(data).to.be.equal(true);
            });
        });
    });
});