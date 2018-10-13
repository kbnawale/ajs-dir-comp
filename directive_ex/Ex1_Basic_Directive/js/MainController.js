myModule.controller('mainController',["$scope",function($scope){
    $scope.fname = '';
    $scope.lname = '';
    $scope.salary = 0;
    $scope.headings = ['Sr.no.', 'First Name', 'Last Name', 'Salary'];
    $scope.empData = [
        {
            firstName: 'Ajay',
            lastName: 'Mishra',
            salary: 8000
        },
        {
            firstName: 'Pavan',
            lastName: 'Shah',
            salary: 10000
        },
        {
            firstName: 'Amit',
            lastName: 'Kale',
            salary: 12000
        }
    ];


    $scope.saveData = function(){
        var obj = {
            firstName: $scope.fname,
            lastName: $scope.lname,
            salary: $scope.salary
        };
        $scope.empData.push(obj);
    }
}]);