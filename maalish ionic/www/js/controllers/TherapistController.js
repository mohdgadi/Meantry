app.controller('TherapistController', [ '$scope' ,'$localStorage','$location', function($scope,$localStorage,$location) {

	$scope.objects=[
	{
		name:"Mohammed Gadiwala",
		img:"http://findicons.com/files/icons/1072/face_avatars/300/a02.png",
		price:"400",
		ratings:"4.3"
	},
	{
		name:"Hrushikesh",
		img:"http://findicons.com/files/icons/1072/face_avatars/300/a02.png",
		price:"500",
		ratings:"3.3"
	},
	{

		name:"Amol Gopale",
		img:"http://findicons.com/files/icons/1072/face_avatars/300/a02.png",
		price:"1000",
		ratings:"1.3"
	},
	{
		name:"Virat Kohli",
		img:"http://findicons.com/files/icons/1072/face_avatars/300/a02.png",
		price:"300",
		ratings:"5.0"
	}


	];


}]);