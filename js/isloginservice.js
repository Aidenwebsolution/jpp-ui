/*var mainurl = "http://admin.jaipurpinkpanthers.com/beta/index.php/"
var adminurl = mainurl + "json/";
var isloginservicemod = angular.module('isloginservicemod', [])
.factory('IsloginServices', function ($http) {
    var isloginservice = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(adminurl + "authenticate").then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    }
  };
  return isloginservice;
});*/