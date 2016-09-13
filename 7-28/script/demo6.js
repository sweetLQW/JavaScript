var  stu = (function(){
	var data = [
				{
					name:"小红",
					age:20,
					score:99,
				},
				{
					name:"小绿",
					age:21,
					score:80,
				},
				{
					name:"小蓝",
					age:24,
					score:93,
				},
				{
					name:"小紫",
					age:23,
					score:78,
				},
			];
	return {
		data:data,
		bubbleSort:function(member){
			var len = this.data.length
			for(var i = len;i>=2;i--){
				for(var j = 0;j<i-1;j++){
					if(this.data[j][member] > this.data[j+1][member]){
						var temp = this.data[j];
						this.data[j] = this.data[j+1];
						this.data[j+1] = temp;
					}
				}
			}
		},
		ageSort:function(){
			this.bubbleSort("age");
		},
		scoreSort:function(){
			this.bubbleSort("score");
		}
	}
})()