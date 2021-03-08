
//GET THE START BUTTON ID FROM THE HOME PAGE -----------------------
const startButton = document.getElementById('start');

//GET THE ARROW FROM THE HOMEPAGE LOGO -----------------------------
const arrowFromLogo = document.getElementById('Arrow')

//GET THE BACK BUTTON -----------------------------------------------
const backButton = document.getElementById('back_button');

//GET THE ID OF THE DIV THAT WILL COVER THE HOMEPAGE BACKGROUND ONCE YOU HOVER ON THE START BUTTON ------
const cover = document.getElementById('cover');

//GET THE BUTTON ID FOR OPENING THE PERSONAL DATA FORM 
const openCollectPersonalData = document.getElementById("openCollectPersonalData");

//NOT IN USE YET
let stackOfPages = [0, document.getElementById('how_to')];
//----------------------------------------------------------

//NOT IN USE YET
let counter = 0;
//----------------------------------------------------------

//WILL STORE THE ID OF THE PAGE THAT WAS OPENED LAST 
let lastPageOpen = undefined;

//THE f() BELLOW WILL PULL UP THE TUTORIAL PAGE 
function pullHowTo(){
   
    let element = document.getElementById("how_to");

    let elementTop = 100;
    
    let frames = setInterval(pageUp,1);

    function pageUp(){
      
      if(elementTop === 0){

        clearInterval(frames);
        
        backButton.style.display="block";
        
        openCollectPersonalData.style.display="block";
        
        lastPageOpen = 'how_to';
        
        counter++;
        
      }//----- if END {}
      else{
        
        elementTop--;
        
        element.style.top=`${elementTop}vh`;

      }//------ELSE END {}
   }//------Nested function pageUp() END{}
}//--- function pullHowTo() END {}


//THE f() BELOW WILL GO BACK A PAGE 
function goBack(){
    
    if(lastPageOpen === 'how_to') {
      
      backButton.style.display="none";  
      
      openCollectPersonalData.style.display="none";};

    let element = document.getElementById(lastPageOpen);

    let elementTop = 0;
    
    let frames = setInterval(pageDown,1);

    function pageDown(){
      
      if(elementTop === 100){
        
        clearInterval(frames);
        
        lastPageOpen = undefined;
        
      }
      else{
        
        elementTop++;
        
        element.style.top=`${elementTop}vh`;
      }
   }
}

//f()-s BELOW WILL BE RESPONCIBLE FOR THE SCALE OF THE BACKGROUND COVER WHEN THE ARROW FROM THE LOGO MAKES A 180 deg TURN 
//activates upon hover over the start button or long touch

let popSize = 1;
let pop = true;

function popIt(){
    pop = true;
    
    cover.style.transformOrigin="center";
    
    cover.style.transformBox="fill-box";
    
    let frames = setInterval(scale,1);
    
    function scale(){
    
      if(popSize > 20 || pop === false){
        clearInterval(frames);
     
    }else{
      
      cover.style.transform =`scale(${popSize},${popSize})`;
      
      popSize+=0.05;
    
    }
  } 
}

function narrowIt(){
  pop = false;
  cover.style.transformOrigin="center";
  cover.style.transformBox="fill-box";
  let frames = setInterval(scale,1);
  
  function scale(){
  if(popSize < 1 || pop === true){
      clearInterval(frames);
      (popSize < 1.05) ?  cover.style.transform = `scale(1,1)` : undefined;
   
  }else{
    cover.style.transform =`scale(${popSize},${popSize})`;
    popSize-=0.1;
  }
}
}

let rotateCount = 0;

let rotateOn = true;

function changeLogoHover(){
    
    rotateOn = true;

    arrowFromLogo.style.transformOrigin="center";
    
    arrowFromLogo.style.transformBox="fill-box";
    
    let frames = setInterval(rotate,1);
    

function rotate(){
    
    if(rotateCount === 180 || rotateOn===false){
        
      clearInterval(frames);
        
        if(rotateCount > 175) {
            
          arrowFromLogo.style.transform = `rotate(180deg)`; 
               
             popIt();};
         
    }else{

          arrowFromLogo.style.transform = `rotate(${rotateCount}deg)`;

          rotateCount+=2;
    }
  }
}

function changeLogoBack(){
    
    rotateOn = false;
    
    arrowFromLogo.style.transformOrigin="center";
    
    arrowFromLogo.style.transformBox="fill-box";
    
    let frames = setInterval(rotate,1);
    
    function rotate(){
    
      if(rotateCount === 0 || rotateOn===true){
        
        clearInterval(frames);

        if(rotateCount < 10) {
           
            arrowFromLogo.style.transform =`rotate(0deg)`

           };

        narrowIt();

    }else{
        
           arrowFromLogo.style.transform = `rotate(${rotateCount}deg)`;
          
           rotateCount-=2;
    }
  }
}

// ----------------------------------------------------------------------------------------------------

//THE f() WILL SCALE THE START BUTTON 

let scaleValue = 1;
let scaling = undefined;

function scaleStartButton(){
    scaling = true;
    let startButton = document.getElementById("start");
    startButton.style.transformOrigin="center";
    startButton.style.transformBox="fill-box";
    let frames = setInterval(scale,1);
    function scale(){
    if(scaleValue > 1.3 ){
        clearInterval(frames);
     
    }else{
        startButton.style.transform = `scale(${scaleValue},${scaleValue})`;
        scaleValue += 0.01;
        
    }
 }
}

function scaleStartButtonOut(){
  scaling = false;
  let startButton = document.getElementById("start");
  let frames = setInterval(scale,1);
  function scale(){
  if(scaleValue === 1 || scaling === true){
      clearInterval(frames);
   
  }else{
      startButton.style.transform = `scale(${scaleValue},${scaleValue})`;
      scaleValue -= 0.01;
      
  }
}
}

//ON start button HOVER
function start(){
  changeLogoHover();
  scaleStartButton();
}

//ON start button MOUSEOUT
function finish(){
  changeLogoBack();
  scaleStartButtonOut();
}




//------------------------------------------------ PERSONAL INFORMATION -----------------------------------------------------

//--1--//CLASS PERSON TO STORE THE DETAILS FOR FUTURE USE --------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

class Person {
  constructor(name, phone, email, city, country, hobbies){
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.city = city;
      this.country = country;
      this.hobbies = hobbies;
  }
}

//@@@ END OF CLASS PERSON ---------------------------------------------------
//---------------------------------------------------------------------------



//--2-//TAKE THE DETAILS FROM THE INPUT FIELDS ------------------------------------
//Get each input field from the Personal Data -------------------------------
//Such as Name, Phone number, Email, City, Country --------------------------
//---------------------------------------------------------------------------

//NAME INPUT FIELD ID --------------------------------
const nameInput = document.getElementById('nameInput');

//PHONE INPUT FIELD ID --------------------------------
const phoneInput = document.getElementById('phoneInput');

//EMAIL INPUT FIELD ID --------------------------------
const emailInput = document.getElementById('emailInput');

//CITY INPUT FIELD ID --------------------------------
const cityInput = document.getElementById('cityInput');

//COUNTRY INPUT FIELD ID --------------------------------
const countryInput = document.getElementById('countryInput');

//PHOTO INPUT FIELD ID --------------------------------
const photo = document.getElementById('photo');

//@@@ END OF TAKE THE DETAILS FROM THE INPUT FIELDS -------------------------
//---------------------------------------------------------------------------



//--3-//STORE THE PERSONAL DETAILS HERE -------------------------------------------
//---------------------------------------------------------------------------

//NAME ---- Get the Name of the Person and store it as a variable
let nameValue = [undefined];

//PHONE ---- Get the Phone number of the Person and store it as a variable
let phoneValue = [undefined];

//EMAIL ---- Get the Email of the Person and store it as a variable
let emailValue = [undefined];

//CITY ---- Get the City of the Person store it as a variable
let cityValue = [undefined];

//COUNTRY ---- Get the Country of the Person and store it as a variable
let countryValue = [undefined];

//PHOTO ---- Get the Photo and store it in a variable;
let photoValue = [undefined];


//@@@ END OF STORAGE SECTION ------------------------------------------------
//---------------------------------------------------------------------------


//--4-//CHANGE BUTTON ICONS FOR "SAVE" AND "EDIT" ---------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

//SAVE
const saveButton = "save_icon.svg";

//EDIT
const editButton = 'edit_icon.svg';

//@@@END OF CHANGE BUTTON ICONS ---------------------------------------------
//---------------------------------------------------------------------------


//--5-//GET BUTTON ID FOR EACH INPUT FIELD ----------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

//NAME SAVE / EDIT BUTTON ---------------------------------------------------
const saveName= document.getElementById('saveName');

//PHONE SAVE / EDIT BUTTON --------------------------------------------------
const savePhone = document.getElementById('savePhone');

//EMAIL SAVE / EDIT BUTTON --------------------------------------------------
const saveEmail = document.getElementById('saveEmail');

//CITY SAVE / EDIT BUTTON ---------------------------------------------------
const saveCity = document.getElementById('saveCity');

//COUNTRY SAVE / EDIT BUTTON ------------------------------------------------
const saveCountry = document.getElementById('saveCountry');


//@@@END OF GET BUTTON ID FOR EACH INPUT FIELD ------------------------------
//---------------------------------------------------------------------------



//--6-//STATUS OF EACH INPUT FIELD ------------------------------------------------
// IS IT SAVED OR NOT -------------------------------------------------------
//---------------------------------------------------------------------------

//NAME FIELD ----------------------------------------------------------------
let nameStatus = /* SAVED ? */ [false];

//PHONE FIELD ---------------------------------------------------------------
let phoneStatus = /* SAVED ? */  [false];

//EMAIL FIELD ---------------------------------------------------------------
let emailStatus = /* SAVED ? */  [false];

//CITY FIELD ----------------------------------------------------------------
let cityStatus = /* SAVED ? */  [false];

//COUNTRY FIELD -------------------------------------------------------------
let countryStatus = /* SAVED ? */  [false];


//@@@END OF STATUS OF EACH INPUT FIELD --------------------------------------
//---------------------------------------------------------------------------

//A FUNCTION TO GET THE DETAILS OF A GIVEN INPUT FIELD ----------------------
//PUTS THE VALUE OF THE INPUT FIELD IN A VARIABLE ---------------------------
//ADDS IT TO THE ARRAY ------------------------------------------------------
//REMOVES PREVIOUS VALUES FROM THE ARRAY ------------------------------------
//CHANGES THE BUTTON STYLE OF THE INPUT FIELD FROM UNSAVED TO SAVED ---------
//(FROM "SAVE" ICON to "EDIT" ICON) -----------------------------------------
//IF THE VALUE IS ALREADY THERE IT WILL REMOVE IT AND CHANGE THE BUTTON -----

function getPersonalDetails(element, valueHolder, thisButton, status){
   

  //CHECKS IF THE FIELD HAS ALREADY BEEN SAVED FROM >>>> section 6 <<<<
  if(status[status.length - 1] === false){

  //IF IT'S NOT IT WILL PUSH THE VALUE FROM THE FIELD TO THE VARIABLE FOR IT IN >>>> section 3 <<<<
      valueHolder.push(element.value);
     
  //WILL THEN REMOVE THE 1st ITEM FROM THE ARRAY AS IT WILL BE OF THE PREVIOUS STATUS
  //IF NOW WE "SAVE" THEN PREVIOUSLY IT WAS "FALSE" FOR NOT SAVED IN >>>> section 3 <<<<
      valueHolder.shift();
    
  //CHANGES THE BUTTON STYLE FROM "SAVE" TO "EDIT" BY CHANGING THE SRC OF THE IMG FILE IN >>>> section 4 <<<<
      thisButton.src  = editButton;

  //DISABLES THE INPUT FIELD IN >>>> section 2 <<<<
      element.disabled = true;

  //CHANGES THE STATUS FROM UNSAVED TO SAVED BY CHANGING THE STATUS OF THE FIELD TO TRUE >>>> section 6 <<<<
      status.push(true);

  //REMOVES PREVIOUS ITEM FROM ARRAY SO ONLY THE NEW ONE STAYS >>>> section 6 <<<<
      status.shift();

      console.log("%c" + `The ${element.id} is saved !`, `color: #28a745; font-size: 1rem; font-weight: bold;`);

      }else if (status[status.length - 1] === true){
          //REVERTS THE ABOVE FROM THE if ()
          
          element.disabled = false;
          
          thisButton.src  = saveButton;
          
          status.push(false);
          
          status.shift();
          
          console.log("%c" + `The ${element.id} is NOT saved !`, `color: red; font-size: 1rem; font-weight: bold;`);
      }

}



//VARIABLE FOR STORING THE PERSON OBJECT 
let person = undefined;
//----END OF VARIABLE TO STORE OBJECTS FROM CLASS PERSON 

const personPanel = document.getElementById('person');

const personName = document.getElementById('personName');

const personPhone = document.getElementById('personPhone');

const personEmail = document.getElementById('personEmail');

const personCity = document.getElementById('personCity');

const personCountry = document.getElementById('personCountry');

const personBackground = document.getElementById('personBackground');

const continueToJobs = document.getElementById('continueToJobs');


//MAKE A function() TO CREATE A NEW PERSON OBJECT 

// class Person {
//   constructor(name, phone, email, city, country, hobbies){
//       this.name = name;
//       this.phone = phone;
//       this.email = email;
//       this.city = city;
//       this.country = country;
//       this.hobbies = hobbies;
//   }
// }

function createPerson(){

     person = 
       new Person(
         nameValue[0], 
         phoneValue[0], 
         emailValue[0], 
         cityValue[0], 
         countryValue[0], 
         undefined
         ) ;

      
      console.table(person);
      
      personName.innerHTML = person.name;
      
      person.phone.trim;

      (person.phone.length !== 0) ? personPhone.innerHTML = person.phone : personPhone.innerHTML = "Няма информация.";
      
      person.email.trim;

      (person.email.length !== 0) ? personEmail.innerHTML = person.email : personEmail.innerHTML = "Няма информация.";
      
      person.city.trim;

      (person.city.length !== 0) ? personCity.innerHTML = person.city : personCity.innerHTML = "Няма информация.";
       
      person.country.trim;

      (person.country.length !== 0) ? personCountry.innerHTML = person.country : personCountry.innerHTML = "Няма информация.";
      
      personPanel.style.display="block";

      personBackground.style.display="block";
      
      continueToJobs.style.display="block";
};
//END OF createPerson() function -------------------------------------------------------------

function checkIfFieldsAreSaved(){
   //ARRAY WITH ALL THE STATUSES
   //Pushing values in them real time
   let personalDataStatusArray = [];
   personalDataStatusArray.push(nameStatus[0], phoneStatus[0], emailStatus[0], cityStatus[0], countryStatus[0])

   let checkIfTrue = personalDataStatusArray.every((value) => { return value === true});
   
   if(checkIfTrue === false) alert("Някои полета не са запаметени. Моля запаметете ги дори и да са празни.");
   if(checkIfTrue !== false) createPerson();
     
  
};


// GET THE MAIN CONTAINER FOR THE PERSONAL DETAILS PAGE 
const getDetails = document.getElementById('getDetails');
//------------------------------------------------------

//GET THE BACKGROUND DIV ID OF THE PERSONAL DETAILS PAGE
const inputBack = document.getElementById('inputBack');
//------------------------------------------------------

//GET THE "GO BACK" BUTTON ID 
const back_button = document.getElementById('back_button');
//-------------------------------------------------------

//GET THE "CREATE PERSON BUTTON" ID
const createPersonButton = document.getElementById('createPerson');
//-------------------------------------------------------

//FUNCTION THAT WILL BE NESTED WITHIN showGetPersonalDetails() that is envoked by button id="openCollectPersonalData"
function hideGetPersonalDetails(){
  
    let element = getDetails;
    let elementTop = 0;

    let frames = setInterval(pageDown,1);

    function pageDown(){
    if(elementTop === 100){
      back_button.setAttribute('onclick','goBack()') ;
        clearInterval(frames);
        inputBack.style.display="none";
        createPersonButton.style.display="none";
      }
      else{
        elementTop++;
        element.style.top=elementTop+"vh";
      }
    }
}
//-------------------------------------------------------------------------------------------------------------------------

//CHECK IF THE GET PERSONAL DETAILS PAGE IS OPEN OR IT HAS BEEN OPENED DURING THIS INTERACTION
//If it has been opened already during the session it will not animate the form fields again 

let wasItOpenAlready = false;

function showGetPersonalDetails(){
    inputBack.style.display="block";
    let element = getDetails;
    let elementTop = 100;

    let frames = setInterval(pageUp,1);

    function pageUp(){
    if(elementTop === 0){

        clearInterval(frames);
        back_button.setAttribute('onclick','hideGetPersonalDetails()')
        createPersonButton.style.display="block";
        if(wasItOpenAlready === false ) {wasItOpenAlready = true; animateFormFields()};
        
      }
      else{
        elementTop--;
        element.style.top=elementTop+"vh";
      }
    }
    
};
//-------------------------------------------------------------------------------------------------

//ANIMATION FOR THE FORM FIELDS OF THE PERSONAL DETAILS PAGE 
function animateFormFields(){

  let element = document.getElementsByClassName('personalDataInput');
  let elementButton = document.getElementsByClassName('saveButton');
 for(let i=0; i<5; i++){ 
  let MarginTop = 100;

  let frames = setInterval(changeMargin,10);

  function changeMargin(){
  if(MarginTop === 1){

      clearInterval(frames);
      element[0].focus();
    }
    else{
      MarginTop--;
      element[i].style.marginTop=MarginTop+"vh";
      elementButton[i].style.marginTop=MarginTop+"vh";
    }
  }
 }
}
//--------------------------------------------------------------------------------------



// ----------- $$$$$$$$$$$$$$$$$$$$ -------------------- $$$$$$$$$$$$$$$$$$$$ ------------------------------- $$$$$$$$$$$$$$$$$$$ -----

//INACTIVE SECTION FOR A LATER PAGE 

// CAN IGNORE 


//Here we will open the JobDetailsInputPopUp and will take the details from the user via input fields that will be 
//saved in variables which will be added to an object that will be pushed into an array 

//Get the Jobs section from the HTML file and create a variable with it's ID selector
const jobSection = document.getElementById("Jobs");

//Get the JobDetailsInputPopUp with ID and create a variable
const addJobPopUp = document.getElementById("JobDetailsInputPopUp");

//The class for each job that will be added to the CV 
class Job {
  constructor(name, company, fromDate, toDate, discription, salary){
    this.name = name;
    this.company = company;
    this.fromDate = fromDate;
    this,toDate = toDate;
    this.discription = discription;
    this.salary = salary;
  }
}

//Create an array to store each Job as object from the class of Job
let jobs = [undefined];

//Get the name of a Job and store it as a variable
let jobNameValue = [undefined];
//Get the name of the Company and store it as a variable
let companyNameValue = [undefined];
//Get the From date and store it as a variable
let fromDateValue = [undefined];
//Get the To date and store it as a variable
let toDateValue = [undefined];
//Get the Description and store it as a variable
let jobDescriptionValue = [undefined];
//Get the Salary and store it in a variable;
let salaryValue = [undefined];

//Get each input field from the JobDetailsInputPopUp 
const jobName = document.getElementById('jobTitleInput');

const companyName = document.getElementById('companyTitleInput');

const from = document.getElementById('fromInput');

const to = document.getElementById('toInput');

const description = document.getElementById('jobDescriptionInput');

const salary = document.getElementById('salaryInput');


//We will need to take the values from those input fields on the JobDetailsInputPopUp and store them temporarily 
//in the jobName, companyName, fromDate, toDate, jobDescription variables


//Button variables

const saveJobTitle = document.getElementById('saveJobTitle');

const saveCompanyName = document.getElementById('saveCompanyName');

const saveFrom = document.getElementById('saveFrom');

const saveTo = document.getElementById('saveTo');

const saveJobDescription = document.getElementById('saveJobDescription');

const saveSalary = document.getElementById('saveSalary');


//Status of each field Saved or Edited


let jobNameStatus = [false];

let companyNameStatus = [false];

let fromStatus = [false];

let toStatus = [false];

let jobDescriptionStatus = [false];

let salaryStatus = [false];

function getJobDetails(element, valueHolder, thisButton, status){
    if(status[status.length - 1] === false){
    valueHolder.push(element.value);
    valueHolder.shift();
    console.log(valueHolder);
    thisButton.src  = editButton;
    element.disabled = true;
    status.push(true);
    status.shift();
    console.log(status);
    }else if (status[status.length - 1] === true){
        
        element.disabled = false;
        thisButton.src  = saveButton;
        status.push(false);
        status.shift();
        console.log(status);
    }

}

function createJob(){
  jobs.push(
    new Job(
    jobNameValue[0], 
    companyNameValue[0], 
    fromDateValue[0],
    toDateValue[0], 
    jobDescriptionValue[0], 
    salaryValue[0]))
  console.log(jobs);
}




//The function that will append each new Job to the Jobs section
//The variable will hold the value of how many Jobs are created
let countOfJobsOnCV = 0;

function createNewJob(){
  addJobPopUp.style.display = "block";
  

}