/*Adding values of arrays in a shifted way

You have to write a method, that gets two parameter:

1. An array of arrays with int-numbers
2. The shifting value

#The method should add the values of the arrays to one new array.

The arrays in the array will all have the same size and this size will always be greater than 0.
The shifting value is always a value from 0 up to the size of the arrays.
There are always arrays in the array, so you do not need to check for null or empty.

#1. Example:

[[1,2,3,4,5,6], [7,7,7,7,7,-7]], 0

1,2,3,4,5,6
7,7,7,7,7,-7

--> [8,9,10,11,12,-1]

#2. Example

[[1,2,3,4,5,6], [7,7,7,7,7,7]], 3

1,2,3,4,5,6
      7,7,7,7,7,7

--> [1,2,3,11,12,13,7,7,7]

#3. Example

[[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]], 3


1,2,3,4,5,6
      7,7,7,-7,7,7
            1,1,1,1,1,1

--> [1,2,3,11,12,13,-6,8,8,1,1,1]

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.


*/
const numb = [
	[1,2,3,4,5,6,7,8],
	[1,2,3,4,5,6,7,8],
	[1,2,3,4,5,6,7,8],
	[1,2,3,4,5,6,7,8],
	[1,2,3,4,5,6,7,8]
];
//we use shift to remove values at the begining of the array
//we use unshift to add values at the begining of the array
//we use pop to remove values at the end of the array
//we use push to add values at the end of the array
function addArrays(arrays,nshift){
let num=0;
let eq=0;
let noteq=0;
let i=0
const finalArray =[];
	num=arrays.length;
	initlength=arrays[0].length;
	if(nshift < 0 || nshift > initlength){
		if(nshift > initlength){
			return `number to shift ${nshift} more than length of array ${num}, therefore we cannot continue`;
		}else if(nshift < 0){
			return `number to shift ${nshift} is less than 0, therefore we cannot continue`;
		}
	}
	else{
		while(i<num){
			arrays[0].length==arrays[i].length ? eq++: noteq++;
			i++;
		}
		if(noteq>0){
			return (`${noteq} array(s) is/are not equal to the other ${eq}`);
		}else{
			for(i=1;i<num;i++){
				for(let k=0;k<nshift*i;k++){
					arrays[i].unshift(0);
				}
			}
			//console.log(arrays);
			let finalArray = arrays[(arrays.length)-1];
			for(i=0;i<arrays.length-1;i++){
				for(k=0;k<finalArray.length;k++){
					if(k<arrays[i].length && k<finalArray.length){
						finalArray[k] += arrays[i][k];
					}
				}
			}
			return finalArray;
		}
	}
}
console.log(addArrays(numb,6));
