import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbIconConfig } from '@nebular/theme';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AthlrteEvent } from './model/AthlrteEvent';
import { AlertService } from './service/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'AthleteMSUI';

  bellIconConfig: NbIconConfig = { icon: 'bell-outline', pack: 'eva' };
  selectedItem = '';
  selectedCountry = '';

  date : Date = new Date();

  dateOfBirth = new FormControl();

  form = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    dateOfBirth: new FormControl()
  });

  constructor(
    private config: NgbModalConfig,
    private alertService: AlertService,
  ) {
   
    config.backdrop = 'static';
    config.keyboard = false;

  }

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

  selectedEvents:AthlrteEvent[] = [];

  selectedFiles: File[] = [];

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

      this.selectedFiles.push(file);

    }

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
}
