let resumeJSON = {
    Name:"Mahalakshmi Ayyavu",
    Summary:"2 years and 3 months of experience in Java backend development and html, css, JavaScript fronten development.",
    Experience:{
        Duration:"February 2008 - May 2010",
        Corp:"Member Technical Staff in ZOHO Development Centre India Private Limited, Chennai."
    },
    TechnicalSkills:{
        Languages: ['Core Java', 'J2EE', 'JDBC', 'Servlets', 'JSP'],
        Web_Technologies: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'AJAX'],
        Database: ['MS-SQL', 'MySql', 'SQLite', 'Oracle'],
        Server: ['Apache Tomcat'],
        IDE_Tools: ['NetBeans', 'Eclipse'],
        Operating_Systems: ['Windows', 'Linux']
    },
    Projects:[
        {Proj_Name:'SQLOne Database Search Engine'},{Proj_Name:'SwisSQL - EMail support'},{Proj_Name:'Offline feature for Zoho-Mail &amp; Zoho-Writer'}
    ],
    Education:{
        2002_2006:['Bachelor of Computer Science', 'M N M Jain Engineering College Chennai', '68%'],
        2000_2002:['HSC.', 'S.B.K Higher Secondary School', '85%'],
        1999_2000: ['SSLC', 'S.B.K Higher Secondary school', '90%']
    },
    PersonalDetails:{
        Gender: 'Female',
        Marital_Status: 'Married',
        Date_of_Birth: '26/6/1985',
        Nationality: 'Indian',
        Languages: ['English', 'Tamil'],
        Hobbies: ['Pencil Drawing', 'Craft Work'],
        Address: {
            Flat_NO:'3C3', 
            Community:'Nandi Gardens Phase 1', 
            Street:'Near Avalahalli Lake, Anjanapura Post,JP Nagar 9th Phase', 
            City:'Bangalore',
            State:'Karnataka',
            Pin_Code:560062
        }
    }
}
//JSON ITERATE using For Loop
//let keyCount  = Object.keys(resumeJSON).length;
let resumesKeys = Object.keys(resumeJSON);
for(let i=0; i<resumesKeys.length;i++)
{
    if(resumesKeys[i] === undefined) {
        break;
    }
    console.log("For - "+i+" "+ resumesKeys[i]);
}
//JSON ITERATE using For in
let techSkills = resumeJSON.TechnicalSkills;
for(let rKeys in techSkills)
{
    if(techSkills[rKeys] === undefined) {
        break;
    }
    console.log("for in - "+techSkills[rKeys]);
}
//JSON ITERATE using For of
var myProjects = resumeJSON.Projects; 
for (var proName of myProjects) 
{
  console.log("for of - "+proName.Proj_Name);
}
//JSON ITERATE using forEach
let perKeys = Object.keys(resumeJSON.PersonalDetails);
perKeys.forEach(key => {console.log(key + ' - ' + resumeJSON.PersonalDetails[key]);})