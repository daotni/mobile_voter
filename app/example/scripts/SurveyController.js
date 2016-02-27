angular
  .module('example')
  .controller('SurveyController', function($scope, supersonic) {
    var current_view = null;

    $scope.firstVote = 0;
    $scope.secondVote = 0;
    $scope.stateList = [ 
      {province:'Chiang Mai', state: 'Mueang Chiang Mai'},
      {province:'Chiang Mai', state: 'Mae Rim'},
      {province:'Chiang Mai', state: 'Hang Dong'}, 
      {province:'Chiang Mai', state: 'San Kampheng'},
      {province:'Chiang Mai', state: 'Chom Thong'},
      {province:'Lamphun', state: 'Mueang Lamphun'},
      {province:'Lamphun', state: 'Li'},
      {province:'Lamphun', state: 'Ban Hong'},
      {province:'Lamphun', state: 'Pa Sang'}
    ]
    $scope.selectedState = null;
    
    $scope.surveyPage = [
      {title: 'Physical environment Quality', 'first_question': 'Environment is suitable for types of restaurant', 'second_question': 'Cleanliness', start_with: 1},
      {title: 'Physical environment Quality', 'first_question': 'Easy to travel to the restaurant ', 'second_question': 'Crowded restaurant', start_with: 3},
      {title: 'Physical environment Quality', 'first_question': 'Atmosphere was pleasant ', start_with: 5},
      {title: 'Interaction quality', 'first_question': 'Quality service from staff', 'second_question': 'Employee were professional and work as a team', start_with: 6},
      {title: 'Interaction quality', 'first_question': 'Helpfulness of staff', 'second_question': 'Friendliness of staff', start_with: 8},
      {title: 'Outcome quality', 'first_question': 'The service is speedy', 'second_question': 'Service was complete and correct', start_with: 10},
      {title: 'Outcome quality', 'first_question': 'Value for money', 'second_question': 'Restaurant service is pleasant', start_with: 12},
      {title: 'Outcome quality', 'first_question': 'The food is tasty and flavored', start_with: 14}
    ]

    $scope.startSurvey = function() {
      supersonic.ui.views.find("choose-location").then( function(startedView){
        supersonic.ui.layers.push(startedView);
      });
    }

    $scope.goNext = function() {
      localStorage.setItem('selected_province', $scope.selectedState.province);
      localStorage.setItem('selected_state', $scope.selectedState.state);
      supersonic.ui.views.find("survey1").then( function(startedView){
        supersonic.ui.layers.push(startedView);
      });
    }

    $scope.nextSurvey = function() {
      setItem($scope.firstVote, $scope.secondVote);
      if(current_view + 2 !== 9){
        supersonic.ui.views.find("survey" + (current_view + 2)).then( function(startedView){
          supersonic.ui.layers.push(startedView);
        });
      }
      else {
        // Submit to server
        var myFirebaseRef = new Firebase("https://torrid-heat-4832.firebaseio.com/");
        myFirebaseRef.push({
          province: localStorage.selected_province,
          state: localStorage.selected_state,
          vote: {
            vote_1: localStorage.vote_1,
            vote_2: localStorage.vote_2,
            vote_3: localStorage.vote_3,
            vote_4: localStorage.vote_4,
            vote_5: localStorage.vote_5,
            vote_6: localStorage.vote_6,
            vote_7: localStorage.vote_7,
            vote_8: localStorage.vote_8,
            vote_9: localStorage.vote_9,
            vote_10: localStorage.vote_10,
            vote_11: localStorage.vote_11,
            vote_12: localStorage.vote_12,
            vote_13: localStorage.vote_13,
            vote_14: localStorage.vote_14
          }
        });
        supersonic.ui.dialog.alert("Submit", {
          message: 'Finish, all data was submit.'
        }).then(function(){
          supersonic.ui.layers.popAll().then(function(){
            supersonic.data.channel('reset_data').publish(true);
          });
        })
      }
    }

    supersonic.data.channel('reset_data').subscribe(function(){
      $scope.firstVote = 0;
      $scope.secondVote = 0;
      localStorage.clear();
      $scope.selectedState = null;
      $scope.$apply();
    });
    $scope.numOfQuestions = 14;
    supersonic.ui.views.current.whenVisible(function(){
      current_view = parseInt(steroids.view.params.id);
      $scope.currentPage = $scope.surveyPage[current_view];
      $scope.$apply();
    });

    function setItem(firstVote, secondVote){
      localStorage.setItem('vote_' + $scope.currentPage.start_with, firstVote);
      if(secondVote !== 0){
        var secondKey = parseInt($scope.currentPage.start_with) + 1;
        localStorage.setItem('vote_' + secondKey, secondVote);
      }
    }

  });
