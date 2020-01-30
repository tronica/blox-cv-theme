import handlebars       from 'handlebars';
import dayjs            from 'dayjs';
import { library }      from '@fortawesome/fontawesome-svg-core'
import { icon }         from '@fortawesome/fontawesome-svg-core'
import { fas }          from '@fortawesome/free-solid-svg-icons'
import { readFileSync } from 'fs'

library.add(fas)

handlebars.registerHelper('fa-icon', function (iconName) {
  return new handlebars.SafeString(
    icon({ prefix: 'fas', iconName }).html
  )
});

handlebars.registerHelper('format-date', function (date, format) {
  return dayjs(date).format(format);
});

const hbs       = readFileSync(__dirname + '/../templates/index.hbs').toString();
const template  = handlebars.compile(hbs);

const data = {
  "resume": {
    "info": {
      "id": 1,
      "firstName": "Jane",
      "lastName": "Doe",
      "title": "Software Engineer",
      "email": "jane@doe.com",
      "phone": "+852 7890 6543",
      "website": "jane.doe@me.com",
      "hobbies": [
        "coding",
        "surfing",
        "singing"
      ],
      "intro": "Full-stack engieer, problem solver and digital solutions enthusiast.",
      "updatedAt": "2020-01-06T08:55:38.000Z",
      "createdAt": "2019-10-21T07:21:38.000Z"
    },
    "jobs": [
      {
        "id": 1,
        "company": "Company A",
        "position": "Lead Software Engineer",
        "startDate": "2018-08-27T16:00:00.000Z",
        "endDate": "2019-11-20T16:00:00.000Z",
        "description": "<ul><li>Streamline the build and delivery of software releases</li><li>Built multiple responsive applications for both mobile and web</li><li>Improvements made on architecture and stability of back-end</li></ul>",
        "resumeId": 1,
        "location": "Hong Kong",
        "active": true,
        "updatedAt": "2020-01-06T08:55:39.000Z",
        "createdAt": "2019-10-21T07:21:39.000Z",
        "archived": false
      },
      {
        "id": 3,
        "company": "Company B",
        "position": "Data Analyst",
        "startDate": "2017-10-01T16:00:00.000Z",
        "endDate": "2018-08-07T16:00:00.000Z",
        "description": "<ul><li>Build and support a data analytics tool used to drive business strategy.&nbsp;</li><li>Full stack role working on a Java backend, with a React frontend&nbsp;</li><li>Agile and TDD practice at the centre of the development process</li></ul>",
        "resumeId": 1,
        "location": "Hong Kong",
        "active": false,
        "updatedAt": "2019-11-10T03:31:19.000Z",
        "createdAt": "2019-11-04T08:03:11.000Z",
        "archived": false
      }
    ],
    "studies": [
      {
        "id": 1,
        "resumeId": 1,
        "school": "Fun University",
        "degree": "Masters of Software Engineering",
        "startDate": "2019-11-13T16:00:00.000Z",
        "endDate": "2019-11-22T16:00:00.000Z",
        "location": "",
        "active": false,
        "updatedAt": "2019-11-10T03:22:11.000Z",
        "createdAt": "2019-11-10T01:45:53.000Z",
        "archived": false
      }
    ]
  }
};

document.getElementById('resume').innerHTML = template(data);