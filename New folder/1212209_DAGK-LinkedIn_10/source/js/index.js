		var app = angular.module('myApp', []);
		app.controller('myController', function($scope, $http){
			$scope.edit = false;
			$scope.editS = false;
			window.MY_SCOPE = $scope;
			$http.get('Data/myinfo.json').then(function(response){
				$scope.myInfo = response.data.myInfo;
				$http.get("Data/summary.json").then(function(response1){
					$scope.summary = response1.data.summary;
				$http.get("Data/Experience.json").then(function(response2){
						$scope.experiences = response2.data.MyExperience;
				$http.get("Data/Project.json").then(function(response3){
						$scope.projects = response3.data.MyProject;
				$http.get("Data/Skills.json").then(function(response4){
						$scope.skills = response4.data.skill;
				$http.get("Data/Education.json").then(function(response5){
						$scope.education = response5.data.Education;
					        });
					      });
					   });
					});
				});
			});

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
			 //    $scope.temp = {};
				// $scope.temp = $scope.experiences[0];
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
					Id: $scope.Id,
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
			 //    $scope.temp = {};
				// $scope.temp = $scope.experiences[0];
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
					Id: $scope.pId,
					Position: $scope.pPosition,
					Name: $scope.pName,
					Time: $scope.pTime,
					Descrise: $scope.pDescrise
				});
			};
		});
