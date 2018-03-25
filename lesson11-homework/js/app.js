var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', function ($scope) {
    $scope.priceTitle = 'Прайс-лист';
    $scope.priceDate = new Date();
    $scope.priceList = [{
            name: 'Апельсины',
            price: 3,
            discount: 0.1,
            image: 'img/orange.jpg',
            delivery: new Date(),
        }, {
            name: 'Яблоки',
            price: 1,
            image: 'img/apple.jpg',
            delivery: new Date(),
        }, {
            name: 'Банан',
            price: 5,
            discount: 0.2,
            image: 'img/banana.png',
            delivery: new Date(),
        }, {
            name: 'Персик',
            price: 7,
            image: 'img/peach.png',
            delivery: new Date(),
        }
    ];
    
    $scope.priceOrder = 'name';
    $scope.priceReverse = true;
    $scope.setOrder = function (order) {
        $scope.priceReverse = ($scope.priceOrder === order) ? !$scope.priceReverse : false;
        $scope.priceOrder = order;
    }
    
    $scope.submitForm = function () {
        $scope.priceList.push({
            name: $scope.nameform,
            price: $scope.priceform,
            discount: $scope.discountform,
        });
    }
    $scope.removeRow = function (name) {
        var index = -1;
        for (var i = 0; i < $scope.priceList.length; i++) {
            if ($scope.priceList[i].name == name) {
                index = i;
                break;
            }
        }
        $scope.priceList.splice(index, 1);
    }
}]);
