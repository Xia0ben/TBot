/*
# To test after a while if still downloads images
*/
//curl 'https://images-ssl.gotinder.com/u/Rha5JzS9b2PhMFUCQe9vua/VUpZrr3cUYwiU5qmwBEoVN.jpg?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IiovdS9SaGE1SnpTOWIyUGhNRlVDUWU5dnVhLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MzQ2NDY3Mzh9fX1dfQ__&Signature=b~t5yNV3-3tCeqHAVM9JwXRqor6aUJfAlw50zmI5B38vy0VkU7DajuDZh9dLDpcEIzhOVpHMX1zJoKQ5N~3o0YkRa-ozixMfLO3Q~fhMAt0dHadCEAA1QhNirha8lEB8cRQTiAYvk3NgrLTXbCJ-2iPTS29aUBf5YXg8xHg3I03mjp8zQeffSWtpyr1ZimWn4ynSMHUkZXi91E-R-o~j15xqGznttv7xHvVTQzQ0BuYx3KkrRxdXp3sXFvtFY9OztRlT1dikSwm3gBE2nXvMH3pIWG7CIZUV94ew3p~mxmarISue2NnehuFlarlmY9c5Wj35lvgs3I68cHGFAUg~Hg__&Key-Pair-Id=K368TLDEUPA6OI' -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0' -H 'Accept: image/webp,*/*' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Referer: https://tinder.com/' -H 'DNT: 1' -H 'Connection: keep-alive' -H 'Sec-Fetch-Dest: image' -H 'Sec-Fetch-Mode: no-cors' -H 'Sec-Fetch-Site: cross-site' -H 'TE: trailers' --output test.jpg
/*
# To change location in Firefox
geo.provider.network.url	data:application/json,{"location": {"lat": 45.74235, "lng": 4.858121}, "accuracy": 27000.0}

# Links to useful resources to finish up the bot

* [GitHub - fingerprintjs/botd: Bot detection agent that runs in the browser. Identify JavaScript bots, browser spoofing, virtual machines and much more.](https://github.com/fingerprintjs/botd "GitHub - fingerprintjs/botd: Bot detection agent that runs in the browser. Identify JavaScript bots, browser spoofing, virtual machines and much more.")
* [GitHub - RoBYCoNTe/js-bot-detector: An easy way to check if users visiting your websites are bot or not.](https://github.com/RoBYCoNTe/js-bot-detector "GitHub - RoBYCoNTe/js-bot-detector: An easy way to check if users visiting your websites are bot or not.")
* [GitHub - justadudewhohacks/face-api.js: JavaScript API for face detection and face recognition in the browser and nodejs with tensorflow.js](https://github.com/justadudewhohacks/face-api.js "GitHub - justadudewhohacks/face-api.js: JavaScript API for face detection and face recognition in the browser and nodejs with tensorflow.js")
* [Simple Swipe with Vanilla JavaScript | CSS-Tricks](https://css-tricks.com/simple-swipe-with-vanilla-javascript/ "Simple Swipe with Vanilla JavaScript | CSS-Tricks")
* [jquery - How to take screenshot of a div with JavaScript? - Stack Overflow](https://stackoverflow.com/questions/6887183/how-to-take-screenshot-of-a-div-with-javascript "jquery - How to take screenshot of a div with JavaScript? - Stack Overflow")
* [html2canvas - Screenshots with JavaScript](https://html2canvas.hertzen.com/ "html2canvas - Screenshots with JavaScript")
* [How to include JavaScript file or library in Chrome console? - Stack Overflow](https://stackoverflow.com/questions/5282228/how-to-include-javascript-file-or-library-in-chrome-console/57814219#57814219 "How to include JavaScript file or library in Chrome console? - Stack Overflow")
* [Call to eval() blocked by CSP with Selenium IDE - Stack Overflow](https://stackoverflow.com/questions/57426099/call-to-eval-blocked-by-csp-with-selenium-ide "Call to eval() blocked by CSP with Selenium IDE - Stack Overflow")
* [javascript - How to get base64 encoded data from html image - Stack Overflow](https://stackoverflow.com/questions/15760764/how-to-get-base64-encoded-data-from-html-image/15761420 "javascript - How to get base64 encoded data from html image - Stack Overflow")
*/


const ALL_PASSIONS = [
  "Foodie",
  "Sushi",
  "Theater",
  "Sneakers",
  "Instagram",
  "Walking",
  "Running",
  "Travel",
  "Language Exchange",
  "Movies",
  "Golf",
  "Photography",
  "Reading",
  "Sports",
  "Coffee",
  "Karaoke",
  "Grab a drink",
  "Foodie Tour",
  "Investing",
  "Walking My Dog",
  "Skateboarder",
  "Sailing",
  "Shopping",
  "Brunch",
  "Introvert",
  "Second-hand apparel",
  "Second-hand shopping",
  "Road Trips",
  "Vintage fashion",
  "Voguing",
  "Couchsurfing",
  "Happy hour",
  "Making friends",
  "Up for anything",
  "Serious Relationship",
  "No pressure meetups",
  "Hiking",
  "Extrovert",
  "Fishing",
  "Tennis",
  "Petanque",
  "Expositions",
  "Skiing",
  "Snowboarding",
  "Street Food",
  "Festivals",
  "Crossfit",
  "Motor Sports",
  "Esports",
  "Climbing",
  "Baking",
  "Blogging",
  "Plant-based",
  "Start ups",
  "Tattoos",
  "Vegan",
  "Surfing",
  "Writer",
  "Vegetarian",
  "Athlete",
  "Fashion",
  "Gamer",
  "Astrology",
  "Motorcycles",
  "Spirituality",
  "Cooking",
  "Soccer",
  "Dancing",
  "Gardening",
  "Amateur Cook",
  "Art",
  "DIY",
  "Politics",
  "Cycling",
  "Museum",
  "Outdoors",
  "Activism",
  "Picnicking",
  "Comedy",
  "Music",
  "Netflix",
  "Disney",
  "Parties",
  "Tarot",
  "Podcasts",
  "Dog lover",
  "BBQ",
  "Craft Beer",
  "Swimming",
  "Tea",
  "Board Games",
  "Tango",
  "Trivia",
  "Volunteering",
  "Environmentalism",
  "Street food",
  "Wine",
  "Vlogging",
  "Cat lover",
  "Working out",
  "Yoga"
];

const ALL_ZODIAC = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius"
];

const ALL_COMMUNICATION_STYLES = [
  "Big time texter",
  "Video chatter",
  "Phone caller",
  "Bad texter",
  "Better in person"
];

const ALL_DRINKS_OF_CHOICE = [
  "Wine",
  "Beer",
  "Cocktails",
  "Straightedge",
  "Coffee",
  "Sober"
];

const ALL_DIETARY_PREFERENCES = [
  "Vegan",
  "Vegetarian",
  "Pescatarian",
  "Kosher",
  "Halal",
  "Flexitarian",
  "Carnivore",
  "Omnivore"
];

const ALL_PETS = [
  "Dog",
  "Cat",
  "Reptile",
  "Amphibian",
  "Fish",
  "Pet-free",
  "All the pets"
];

const ALL_SOCIAL_MEDIA = [
  "Influencer status",
  "Socially active",
  "Off the grid"
];

const ALL_WORKOUTS = [
  "Gym Rat",
  "Occasionally",
  "Never"
];

const ALL_SMOKING = [
  "Social Smoker",
  "Smoker when drinking",
  "Non-smoker",
  "Smoker"
]

const ALL_GENDERS = [
  "Man",
  "Woman",
  "Agender",
  "Androgyne",
  "Androgynous",
  "Bigender",
  "Female to Male",
  "FTM",
  "Gender Fluid",
  "Gender Nonconforming",
  "Gender Questioning",
  "Gender Variant",
  "Genderqueer",
  "Male to Female",
  "MTF",
  "Neither",
  "Neutrois",
  "Non-binary",
  "Other",
  "Pangender",
  "Trans",
  "Trans Man",
  "Trans Person",
  "Trans Woman",
  "Transfeminine",
  "Transgender",
  "Transgender Female",
  "Transgender Male",
  "Transgender Man",
  "Transgender Person",
  "Transgender Woman",
  "Transmasculine",
  "Transsexual",
  "Transsexual Female",
  "Transsexual Male",
  "Transsexual Man",
  "Transsexual Person",
  "Transsexual Woman",
  "Two-Spirit"
]

ALL_SEXUAL_ORIENTATIONS = [
  "Straight",
  "Gay",
  "Lesbian",
  "Bisexual",
  "Asexual",
  "Demisexual",
  "Pansexual",
  "Queer",
  "Questioning"
]

function getClosedProfileCard() {
  return document.getElementsByClassName("recsCardboard__cardsContainer")[0];
}

function getProfileCard() {
  return document.getElementsByClassName("profileCard")[0];
}

function getNameElement() {
  return getProfileCard().getElementsByTagName('h1')[0];
}

function getName() {
  try {
    return getNameElement().textContent;
  } catch (e) {
    return "";
  }
}

function getAge() {
  try {
    let age = parseInt(getNameElement().parentNode.parentNode.getElementsByTagName("span")[0].textContent);
    return (isNaN(age) ? 0 : age)
  } catch (e) {
    return 0;
  }
}

function isVerified() {
  try {
    return Array.from(getProfileCard().getElementsByTagName('title')).filter((element) => {return element.textContent.indexOf("Verified!") >= 0}).length > 0;
  } catch(e) {
    return false;
  }
}

function getJob() {
  try {
    const jobSVGPath = "M7.15 3.434h5.7V1.452a.728.728 0 0 0-.724-.732H7.874a.737.737 0 0 0-.725.732v1.982z";
    let jobIcon = Array.from(getProfileCard().getElementsByTagName("path")).filter((element) => {return element.getAttribute("d") === jobSVGPath})[0];
    return jobIcon.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("Us(t)")[0].textContent;
  } catch (e) {
    return "";
  }
}

function getSchool() {
  try {
    const schoolSVGPath = "M11.87 5.026L2.186 9.242c-.25.116-.25.589 0 .705l.474.204v2.622a.78.78 0 0 0-.344.657c0 .42.313.767.69.767.378 0 .692-.348.692-.767a.78.78 0 0 0-.345-.657v-2.322l2.097.921a.42.42 0 0 0-.022.144v3.83c0 .45.27.801.626 1.101.358.302.842.572 1.428.804 1.172.46 2.755.776 4.516.776 1.763 0 3.346-.317 4.518-.777.586-.23 1.07-.501 1.428-.803.355-.3.626-.65.626-1.1v-3.83a.456.456 0 0 0-.022-.145l3.264-1.425c.25-.116.25-.59 0-.705L12.13 5.025c-.082-.046-.22-.017-.26 0v.001zm.13.767l8.743 3.804L12 13.392 3.257 9.599l8.742-3.806zm-5.88 5.865l5.75 2.502a.319.319 0 0 0 .26 0l5.75-2.502v3.687c0 .077-.087.262-.358.491-.372.29-.788.52-1.232.68-1.078.426-2.604.743-4.29.743s-3.212-.317-4.29-.742c-.444-.161-.86-.39-1.232-.68-.273-.23-.358-.415-.358-.492v-3.687z";
    let schoolIcon = Array.from(getProfileCard().getElementsByTagName("path")).filter((element) => {return element.getAttribute("d") === schoolSVGPath})[0];
    return schoolIcon.parentNode.parentNode.parentNode.getElementsByClassName("Us(t)")[0].textContent;
  } catch (e) {
    return "";
  }
}

function getCity() {
  try {
    const citySVGPath = "M19.695 9.518H4.427V21.15h15.268V9.52zM3.109 9.482h17.933L12.06 3.709 3.11 9.482z";
    let cityIcon = Array.from(getProfileCard().getElementsByTagName("path")).filter((element) => {return element.getAttribute("d") === citySVGPath})[0];
    cityText = cityIcon.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("Us(t)")[0].textContent;
    return cityText.replace('Lives in ','');
  } catch (e) {
    return "";
  }
}

function getGenderAndSexualOrientationsText() {
  const genderAndSexualOrientationsSVGPath = "M15.507 13.032c1.14-.952 1.862-2.656 1.862-5.592C17.37 4.436 14.9 2 11.855 2 8.81 2 6.34 4.436 6.34 7.44c0 3.07.786 4.8 2.02 5.726-2.586 1.768-5.054 4.62-4.18 6.204 1.88 3.406 14.28 3.606 15.726 0 .686-1.71-1.828-4.608-4.4-6.338";
  let genderAndSexualOrientationsIcon = Array.from(getProfileCard().getElementsByTagName("path")).filter((element) => {return element.getAttribute("d") === genderAndSexualOrientationsSVGPath})[0];
  return genderAndOrientationText =  genderAndSexualOrientationsIcon.parentNode.parentNode.parentNode.getElementsByClassName("Us(t)")[0].textContent;
}

function getSexualOrientations() {
  try {
    let genderAndOrientationText = getGenderAndSexualOrientationsText();
    return ALL_SEXUAL_ORIENTATIONS.filter((sexualOrientation) => {return genderAndOrientationText.indexOf(sexualOrientation) >= 0})
  } catch (e) {
    return [];
  }
}

function getGender() {
  try {
    let genderAndOrientationText = getGenderAndSexualOrientationsText();
    let sexualOrientations = getSexualOrientations();
    for (const sexualOrientation of sexualOrientations) {
      genderAndOrientationText = genderAndOrientationText.replace(sexualOrientation,'');
    }
    genderAndOrientationText = genderAndOrientationText.replace(',','');
    genderAndOrientationText = genderAndOrientationText.trim();
    return genderAndOrientationText
  } catch (e) {
    return "";
  }
}

function getDistance() {
  try {
    const distanceSVGPath = "M11.436 21.17l-.185-.165a35.36 35.36 0 0 1-3.615-3.801C5.222 14.244 4 11.658 4 9.524 4 5.305 7.267 2 11.436 2c4.168 0 7.437 3.305 7.437 7.524 0 4.903-6.953 11.214-7.237 11.48l-.2.167zm0-18.683c-3.869 0-6.9 3.091-6.9 7.037 0 4.401 5.771 9.927 6.897 10.972 1.12-1.054 6.902-6.694 6.902-10.95.001-3.968-3.03-7.059-6.9-7.059h.001z";
    const extractDigitsRegex = /\d+/;
    let distanceIcon = Array.from(getProfileCard().getElementsByTagName("path")).filter((element) => {return element.getAttribute("d") === distanceSVGPath})[0];
    distanceText = distanceIcon.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("Us(t)")[0].textContent;
    let distance = parseInt(distanceText.match(extractDigitsRegex)[0])
    return (isNaN(distance) ? 0 : distance);
  } catch (e) {
    return 0;
  }
}

function getDescription() {
  try {
    return getProfileCard().getElementsByClassName("BreakWord")[0].childNodes[0].textContent
  } catch (e) {
    return "";
  }
}

function getLifestyleElements() {
  return personnalityElements = getProfileCard().getElementsByTagName("img");
}

function getLifestyleIconElement (personnalityTrait) {
  return Array.from(getLifestyleElements()).filter((element) => {return element.alt === personnalityTrait})[0];
}

function getZodiac() {
  try {
    return getLifestyleIconElement("Zodiac").parentNode.parentNode.textContent;
  } catch (e) {
    return "";
  }
}

function getCommunicationStyle() {
  try {
    return getLifestyleIconElement("Communication Style").parentNode.parentNode.textContent;
  } catch (e) {
    return "";
  }
}

function getDrinkOfChoice() {
  try {
    return getLifestyleIconElement("Drink of Choice").parentNode.parentNode.textContent;
  } catch (e) {
    return "";
  }
}

function getDietaryPreference() {
  try {
    return getLifestyleIconElement("Dietary Preference").parentNode.parentNode.textContent;
  } catch (e) {
    return "";
  }
}

function getPets() {
  try {
    return getLifestyleIconElement("Pets").parentNode.parentNode.textContent;
  } catch (e) {
    return "";
  }
}

function getSocialMedia() {
  try {
    return getLifestyleIconElement("Social Media").parentNode.parentNode.textContent;
  } catch (e) {
    return "";
  }
}

function getWorkout() {
  try {
    return getLifestyleIconElement("Workout").parentNode.parentNode.textContent;
  } catch (e) {
    return "";
  }
}

function getSmoking() {
  try {
    return getLifestyleIconElement("Smoking").parentNode.parentNode.textContent;
  } catch (e) {
    return "";
  }
}

function getPassions() {
  try {
    let passionsDivElement = Array.from(getProfileCard().getElementsByTagName("h2")).filter((element) => {return element.textContent === "Passions"})[0].parentNode;
    return Array.from(passionsDivElement.getElementsByClassName("Bdrs(100px)")).map(element => element.textContent);
  } catch (e) {
    return [];
  }
}

function getAnthemTitleAndArtist() {
  let anthemDivElement = Array.from(getProfileCard().getElementsByTagName("h2")).filter((element) => {return element.textContent === "My Anthem"})[0].parentNode;
  return anthemDivElement.getElementsByClassName("Ell");
}

function getAnthemTitle() {
  try{
    return Array.from(getAnthemTitleAndArtist()).filter((element) => {return element.tagName === "DIV"})[0].textContent;
  } catch (e) {
    return ""
  }
}

function getAnthemArtist() {
  try {
    return Array.from(getAnthemTitleAndArtist()).filter((element) => {return element.tagName === "SPAN"})[0].textContent;
  } catch (e) {
    return ""
  }
}

function open_info() {
  try {
    const openSVGPath = "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";
    let openButton = Array.from(getClosedProfileCard().getElementsByTagName("path")).filter((element) => {return element.getAttribute("d") === openSVGPath})[0].parentNode.parentNode.parentNode;
    openButton.click();
  } catch (e) {
    console.log(e);
  }
}

function close_info() {
  try{
    const closeSVGPath = "M9.35 14.561l-.895-1.09-1.301-1.587-.894-1.09c-.358-.437-.19-.794.375-.794h1.733c.096-.661.403-3.178.484-3.732.096-.66.516-1.147 1.146-1.147h.003c.63 0 1.05.487 1.147 1.147.08.554.387 3.071.484 3.732h1.732c.565 0 .734.357.376.793l-.894 1.09-1.302 1.588-.894 1.09c-.357.437-.943.437-1.3 0";
    let closeButton = Array.from(getProfileCard().getElementsByTagName("path")).filter((element) => {return element.getAttribute("d") === closeSVGPath})[0].parentNode.parentNode.parentNode;
    closeButton.click();
  } catch (e) {
    console.log(e);
  }
}

function like() {
  try {
    const likeSVGPath = "M21.994 10.225c0-3.598-2.395-6.212-5.72-6.212-1.78 0-2.737.647-4.27 2.135C10.463 4.66 9.505 4 7.732 4 4.407 4 2 6.62 2 10.231c0 1.52.537 2.95 1.533 4.076l8.024 7.357c.246.22.647.22.886 0l7.247-6.58.44-.401.162-.182.168-.174a6.152 6.152 0 0 0 1.54-4.09";
    let likeButton = Array.from(getProfileCard().getElementsByTagName("path")).filter((element) => {return element.getAttribute("d") === likeSVGPath})[0].parentNode.parentNode.parentNode.parentNode;
    likeButton.click();
  } catch (e) {
    console.log(e);
  }
}

function pass() {
  try {
    const passSVGPath = "M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z";
    let passButton = Array.from(getProfileCard().getElementsByTagName("path")).filter((element) => {return element.getAttribute("d") === passSVGPath})[0].parentNode.parentNode.parentNode.parentNode;
    passButton.click();
  } catch (e) {
    console.log(e);
  }
}

// function elementReady(selector) {
//   return new Promise((resolve, reject) => {
//     let el = document.querySelector(selector);
//     if (el) {resolve(el);}
//     new MutationObserver((mutationRecords, observer) => {
//       // Query for elements matching the specified selector
//       Array.from(document.querySelectorAll(selector)).forEach((element) => {
//         resolve(element);
//         //Once we have resolved we don't need the observer anymore.
//         observer.disconnect();
//       });
//     })
//       .observe(document.documentElement, {
//         childList: true,
//         subtree: true
//       });
//   });
// }

class Profile {
  constructor(name="", age=0, is_verified=false, job="", school="", city="", gender="", sexualOrientations=[], distance=0, description="", passions=[], zodiac="", communicationStyle="", drinkOfChoice="", dietaryPreference="", pets="", socialMedia="", workout="", smoking="", anthemTitle="", anthemArtist="") {
    this.name = name;
    this.age = age;
    this.is_verified = is_verified;
    this.job = job;
    this.school = school;
    this.city = city;
    this.gender = gender;
    this.sexualOrientations = sexualOrientations;
    this.distance = distance;
    this.description = description;
    this.passions = passions;
    this.zodiac = zodiac;
    this.communicationStyle = communicationStyle;
    this.drinkOfChoice = drinkOfChoice;
    this.dietaryPreference = dietaryPreference;
    this.pets = pets;
    this.socialMedia = socialMedia;
    this.workout = workout;
    this.smoking = smoking;
    this.anthemTitle = anthemTitle;
    this.anthemArtist = anthemArtist;
  }
}

// FILTERS
NAME_LIKELIST=[]; NAME_PASSLIST=[]; NAME_REQUIRED=false;
MIN_AGE=0; MAX_AGE=Infinity; AGE_REQUIRED=false;
JOB_LIKELIST=[]; JOB_PASSLIST=[]; JOB_REQUIRED=false;
SCHOOL_LIKELIST=[]; SCHOOL_PASSLIST=[]; SCHOOL_REQUIRED=false;
CITY_LIKELIST=[]; CITY_PASSLIST=[]; CITY_REQUIRED=false;
GENDER_LIKELIST=[]; GENDER_PASSLIST=[]; GENDER_REQUIRED=false;
SEXUAL_ORIENTATION_LIKELIST = []; SEXUAL_ORIENTATION_PASSLIST = []; SEXUAL_ORIENTATION_REQUIRED=false;
MIN_DISTANCE=0; MAX_DISTANCE=Infinity; DISTANCE_REQUIRED=false;
DESCRIPTION_LIKELIST=['Lyon']; DESCRIPTION_PASSLIST=[]; DESCRIPTION_REQUIRED=false;
PASSIONS_LIKELIST=[]; PASSIONS_PASSLIST=[]; PASSIONS_REQUIRED=false;
ZODIAC_LIKELIST=[]; ZODIAC_PASSLIST=[]; ZODIAC_REQUIRED=false;
COMMUNICATION_STYLE_LIKELIST=[]; COMMUNICATION_STYLE_PASSLIST=[]; COMMUNICATION_STYLE_REQUIRED=false;
DRINK_OF_CHOICE_LIKELIST=[]; DRINK_OF_CHOICE_PASSLIST=[]; DRINK_OF_CHOICE_REQUIRED=false;
DIETARY_PREFERENCE_LIKELIST=[]; DIETARY_PREFERENCE_PASSLIST=[]; DIETARY_PREFERENCE_REQUIRED=false;
PETS_LIKELIST=[]; PETS_PASSLIST=[]; PETS_REQUIRED=false;
SOCIAL_MEDIA_LIKELIST=[]; SOCIAL_MEDIA_PASSLIST=[]; SOCIAL_MEDIA_REQUIRED=false;
WORKOUT_LIKELIST=[]; WORKOUT_PASSLIST=[]; WORKOUT_REQUIRED=false;
SMOKING_LIKELIST=[]; SMOKING_PASSLIST=[]; SMOKING_REQUIRED=false;
ANTHEM_TITLE_LIKELIST=[]; ANTHEM_TITLE_PASSLIST=[]; ANTHEM_TITLE_REQUIRED=false;
ANTHEM_ARTIST_LIKELIST=[]; ANTHEM_ARTIST_PASSLIST=[]; ANTHEM_ARTIST_REQUIRED=false;

async function buildProfile() {
  open_info();
  await new Promise(resolve => setTimeout(resolve, 2000))
  return new Profile(
    getName(),
    getAge(),
    isVerified(),
    getJob(),
    getSchool(),
    getCity(),
    getGender(),
    getSexualOrientations(),
    getDistance(),
    getDescription(),
    getPassions(),
    getZodiac(),
    getCommunicationStyle(),
    getDrinkOfChoice(),
    getDietaryPreference(),
    getPets(),
    getSocialMedia(),
    getWorkout(),
    getSmoking(),
    getAnthemTitle(),
    getAnthemArtist()
  );
}

function keywordsInList(tocheck, list) {
  if (tocheck.constructor === Array) {
    return tocheck.filter((element) => {return list.includes(element)});
  } else {
    let keywords = [];
    tocheckNormalized = tocheck.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    for (const keyword of list) {
      normalizedKeyword = keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      if (tocheckNormalized.indexOf(normalizedKeyword) >= 0) {
        keywords.push(keyword);
      }
    }
    return keywords;
  }
}

class LikedAndPassedLists {
  constructor(tocheck, likeList, passList) {
    this.likedList = keywordsInList(tocheck, likeList);
    this.passedList = keywordsInList(tocheck, passList);
  }
}

function analyzeProfile(profile) {
  return new Profile(
    new LikedAndPassedLists(profile.name, NAME_LIKELIST, NAME_PASSLIST),
    MIN_AGE <= profile.age <= MAX_AGE,
    profile.is_verified,
    new LikedAndPassedLists(profile.job, JOB_LIKELIST, JOB_PASSLIST),
    new LikedAndPassedLists(profile.school, SCHOOL_LIKELIST, SCHOOL_PASSLIST),
    new LikedAndPassedLists(profile.city, CITY_LIKELIST, CITY_PASSLIST),
    new LikedAndPassedLists(profile.gender, GENDER_LIKELIST, GENDER_PASSLIST),
    new LikedAndPassedLists(profile.sexualOrientations, SEXUAL_ORIENTATION_LIKELIST, SEXUAL_ORIENTATION_PASSLIST),
    MIN_DISTANCE <= profile.distance <= MAX_DISTANCE,
    new LikedAndPassedLists(profile.description, DESCRIPTION_LIKELIST, DESCRIPTION_PASSLIST),
    new LikedAndPassedLists(profile.passions, PASSIONS_LIKELIST, PASSIONS_PASSLIST),
    new LikedAndPassedLists(profile.zodiac, ZODIAC_LIKELIST, ZODIAC_PASSLIST),
    new LikedAndPassedLists(profile.communicationStyle, COMMUNICATION_STYLE_LIKELIST, COMMUNICATION_STYLE_PASSLIST),
    new LikedAndPassedLists(profile.drinkOfChoice, DRINK_OF_CHOICE_LIKELIST, DRINK_OF_CHOICE_PASSLIST),
    new LikedAndPassedLists(profile.dietaryPreference, DIETARY_PREFERENCE_LIKELIST, DIETARY_PREFERENCE_PASSLIST),
    new LikedAndPassedLists(profile.pets, PETS_LIKELIST, PETS_PASSLIST),
    new LikedAndPassedLists(profile.socialMedia, SOCIAL_MEDIA_LIKELIST, SOCIAL_MEDIA_PASSLIST),
    new LikedAndPassedLists(profile.workout, WORKOUT_LIKELIST, WORKOUT_PASSLIST),
    new LikedAndPassedLists(profile.smoking, SMOKING_LIKELIST, SMOKING_PASSLIST),
    new LikedAndPassedLists(profile.anthemTitle, ANTHEM_TITLE_LIKELIST, ANTHEM_TITLE_PASSLIST),
    new LikedAndPassedLists(profile.anthemArtist, ANTHEM_ARTIST_LIKELIST, ANTHEM_ARTIST_PASSLIST)
  )
}

function judgeProfile(profile, aProfile) {
  let hardPassedLists = [
    aProfile.name.passedList, aProfile.gender.passedList, aProfile.sexualOrientations.passedList
  ];
  let passedLists = [
    aProfile.job.likedList,
    aProfile.school.likedList,
    aProfile.city.likedList,
    aProfile.description.likedList,
    aProfile.passions.likedList,
    aProfile.zodiac.likedList,
    aProfile.communicationStyle.likedList,
    aProfile.drinkOfChoice.likedList,
    aProfile.dietaryPreference.likedList,
    aProfile.pets.likedList,
    aProfile.socialMedia.likedList,
    aProfile.workout.likedList,
    aProfile.smoking.likedList,
    aProfile.anthemTitle.likedList,
    aProfile.anthemArtist.likedList
  ];
  let likedLists = [
    aProfile.name.likedList,
    aProfile.job.likedList,
    aProfile.school.likedList,
    aProfile.city.likedList,
    aProfile.gender.likedList,
    aProfile.sexualOrientations.likedList,
    aProfile.description.likedList,
    aProfile.passions.likedList,
    aProfile.zodiac.likedList,
    aProfile.communicationStyle.likedList,
    aProfile.drinkOfChoice.likedList,
    aProfile.dietaryPreference.likedList,
    aProfile.pets.likedList,
    aProfile.socialMedia.likedList,
    aProfile.workout.likedList,
    aProfile.smoking.likedList,
    aProfile.anthemTitle.likedList,
    aProfile.anthemArtist.likedList
  ];

  if (hardPassedLists.some((list) => {return list.length > 0}) || !aProfile.distance || !aProfile.age) {
    return false;
  } else if (likedLists.some((list) => {return list.length > 0})) {
    return true;
  } else if (passedLists.some((list) => {return list.length > 0})) {
    return false;
  } else if (profile.description.length > 0 && profile.isVerified) {
    if (profile.description.length < 30 && (profile.description.indexOf("ig") >= 0) || profile.description.indexOf("insta")) {
      return false;
    } else if (profile.description.length < 15 && profile.description.indexOf("@") >= 0) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

var MIN_WAIT_TIME = 2.; // secs
var MAX_WAIT_TIME = 8.; // secs
var MIN_SEARCH_TIME = 1. * 60.;  // secs
var MAX_SEARCH_TIME = 5. * 60.;  // secs

var MIN_LIKES = 1;
var MAX_LIKES = 5;

var MAX_LIKE_RATIO = 0.71;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

function time() {
  return (new Date()).getTime() / 1000;
}

async function loop() {
  likeCounter = 0;
  rejectCounter = 0;
  startTime = time();
  timeLimit = getRandomArbitrary(MIN_SEARCH_TIME, MAX_SEARCH_TIME);
  likeLimit = getRandomInt(MIN_LIKES, MAX_LIKES);

  console.log("----------------------------------------");
  console.log("STARTING T_BOT, for max {} likes and {}s of duration.".format(likeLimit, timeLimit));
  console.log("----------------------------------------");

  while (likeCounter < likeLimit && time() - startTime < timeLimit) {
    total = likeCounter + rejectCounter + 1;
    console.log("--------------------");
    console.log("Judging candidate number: {}, like ratio till now : {}/{}".format((total + 1), likeCounter, (total + 1)));
    console.log("--------------------");
    waitTime = getRandomArbitrary(MIN_WAIT_TIME, MAX_WAIT_TIME);
    console.log("Waiting for {}s...".format(waitTime));
    await new Promise(resolve => setTimeout(resolve, waitTime*1000));
    buildProfile().then(function(profile){
      console.log(profile);
      aProfile = analyzeProfile(profile);
      console.log(aProfile);
      judgement = judgeProfile(profile, aProfile);
      console.log(judgement);
      console.log("--------------------");    
      if (judgement) {
        console.log("Judgement is LIKE !");
        likeRatio = likeCounter/total;
        if (likeRatio > MAX_LIKE_RATIO) {
          console.log("WARNING: REJECTING BECAUSE LIKE RATIO {} > MAX RATIO {}".format(likeRatio, MAX_LIKE_RATIO));
          rejectCounter += 1;
          pass();
        } else {
            likeCounter += 1;
            like();
        }
      } else {
        console.log("Judgement is LIKE !");
        rejectCounter += 1;
        pass();
      }
    });

    // time.sleep(random.uniform(2., 3.))
    // self.closer_super_like_modal()
    // time.sleep(random.uniform(2., 3.))
  }
    

  console.log("----------------------------------------");
  console.log("T_BOT FINISHED, gave {}/{} likes (max: {}) within {}/{} s of duration.".format(likeCounter, (likeCounter + rejectCounter), likeLimit, (time() - startTime), timeLimit));
  console.log("----------------------------------------");
}