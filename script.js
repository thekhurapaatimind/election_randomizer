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

// define a function to call the randomize function and display the result
function display() {
    document.getElementById("president").innerHTML = randomize(president);
    document.getElementById("cult").innerHTML = randomize(cult);
    document.getElementById("sports").innerHTML = randomize(sports);
    document.getElementById("snt").innerHTML = randomize(snt);
    document.getElementById("mess").innerHTML = randomize(mess);
    document.getElementById("coa").innerHTML = randomize(coa);
    document.getElementById("hostel").innerHTML = randomize(hostel);
    document.getElementById("acads_ug").innerHTML = randomize(acads_ug);
    document.getElementById("acads_pg").innerHTML = randomize(acads_pg);
    document.getElementById("sen_pg").innerHTML = randomize(sen_pg);
    document.getElementById("sen_mems").innerHTML = randomize(sen_mems);
    document.getElementById("sen_me").innerHTML = randomize(sen_me);
    document.getElementById("sen_ce").innerHTML = randomize(sen_ce);
    document.getElementById("sen_cse").innerHTML = randomize(sen_cse);
    document.getElementById("sen_ee").innerHTML = randomize(sen_ee);
    document.getElementById("mems").innerHTML = randomize(mems);
    document.getElementById("me").innerHTML = randomize(me);
    document.getElementById("ce").innerHTML = randomize(ce);
    document.getElementById("cse").innerHTML = randomize(cse);
    document.getElementById("ee").innerHTML = randomize(ee);
}