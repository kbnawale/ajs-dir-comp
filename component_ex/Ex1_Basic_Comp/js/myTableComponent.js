myModule.component('myTable', {
    bindings: {
        
    },
    controller: function($element,$timeout){
        this.$onInit = function(){
            this.message = "MyComponent";
            this.headings = ['Sr.no.', 'First Name', 'Last Name', 'Salary'];
            this.empData = [
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
            console.log("Component init: ",this.myheadings);
        }

        this.$postLink = function(){
            console.log($element);
            $timeout(function(){
                var allTrs = $element.find('tbody').children();
                for(var i=0; i<allTrs.length; i++){
                     angular.element(allTrs[i]).on('mouseenter', onTrHover);
                     angular.element(allTrs[i]).on('mouseleave', onTrout);
                }
            });
            
            function onTrHover(event){
                console.log(event.currentTarget);
                event.currentTarget.style.backgroundColor = 'lightblue';
            }
            function onTrout(event){
                console.log(event.currentTarget);
                event.currentTarget.style.backgroundColor = 'gray';
            }
        }
    },
    controllerAs: 'vm',
    templateUrl: 'pages/my-table.html',
});


/*
myModule.directive('myTable',['$timeout', function($timeout){
    return {
        // template: '<div>'+
        //             '<h2>MyTable Directive</h2>'+
        //             '</div>';
        restict: 'E',
        scope:{
            myHeadings:'=',
            myEmpData: '='
        },
        templateUrl: 'pages/my-table.html',
        link: function(scope, element, attr){
            console.log("Element: ",element.find('tbody').children());
            //var table = element.find('tbody');
            //console.log(angular.element(table).find('tr'));
            //var allTrs = angular.element(tbody[1]).find('tr');
            //console.log(allTrs);
            $timeout(function(){
                console.log("Element: ",element.find('tbody').children());
                var allTrs = element.find('tbody').children();
                for(var i=0; i<allTrs.length; i++){
                     angular.element(allTrs[i]).on('mouseenter', onTrHover);
                     angular.element(allTrs[i]).on('mouseleave', onTrout);
                }
            });

            function onTrHover(event){
                console.log(event.currentTarget);
                event.currentTarget.style.backgroundColor = 'lightblue';
            }
            function onTrout(event){
                console.log(event.currentTarget);
                event.currentTarget.style.backgroundColor = 'gray';
            }

        }

    }
}]);
*/