//service solution is already implemented in presentation
.factory(“sharedProperties”, function () {
    var property = 1;
    return {
        getProperty: function () {
            return property;
        },
        setProperty: function(value) {
            property = value;
        }
    };
});


function Ctrl1($scope, sharedProperties) {
    $scope.prop1 = 1;
    sharedProperties.setProperty($scope.prop1);
}

function Ctrl2($scope, sharedProperties) {
    $scope.prop2 = 2;
    $scope.prop1 = sharedProperties.getProperty();

    $scope.total = $scope.prop1 + $scope.prop2;
    console.log($scope.total); // => 3
}


//$broadcast solution
function Ctrl1($scope, $rootScope) {
    $scope.prop1 = 1;
    $rootScope.$broadcast("propChanged", {
        prop: $scope.prop1
    });
}

function Ctrl2($scope) {
    $scope.prop2 = 2;
    // I would like to do

    $scope.$on("propChanged", (event, args) => {
        $scope.prop1 = args.prop;
    });

    $scope.total = $scope.prop1 + $scope.prop2;
    console.log($scope.total); // => 3
}

//$emit solution
function Ctrl1($scope, $rootScope) {
    $scope.prop1 = 1;
    $rootScope.$emit("propChanged", {
        prop: $scope.prop1
    });
}

function Ctrl2($scope) {
    $scope.prop2 = 2;
    // I would like to do

    $rootScope.$on("propChanged", (event, args) => {
        $scope.prop1 = args.prop;
    });

    $scope.total = $scope.prop1 + $scope.prop2;
    console.log($scope.total); // => 3
}