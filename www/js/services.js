angular.module('qrtme.services', [])

.factory('$localStorage', function($window) {
    return {
        set: function(key, value) {
            $window.localStorage.setItem(key, value);
        },
        push: function(key, object) {
            var currentData = JSON.parse($window.localStorage.getItem(key) || '[]');
            currentData.push(object);
            $window.localStorage.setItem(key, JSON.stringify(currentData));
            return true;
        },
        get: function(key, defaultValue) {
            return $window.localStorage.getItem(key) || defaultValue;
        },
        setObject: function(key, value) {
            $window.localStorage.setItem(key, JSON.stringify(value));
        },
        getObject: function(key) {
            return JSON.parse($window.localStorage.getItem(key) || '[]');
        },
        getItem: function(key, index) {
            var currentData = JSON.parse($window.localStorage.getItem(key) || '[]');
            return currentData[index];
        },
        removeObject: function(key, index) {
            var currentData = JSON.parse($window.localStorage.getItem(key) || '[]');
            currentData.splice(index, 1);
            $window.localStorage.setItem(key, JSON.stringify(currentData));
            return true;
        },
        updateObject: function(key, index, object) {
            var currentData = JSON.parse($window.localStorage.getItem(key) || '[]');
            angular.extend(currentData[index], object);
            $window.localStorage.setItem(key, JSON.stringify(currentData));
            return true;
        },
        clearDatabase: function() {
            $window.localStorage.clear();
            return true;
        }
    };
})

.factory('History', function($localStorage) {
    return {
        all: function() {
            return $localStorage.getObject('history').reverse();
        },
        get: function(index) {
            return $localStorage.getItem('history', index);
        },
        save: function(obj) {
            return $localStorage.push('history', obj);
        },
        remove: function(index) {
            return $localStorage.removeObject('history', index);
        }
    };
});
