		var ref = new Firebase("https://1212209linked.firebaseio.com");
		ref.authWithOAuthPopup("facebook", function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		  }
		});

		var app = angular.module('myApp', ["firebase"]);
		app.controller('myController', function($scope, $firebaseArray){
			$scope.edit = false;
			$scope.editS = false;
			window.MY_SCOPE = $scope;

			var ref1 = new Firebase("https://1212209linked.firebaseio.com/myInfo");
			var ref2 = new Firebase("https://1212209linked.firebaseio.com/summary");
			var ref3 = new Firebase("https://1212209linked.firebaseio.com/MyExperience");
		    var ref4 = new Firebase("https://1212209linked.firebaseio.com/MyProject");
		    var ref5 = new Firebase("https://1212209linked.firebaseio.com/skill");
		    var ref6 = new Firebase("https://1212209linked.firebaseio.com/Education");

			$scope.myInfo = $firebaseArray(ref1);
			$scope.summary = $firebaseArray(ref2);
			$scope.experiences = $firebaseArray(ref3);
			$scope.projects = $firebaseArray(ref4);
			$scope.skills = $firebaseArray(ref5);
			$scope.education = $firebaseArray(ref6);
			//handling edit skill
			$scope.Skill = false;

			$scope.AddSkills = function(){
				$scope.Skill = true;
			};

			$scope.AddSkill = function(sNameskill){
				$scope.skills.push({
					"Name":sNameskill
				});
				$scope.Skill = false;
			};

			//handling edit education
			$scope.editEducation = function(){
				$scope.editE = true;
			};

			$scope.SaveEducation = function(){
				$scope.editE = false;
				$scope.education[0].Name = $scope.e.Name ;
				$scope.education[0].Time = $scope.e.Time ;
				$scope.education[0].GPA = $scope.e.GPA ;
				$scope.education[0].Major = $scope.e.Major ;
			};
			//handling edit profile
			$scope.editProfile = function(){
				$scope.edit = true;
			};

			$scope.SaveProfile = function(){
				$scope.edit = false;
				$scope.myInfo[0].Name = $scope.x.Name ;
				$scope.myInfo[0].Carrer = $scope.x.Carrer ;
				$scope.myInfo[0].Contact = $scope.x.Contact ;
				$scope.myInfo[0].Country = $scope.x.Country ;
			};

			//handling edit summary
			$scope.EditMySummary = function(){
				$scope.editS = true;
			};

			$scope.SaveMySummary = function(){
				$scope.editS = false;
				$scope.summary[0].Content = $scope.s.Content;
			};

			//handling edit, save and create experences
			$scope.hideFormExperiences = true;

			$scope.EditMyExperiences = function(Id){
				$scope.hideFormExperiences = false;
				$scope.Experience = true;
				$scope.Position = $scope.experiences[Id-1].Position;
				$scope.Company = $scope.experiences[Id-1].Company;
				$scope.Time = $scope.experiences[Id-1].Time;
				$scope.Id = Id-1;
			};

			$scope.SaveMyExperiences = function(){
				$scope.hideFormExperiences = true;
				$scope.experiences[$scope.Id].Position = $scope.Position;
				$scope.experiences[$scope.Id].Company = $scope.Company;
				$scope.experiences[$scope.Id].Time = $scope.Time;

			};

			$scope.CreateMyExperiences = function(){
				$scope.hideFormExperiences = false;
				$scope.Experience = false;
				$scope.Position = "";
				$scope.Company = "";
				$scope.Time = "";
				$scope.Id = "";
			};

			$scope.AddMyExperiences = function(){
			    $scope.hideFormExperiences = true;
				$scope.experiences.push({
					Id: "",
					Position: $scope.Position,
					Company: $scope.Company,
					Time: $scope.Time
				});
			};

			//handling edit, save and create project
			$scope.hideFormProject = true;

			$scope.EditMyProjects = function(pId){
				$scope.hideFormProject = false;
				$scope.Project = true;
				$scope.pPosition = $scope.projects[pId-1].Position;
				$scope.pName = $scope.projects[pId-1].Name;
				$scope.pTime = $scope.projects[pId-1].Time;
				$scope.pDescrise = $scope.projects[pId-1].Descrise;
				$scope.pId = pId-1;
			};

			$scope.SaveMyProjects = function(){
				$scope.hideFormProject = true;
				$scope.projects[$scope.Id].Name = $scope.p.Name;
				$scope.projects[$scope.Id].Position = $scope.p.Position;
				$scope.projects[$scope.Id].Time = $scope.p.Time;
				$scope.projects[$scope.Id].Descrise = $scope.p.Descrise;
			};

			$scope.CreateMyProject = function(){
				$scope.hideFormProject = false;
				$scope.Project = false;
				$scope.pPosition = "";
				$scope.pName ="";
				$scope.pTime = "";
				$scope.pDescrise = "";
				$scope.pId = "";
			};

			$scope.AddMyProject = function(){
			    $scope.hideFormProject = true;
				$scope.projects.push({
					Id: "",
					Position: $scope.pPosition,
					Name: $scope.pName,
					Time: $scope.pTime,
					Descrise: $scope.pDescrise
				});
			};
		});