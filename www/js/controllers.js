angular.module('qrtme.controllers', [])

.controller('HistoryCtrl', function($scope, $ionicPopup, $localStorage, History) {

    $scope.refresh = function() {
        $scope.history = History.all();
        $scope.$broadcast('scroll.refreshComplete');
    };

    //Options
    $scope.showDelete = false;

    //Actions
    $scope.deleteToggle = function() {
        $scope.showDelete = !$scope.showDelete;
    };

    $scope.remove = function(index) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Remove #' + index,
            template: 'Are you sure you want to remove this url?'
        });
        confirmPopup.then(function(res) {
            if (res) {
                History.remove(index);
                $scope.history.splice(index, 1);
            }
        });
    };

    $scope.clearDatabase = function(index) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Confirm',
            template: 'Are you sure you want to remove all history?'
        });
        confirmPopup.then(function(res) {
            if (res) {
                $localStorage.clearDatabase();
                $scope.refresh();
            }
        });
    };

    //Load history
    $scope.$on('$ionicView.enter', $scope.refresh);

})

.controller('HistoryDetailCtrl', function($scope, $stateParams, $ionicPopup, $cordovaClipboard, History) {

    $scope.history = History.get($stateParams.index);

    $scope.copytoClipboard = function(text) {
        $cordovaClipboard
            .copy(text)
            .then(function() {
                $ionicPopup.alert({
                    title: 'Success',
                    template: 'Link copied to clipboard'
                });
            }, function() {
                $ionicPopup.alert({
                    title: 'Unable to copy the link',
                    template: 'Too bad, something went wrong!'
                });
            });
    };
})

.controller('ScanCtrl', function($scope, $ionicModal, $ionicPopup, $cordovaClipboard, $cordovaBarcodeScanner, History) {

    $scope.copyrightYear = new Date().getFullYear();

    $scope.copytoClipboard = function(text) {
        $cordovaClipboard
            .copy(text)
            .then(function() {
                $ionicPopup.alert({
                    title: 'Success',
                    template: 'Link copied to clipboard'
                });
            }, function() {
                $ionicPopup.alert({
                    title: 'Unable to copy the link',
                    template: 'Too bad, something went wrong!'
                });
            });
    };

    $scope.scanQRCode = function() {
        document.addEventListener('deviceready', function() {
            $cordovaBarcodeScanner
                .scan()
                .then(function(barcodeData) {
                    if (barcodeData.cancelled) {
                        $ionicModal.fromTemplate('').show().then(function() {
                            $scope.showResult = false;
                            $ionicPopup.alert({
                                template: 'Scan request cancelled!'
                            });
                        });
                    } else {
                        if (/^https?:\/\//.test(barcodeData.text) && barcodeData.format === 'QR_CODE') {
                            $scope.qrcode = barcodeData;
                            $scope.showResult = true;
                            History.save({
                                url: $scope.qrcode.text,
                                createdAt: new Date()
                            });
                        } else {
                            $ionicPopup.alert({
                                title: 'Unable to scan the QR Code',
                                template: 'This QRCode is not a valid url!'
                            });
                        }
                    }
                }, function(err) {
                    $scope.showResult = false;
                    $ionicPopup.alert({
                        title: 'Unable to scan the QR Code',
                        template: 'Too bad, something went wrong!'
                    });
                });
        }, false);
    };
})

.controller('AboutCtrl', function() {});
