import { formatDate } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbIconConfig } from '@nebular/theme';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiResponse } from './model/ApiResponse';
import { AthleteData } from './model/AthleteData';
import { AthlrteEvent } from './model/AthlrteEvent';
import { AlertService } from './service/alert.service';
import { AthleteService } from './service/Athlete.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  athleteData: AthleteData = new AthleteData();
  title = 'AthleteMSUI';

  bellIconConfig: NbIconConfig = { icon: 'bell-outline', pack: 'eva' };
  selectedItem = '';

  date : Date = new Date();

  dateOfBirth = new FormControl();

  selectedGender= new FormControl();
  selectedCountry= new FormControl();
  selectedEvents= new FormControl();

  form = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    selectedGender: new FormControl(),
    dateOfBirth: new FormControl(),
    selectedCountry: new FormControl(),
    selectedEvents: new FormControl(),
    myInput: new FormControl(),
    nic: new FormControl()
  });

  constructor(
    private config: NgbModalConfig,
    private alertService: AlertService,
    private athleteService: AthleteService,
  ) {
   
    config.backdrop = 'static';
    config.keyboard = false;

  }

  genderList=["Female","Male"];

  countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
  ];


  eventList: AthlrteEvent[]= [
    {eventGroup:"Sprints",event:"100m",groupAndEvent:"Sprints (100m)"},
    {eventGroup:"Sprints",event:"200m",groupAndEvent:"Sprints (200m)"},
    {eventGroup:"Sprints",event:"400m",groupAndEvent:"Sprints (400m)"},
    {eventGroup:"Relays",event:"4x100m",groupAndEvent:"Relays (4x100m)"},
    {eventGroup:"Relays",event:"4x400m",groupAndEvent:"Relays (4x400m)"},
    {eventGroup:"Middle and Long distances",event:"800m",groupAndEvent:"Middle and Long distances (800m)"},
    {eventGroup:"Middle and Long distances",event:"1500m",groupAndEvent:"Middle and Long distances (1500m)"},
    {eventGroup:"Middle and Long distances",event:"5000m",groupAndEvent:"Middle and Long distances (5000m)"},
    {eventGroup:"Middle and Long distances",event:"10000m",groupAndEvent:"Middle and Long distances (10000m)"},
    {eventGroup:"Middle and Long distances",event:"3000m steeplechase",groupAndEvent:"Middle and Long distances (3000m steeplechase)"},
    {eventGroup:"Race walks",event:"20km",groupAndEvent:"Race walks (20km)"},
    {eventGroup:"Race walks",event:"50km",groupAndEvent:"Race walks (50km)"},
    {eventGroup:"Marathon",event:"Marathon",groupAndEvent:"Marathon"},
    {eventGroup:"Jumps",event:"High Jump",groupAndEvent:"Jumps (High Jump)"},
    {eventGroup:"Jumps",event:"Long Jump",groupAndEvent:"Jumps (Long Jump)"},
    {eventGroup:"Jumps",event:"Triple Jump",groupAndEvent:"Jumps (Triple Jump)"},
    {eventGroup:"Jumps",event:"Pole Vault",groupAndEvent:"Jumps (Pole Vault)"},
    {eventGroup:"Throws",event:"Javelin",groupAndEvent:"Throws (Javelin)"},
    {eventGroup:"Throws",event:"Discus",groupAndEvent:"Throws (Discus)"},
    {eventGroup:"Throws",event:"Hammer",groupAndEvent:"Throws (Hammer)"},
    {eventGroup:"Throws",event:"Shot Put",groupAndEvent:"Throws (Shot Put)"},
    {eventGroup:"Combined events",event:"Heptathlon",groupAndEvent:"Combined events (Heptathlon)"},
    {eventGroup:"Combined events",event:"Decathlon",groupAndEvent:"Combined events (Decathlon)"}
  ];

  selectedFiles: File[] = [];
  base64image='';
  base64CompressedImage: string ='';

  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };

  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  dangerStatus: NbComponentStatus = 'danger';
  successStatus: NbComponentStatus = 'success';
  warningStatus: NbComponentStatus = 'warning';

  uploadTest(files: File[]) {
    this.selectedFiles = files;
  }


  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

      let me = this;
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        //me.modelvalue = reader.result;
        const base64image = reader.result?.valueOf();
        console.log("base64Image :::::::::::::::::::::::::>>>>>>>>> ",base64image);


        me.base64CompressedImage= me.base64image;

      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };

      this.selectedFiles.push(file);

    }
  }

  clear() {
    this.form.reset();
    this.base64image='';
    this.athleteData = new AthleteData();
  }



  save(){

    let firstName = this.form.get('firstName')?.value;
    let lastName = this.form.get('lastName')?.value;
    let nicNo = this.form.get('nic')?.value;
    let selectedGender = this.form.get('selectedGender')?.value;
    let dateOfBirth = this.form.get('dateOfBirth')?.value;
    let selectedCountry = this.form.get('selectedCountry')?.value;
    let selectedEvents = this.form.get('selectedEvents')?.value;
    

    console.log("firstName       >>>>>>>>>>>>>  ",firstName);
    console.log("lastName        >>>>>>>>>>>>>  ",lastName);
    console.log("nicNo           >>>>>>>>>>>>>  ",nicNo);
    console.log("selectedGender  >>>>>>>>>>>>>  ",selectedGender);
    console.log("dateOfBirth     >>>>>>>>>>>>>  ",dateOfBirth);
    console.log("selectedCountry >>>>>>>>>>>>>  ",selectedCountry);
    console.log("selectedEvents  >>>>>>>>>>>>>  ",selectedEvents);
    

    const validateNIC = /^[0-9]{9}[V|v]$|^[0-9]{12}$/;


    if(firstName === null|| firstName === ''){
      this.alertService.showAlertToast(this.warningStatus, true, 20000, true, this.position, true, "Warning!", "Please enter first name.");
      return;
    }else if(lastName === null|| lastName === ''){
      this.alertService.showAlertToast(this.warningStatus, true, 20000, true, this.position, true, "Warning!", "Please enter last name.");
      return;
    }else if (!validateNIC.test(nicNo)) {
      this.alertService.showAlertToast(this.warningStatus, true, 20000, true, this.position, true, "Warning!", "Entered NIC not in correct pattern.");
      return;
    }else if(selectedGender === null|| selectedGender === ''){
      this.alertService.showAlertToast(this.warningStatus, true, 20000, true, this.position, true, "Warning!", "Please select gender.");
      return;
    }else if(dateOfBirth === null){
      this.alertService.showAlertToast(this.warningStatus, true, 20000, true, this.position, true, "Warning!", "Please select birthday.");
      return;
    }else if(selectedCountry === null|| selectedCountry === ''){
      this.alertService.showAlertToast(this.warningStatus, true, 20000, true, this.position, true, "Warning!", "Please select country.");
      return;
    }else if (this.selectedFiles === null || this.selectedFiles.length === 0) {
      this.alertService.showAlertToast(this.warningStatus, true, 20000, true, this.position, true, "Warning", "Please select a profile image.");
      return;
    }else if(selectedEvents === null|| selectedEvents === ''){
      this.alertService.showAlertToast(this.warningStatus, true, 20000, true, this.position, true, "Warning!", "Please select country.");
      return;
    }  else{
      console.log("I'm in................");
      this.athleteData.firstName = firstName;
      this.athleteData.lastName = lastName;
      this.athleteData.athleteId = nicNo;
      this.athleteData.gender = selectedGender;
      this.athleteData.dateOfBirth = this.dateFormat(dateOfBirth);
      this.athleteData.country = selectedEvents;
      this.saveAthlete(this.athleteData);
    }
  }

  //Format Date
  dateFormat(date: string) {
    let format = 'yyyy-MM-dd';
    let local = 'en-US';
    let formattedDate = formatDate(date, format, local);
    return this.validDateFormat(formattedDate);
  }

  validDateFormat(dateString:any) {
    if (dateString) {
      return dateString.replace(/\s/, 'T');
    }
    return null;
  }


  uploadFile(type:string): void {
    // progress bar starting


    if (this.selectedFiles === null || this.selectedFiles.length === 0) {
      this.alertService.showAlertToast(this.warningStatus, true, 20000, true, this.position, true, "Warning", "Please select a file to upload.");
      return;
    } else {

          const formData = new FormData();
          for (const file of this.selectedFiles) {
            formData.append('files', file, file.name);
          }

          let me = this;
          let x = 0;

      };
    }


  compressImage(src:any, newX:number, newY:number) {//
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext('2d');
        ctx?.drawImage(img, 0, 0, newX, newY);
        const data = ctx?.canvas.toDataURL();
        res(data);
      }
      img.onerror = error => rej(error);
    })
  }

  getBase64(event:any) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      console.log(reader.result);
      return reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

  getAllAthlete() {
    let response: ApiResponse = new ApiResponse();
    this.athleteService.getAllAthlete().subscribe(data => {
      response = data;
      let resultObj = JSON.parse(JSON.stringify(response));
      if (resultObj.success) {
        console.log("DATA ::::::::::::::::::::>>>>>>>>>>>>> "+ resultObj.result);
      }
    }, error => {
      this.alertService.showAlertToast(this.dangerStatus, true, 20000, true, this.position, true, "Alert!", "It seems to be not working properly. Please try again later.");
    });
  }

  saveAthlete(atthleteData: AthleteData) {
    
    let response: ApiResponse = new ApiResponse();
    this.athleteService.saveAthlete(atthleteData).subscribe(data => {
      response = data;
      let resultObj = JSON.parse(JSON.stringify(response));
      if (resultObj.success) {
        console.log("DATA ::::::::::::::::::::>>>>>>>>>>>>> "+ resultObj.result);
      }
    }, error => {
      this.alertService.showAlertToast(this.dangerStatus, true, 20000, true, this.position, true, "Alert!", "It seems to be not working properly. Please try again later.");
    });
  }

}
