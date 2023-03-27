// define arrays for the data
var president = ["Arpit Kumar Singh", "Sahil Yardi", "Chirag Gour", "NOTA"];
var cult = ["Devulapalli Rajesh", "Spandan Chakraborty", "NOTA"];
var sports = ["Snehajit Dey", "Kartikey Sharma", "Gara Bhanuprasad", "Pathivada Saran Teja", "NOTA"];
var snt = ["Tarun Soni", "Jha Rohan", "NOTA"];
var mess = ["Shubham Sadhya", "Palash Praveen", "NOTA"];
var coa = ["Aniket Tiwari", "Sumit Jangir", "NOTA"];
var hostel = ["Lekhraj Saini", "NOTA"];
var acads_ug = ["Shashant Kumar", "NOTA"];
var acads_pg = ["Shubham Jain", "NOTA"];
var sen_pg = ["Prasanna Bairagi", "NOTA"];
var sen_mems = ["Ishan Shrivastava", "NOTA"];
var sen_me = ["Sachin Sahu", "NOTA"];
var sen_ce = ["Anshu Ratan", "NOTA"];
var sen_cse = ["Gourav Ahlawat", "NOTA"];
var sen_ee = ["Dev Kumar Jain", "NOTA"];
var mems = ["Anjaneya Parashar", "Shivansh Malpani", "Madhav Rathore", "NOTA"];
var me = ["Anshul Vijaywargiya", "Khwab Gupta", "NOTA"];
var ce = ["	Pushkar Singh Kushwaha", "Saifuddin NagriWala", "Yash Kumar Meena", "NOTA"];
var cse = ["Pratham Gupta", "Darshil Patel", "Abhinav Gangil"];
var ee = ["Ishita Pandey", "Rishit Mehrotra", "NOTA"];

// define a function to call the array and select any random element from them
function randomize(array) {
    return array[Math.floor(Math.random() * array.length)];
}