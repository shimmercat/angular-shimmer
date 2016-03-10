    define(["../angular.min"], function(angular) {

        var vowel_re = /[aeiou]/;

        function vowel_count(word) {
            if (word == null )
                return 0;
            var result = 0;
            for (var i = 0; i < word.length; i++ )
            {
                if ( vowel_re.test(word[i]) )
                {
                    result += 1;
                }
            }

            return result;
        }

        angular.module('myApp', [])
          .controller('mainController', ['$scope', function ($scope) {
            $scope.vowelCount = vowel_count;
          }]);

    });
