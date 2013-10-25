var app = app || {};

(function() {
    app.degree = {
        5: [8, 9, 10, 11, 12, 13, 110, 111, 112, 113],
        6: [96, 97, 98],
        10: [14, 15, 16, 17, 18, 19],
        15: [123, 124, 125, 126],
        17: [20, 21, 22, 23, 24, 25, 106, 107, 108, 109],
        27: [26, 27, 28, 29, 30, 31],
        29: [118, 119, 120, 121, 122],
        39: [32, 33, 34, 35, 36, 37],
        52: [38, 39, 40, 41, 42, 43],
        65: [44, 45, 46, 47, 48, 49],
        68: [129, 130, 131, 132, 133, 134],
        78: [50, 51, 52, 53, 54, 55],
        79: [135, 136],
        89: [137, 138, 139],
        102: [140, 141, 142, 143],
        327: [61],
        330: [70, 71, 72, 73],
        332: [81, 82, 83],
        334: [92, 93, 94, 95],
        335: [59, 60],
        338: [103, 104, 105],
        340: [58, 66, 67, 68, 69],
        343: [1, 77, 78, 79, 80],
        345: [0, 114, 115, 116, 117],
        347: [88, 89, 90, 91],
        348: [56, 57, 62, 63, 64, 65],
        352: [127, 128],
        353: [74, 75, 76, 99, 100, 101, 102],
        357: [2, 3, 4, 5, 6, 7],
        358: [84, 85, 86, 87]
    },

    app.persons = [{
            firstname: "Esteban",
            secondname: "Souto",
            jobtitle: "Global Head of UX Design and Engineering",
            phonenumber: "020 7542 0161",
            image: "Esteban Souto.png",
            deskid: "d0"
        }, {
            firstname: "Laura",
            secondname: "Dines",
            jobtitle: "UX Design & Engineering Co-ordinator",
            phonenumber: "020 0754 335",
            image: "Laura Dines.png",
            deskid: "d1"
        }, {
            firstname: "Helen",
            secondname: "Johnstone",
            jobtitle: "Head of Design Standards",
            phonenumber: "020 0754 1673",
            image: "Helen Johnstone.png",
            deskid: "d2"
        }, {
            firstname: "Antonije",
            secondname: "Baturan",
            jobtitle: "Senior Interaction Designer",
            phonenumber: "020 0754 8840",
            image: "Antonije Baturan.png",
            deskid: "d3"
        }, {
            firstname: "Kelsey",
            secondname: "Smith",
            jobtitle: "Head of Strategy and Research",
            phonenumber: "020 0754 116",
            image: "Kelsey Smith.png",
            deskid: "d4"
        }, {
            firstname: "Emmanuelle",
            secondname: "Savarit",
            jobtitle: "Senior Researcher",
            phonenumber: "027 7542 602",
            image: "Emmanuelle Savarit.png",
            deskid: "d5"
        }, {
            firstname: "Adam",
            secondname: "Spizak",
            jobtitle: "Senior Visual Designer",
            phonenumber: "  ",
            image: "Adam Spizak.png",
            deskid: "d6"
        }, {
            firstname: "Brenda",
            secondname: "Atuona",
            jobtitle: "Research Assistant",
            phonenumber: "  ",
            image: "Brenda Atuona.png",
            deskid: "d7"
        }, {
            firstname: "Di",
            secondname: "Wu",
            jobtitle: "Senior Interaction Designer",
            phonenumber: "020 0754 0216",
            image: "Di Wu.png",
            deskid: "d8"
        }, {
            firstname: "Gavin",
            secondname: "Wignall",
            jobtitle: "Head of Interaction Design",
            phonenumber: "  ",
            image: "Gavin Wignall.png",
            deskid: "d9"
        }, {
            firstname: "Mike",
            secondname: "Ansher",
            jobtitle: "Senior Interaction Designer",
            phonenumber: "  ",
            image: "Mike Ansher.png",
            deskid: "d10"
        }, {
            firstname: "Jiri",
            secondname: "Siftar",
            jobtitle: "Senior Interaction Designer",
            phonenumber: "002 2075 2991",
            image: "Jiri Siftar.png",
            deskid: "d11"
        }, {
            firstname: "Richard",
            secondname: "Neves",
            jobtitle: "Senior Interaction Designer",
            phonenumber: "020 0743 4349",
            image: "Richard Neves.png",
            deskid: "d13"
        }, {
            firstname: "Chiara",
            secondname: "Pontiggia",
            jobtitle: "Creative Director",
            phonenumber: "020 0754 9179",
            image: "Chiara Pontiggia.png",
            deskid: "d15"
        }, {
            firstname: "Mark",
            secondname: "Todd",
            jobtitle: "Senior Motions Graphic Designer",
            phonenumber: "  ",
            image: "Mark Todd.png",
            deskid: "d16"
        }, {
            firstname: "Michal",
            secondname: "Florczak",
            jobtitle: "Senior Visual Designer",
            phonenumber: "  ",
            image: "Michal Florczak.png",
            deskid: "d17"
        }, {
            firstname: "James",
            secondname: "Harford",
            jobtitle: "Motion Graphic Designer",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d18"
        }, {
            firstname: "Young (Ethan)",
            secondname: "Park",
            jobtitle: "Senior Visual Designer",
            phonenumber: "020 0754 2224",
            image: "Young (Ethan) Park.png",
            deskid: "d19"
        }, {
            firstname: "Matthew",
            secondname: "Sellers",
            jobtitle: "Head of Visual Design",
            phonenumber: "020 0754 3610",
            image: "Matthew Sellers.png",
            deskid: "d20"
        }, {
            firstname: "Marco",
            secondname: "Rotoli",
            jobtitle: "Art Director",
            phonenumber: "  ",
            image: "Marco Rotoli.png",
            deskid: "d22"
        }, {
            firstname: "Aleksandrs",
            secondname: "Golubevs",
            jobtitle: "Senior Visual Designer",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d24"
        }, {
            firstname: "Rich",
            secondname: "Holt",
            jobtitle: "Senior Visual Designer",
            phonenumber: "  ",
            image: "Rich Holt.png",
            deskid: "d25"
        }, {
            firstname: "Ray",
            secondname: "Tomkins",
            jobtitle: "Head of Search Content and Experience",
            phonenumber: "020 0754 4193",
            image: "Ray Tomkins.png",
            deskid: "d26"
        }, {
            firstname: "Stephen",
            secondname: "Lamb",
            jobtitle: "Senior Operability Engineer",
            phonenumber: "020 0754 0408",
            image: "Stephen Lamb.png",
            deskid: "d28"
        }, {
            firstname: "Natalia",
            secondname: "Kotova",
            jobtitle: "Quality Assurance Owner",
            phonenumber: "020 0754 9511",
            image: "Natalia Kotova.png",
            deskid: "d29"
        }, {
            firstname: "Tony",
            secondname: "Hayward",
            jobtitle: "Development Manager",
            phonenumber: "  ",
            image: "Tony Hayward.png",
            deskid: "d30"
        }, {
            firstname: "Toby",
            secondname: "Amis",
            jobtitle: "Regional Product Manager (EMEA), Eikon",
            phonenumber: "020 0754 0760",
            image: "Toby Amis.png",
            deskid: "d32"
        }, {
            firstname: "John",
            secondname: "Manwaring",
            jobtitle: "Head of Mobile",
            phonenumber: "020 0754 7783",
            image: "John Manwaring.png",
            deskid: "d33"
        }, {
            firstname: "Armin",
            secondname: "Guldalian",
            jobtitle: "Eikon Product Manager - Operations and Strategy",
            phonenumber: "020 0754 0734",
            image: "Armin Guldalian.png",
            deskid: "d34"
        }, {
            firstname: "Sofia",
            secondname: "Skannavi",
            jobtitle: "Mobile Product Manager",
            phonenumber: "020 0754 1548",
            image: "Sofia Skannavi.png",
            deskid: "d35"
        }, {
            firstname: "Katherine",
            secondname: "Jones",
            jobtitle: "Internal Communications Channel Manager",
            phonenumber: "020 0754 3425",
            image: "Katherine Jones.png",
            deskid: "d36"
        }, {
            firstname: "Dipesh",
            secondname: "Shah",
            jobtitle: "Graphics Product Manager",
            phonenumber: "020 0754 3936",
            image: "Dipesh Shah.png",
            deskid: "d37"
        }, {
            firstname: "Paul",
            secondname: "Belcher",
            jobtitle: "Head of News, Central Product Management",
            phonenumber: "020 0754 4464",
            image: "Paul Belcher.png",
            deskid: "d38"
        }, {
            firstname: "Jalaj",
            secondname: "Khera",
            jobtitle: "Business Analyst",
            phonenumber: "020 0754 5398",
            image: "Jalaj Khera.png",
            deskid: "d41"
        }, {
            firstname: "Stephen",
            secondname: "Powell",
            jobtitle: "News Product Manager",
            phonenumber: "020 0754 7204",
            image: "default.png",
            deskid: "d42"
        }, {
            firstname: "Mike",
            secondname: "Doull",
            jobtitle: "Product Manager",
            phonenumber: "020 0754 8154",
            image: "default.png",
            deskid: "d43"
        }, {
            firstname: "Jeremy",
            secondname: "Fernandes",
            jobtitle: "Global Product Rollout Manager",
            phonenumber: "020 0754 7058",
            image: "Jeremy Fernandes.png",
            deskid: "d44"
        }, {
            firstname: "Liana",
            secondname: "Sangeorzan",
            jobtitle: "Senior Programme Manager",
            phonenumber: "020 0754 7041",
            image: "default.png",
            deskid: "d45"
        }, {
            firstname: "Ronan",
            secondname: "Leahy",
            jobtitle: "Product Manager, Help & Support",
            phonenumber: "020 0754 2095",
            image: "Ronan Leahy.png",
            deskid: "d46"
        }, {
            firstname: "Robbie",
            secondname: "Mahon",
            jobtitle: "Head of Integration & Implementation",
            phonenumber: "020 0754 1278",
            image: "Robbie Mahon.png",
            deskid: "d47"
        }, {
            firstname: "Riaz",
            secondname: "Ebrahim",
            jobtitle: "Product Manager",
            phonenumber: "020 0754 8485",
            image: "default.png",
            deskid: "d48"
        }, {
            firstname: "Rachel",
            secondname: "Jackson",
            jobtitle: "Head of Design",
            phonenumber: "020 0754 2274",
            image: "Rachel Jackson.png",
            deskid: "d56"
        }, {
            firstname: "Susan",
            secondname: "Lambert",
            jobtitle: "Project Manager",
            phonenumber: "002 2075 2002",
            image: "Susan Lambert.png",
            deskid: "d57"
        }, {
            firstname: "Claire",
            secondname: "Robins",
            jobtitle: "Lab Manager and Group Communications",
            phonenumber: "020 0754 744",
            image: "Claire Robins.png",
            deskid: "d58"
        }, {
            firstname: "Sonia",
            secondname: "Sebastian",
            jobtitle: "Client Engagement Manager",
            phonenumber: "020 0754 4355",
            image: "Sonia Sebastian.png",
            deskid: "d59"
        }, {
            firstname: "Jennifer",
            secondname: "Clark",
            jobtitle: "Senior Internal Communications Specialist",
            phonenumber: "020 0754 3998",
            image: "Jennifer Clark.png",
            deskid: "d60"
        }, {
            firstname: "Martin",
            secondname: "Colebourne",
            jobtitle: "Design Architect",
            phonenumber: "020 0754 8552",
            image: "Martin Colebourne.png",
            deskid: "d62"
        }, {
            firstname: "Alexandru",
            secondname: "Antihi",
            jobtitle: "Head of Data Visualisation",
            phonenumber: "074 4153 1656",
            image: "Alexandru Antihi.png",
            deskid: "d63"
        }, {
            firstname: "Nick",
            secondname: "Boettcher",
            jobtitle: "Contractor",
            phonenumber: "020 0754 7025",
            image: "Nick Boettcher.png",
            deskid: "d64"
        }, {
            firstname: "Chris",
            secondname: "Ellingford",
            jobtitle: "Contractor",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d65"
        }, {
            firstname: "Andrew",
            secondname: "Merryweather",
            jobtitle: "Head of Application Development, Core Components",
            phonenumber: "020 0754 0712",
            image: "Andrew Merryweather.png",
            deskid: "d66"
        }, {
            firstname: "Marios",
            secondname: "Skevofylakas",
            jobtitle: "Senior UI Engineer",
            phonenumber: "  ",
            image: "Marios Skevofylakas.png",
            deskid: "d67"
        }, {
            firstname: "Navid",
            secondname: "Bazari",
            jobtitle: "Development Group Head",
            phonenumber: "020 0754 9085",
            image: "Navid Bazari.png",
            deskid: "d68"
        }, {
            firstname: "Yogesh",
            secondname: "Kumar",
            jobtitle: "Contractor",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d69"
        }, {
            firstname: "Fil",
            secondname: "Scibetta",
            jobtitle: "Development Group Head",
            phonenumber: "020 0754 5057",
            image: "Fil Scibetta.png",
            deskid: "d70"
        }, {
            firstname: "Andrey",
            secondname: "Kovalenko",
            jobtitle: "Contractor",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d71"
        }, {
            firstname: "Joshua",
            secondname: "Lambert",
            jobtitle: "Senior Visual Designer",
            phonenumber: "020 0754 0008",
            image: "Joshua Lambert.png",
            deskid: "d75"
        }, {
            firstname: "Krishna",
            secondname: "Corinaldesi",
            jobtitle: "Head of Strategic Development",
            phonenumber: "020 0754 3765",
            image: "Krishna Corinaldesi.png",
            deskid: "d76"
        }, {
            firstname: "Aaron",
            secondname: "Nicholls",
            jobtitle: "Senior UI Engineer",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d77"
        }, {
            firstname: "Asif",
            secondname: "Mahmood",
            jobtitle: "Senior Software Engineer",
            phonenumber: "020 0754 0409",
            image: "Asif Mahmood.png",
            deskid: "d78"
        }, {
            firstname: "Tremayne",
            secondname: "Christ",
            jobtitle: "Senior Front-end Engineer",
            phonenumber: "  ",
            image: "Tremayne Christ.png",
            deskid: "d79"
        }, {
            firstname: "Daniel",
            secondname: "Howells",
            jobtitle: "Contractor",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d80"
        }, {
            firstname: "Mihhail",
            secondname: "Trunov",
            jobtitle: "Contractor",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d81"
        }, {
            firstname: "Daniel",
            secondname: "McDaid",
            jobtitle: "Contractor",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d82"
        }, {
            firstname: "Gregory",
            secondname: "Machon",
            jobtitle: "Strategic Development Manager",
            phonenumber: "020 0754 1413",
            image: "Gregory Machon.png",
            deskid: "d84"
        }, {
            firstname: "Graham",
            secondname: "Clapham",
            jobtitle: "Senior UI Engineer",
            phonenumber: "  ",
            image: "Graham Clapham.png",
            deskid: "d86"
        }, {
            firstname: "Shyam",
            secondname: "Balu",
            jobtitle: "Software Development Engineer ",
            phonenumber: "020 0754 0517",
            image: "Shyam Balu.png",
            deskid: "d88"
        }, {
            firstname: "Ioannis",
            secondname: "Mavroukakis",
            jobtitle: "Senior Developer",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d89"
        }, {
            firstname: "Fahim",
            secondname: "Chowdhury",
            jobtitle: "Senior Front-end Engineer",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d90"
        }, {
            firstname: "Sam",
            secondname: "Arnold-Forster",
            jobtitle: "Development Team Lead",
            phonenumber: "020 0754 6759",
            image: "Sam Arnold-Forster.png",
            deskid: "d91"
        }, {
            firstname: "Simon",
            secondname: "Horridge",
            jobtitle: "Contractor",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d95"
        }, {
            firstname: "Ajeet",
            secondname: "Dyondi",
            jobtitle: "Software Development Engineer 4",
            phonenumber: "020 0754 7463",
            image: "default.png",
            deskid: "d107"
        }, {
            firstname: "Johnny",
            secondname: "Bosauder",
            jobtitle: "Contractor",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d109"
        }, {
            firstname: "Matthew",
            secondname: "Preston",
            jobtitle: "Lead Technical Specialist",
            phonenumber: "020 0754 2645",
            image: "Matthew Preston.png",
            deskid: "d111"
        }, {
            firstname: "Damien",
            secondname: "Monfort",
            jobtitle: "Metadata Business Analyst",
            phonenumber: "002 2075 223",
            image: "Damien Monfort.png",
            deskid: "d112"
        }, {
            firstname: "Brayan",
            secondname: "Moras",
            jobtitle: "Lead Technical Specialist",
            phonenumber: "020 0754 5167",
            image: "default.png",
            deskid: "d113"
        }, {
            firstname: "Claudia",
            secondname: "Kiss",
            jobtitle: "Metadata Business Analyst",
            phonenumber: "020 0754 2096",
            image: "Claudia Kiss.png",
            deskid: "d114"
        }, {
            firstname: "Paul",
            secondname: "Meyrick",
            jobtitle: "Senior Technical Consultant",
            phonenumber: "020 0732 9146",
            image: "default.png",
            deskid: "d115"
        }, {
            firstname: "Mike",
            secondname: "Capp",
            jobtitle: "Senior Technical Consultant",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d117"
        }, {
            firstname: "Lance",
            secondname: "Cordy",
            jobtitle: "Agile Tester",
            phonenumber: "020 0754 6951",
            image: "default.png",
            deskid: "d117"
        }, {
            firstname: "Gustavo",
            secondname: "Fernandes",
            jobtitle: "Lead Technical Specialist",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d119"
        }, {
            firstname: "Stephen",
            secondname: "Johnson",
            jobtitle: "Senior Technologist",
            phonenumber: "020 0754 0542",
            image: "default.png",
            deskid: "d121"
        }, {
            firstname: "Hawk",
            secondname: "Huang",
            jobtitle: "Senior Software Engineer",
            phonenumber: "020 0754 0538",
            image: "Hawk Huang.png",
            deskid: "d122"
        }, {
            firstname: "David",
            secondname: "Savage",
            jobtitle: "Lead Technical Specialist",
            phonenumber: "020 0754 8103",
            image: "David Savage.png",
            deskid: "d123"
        }, {
            firstname: "Tony",
            secondname: "Dowson",
            jobtitle: "Technical Specialist",
            phonenumber: "020 0754 9276",
            image: "Tony Dowson.png",
            deskid: "d124"
        }, {
            firstname: "Huong",
            secondname: "Hoang",
            jobtitle: "Senior Software Engineer",
            phonenumber: "075 5424 71",
            image: "Huong Hoang.png",
            deskid: "d125"
        }, {
            firstname: "Shyam",
            secondname: "Aryan",
            jobtitle: "Technical Specialist",
            phonenumber: "020 0754 2126",
            image: "Shyam Aryan.png",
            deskid: "d126"
        }, {
            firstname: "Natraj",
            secondname: "Raman",
            jobtitle: "Senior Software Engineer",
            phonenumber: "  ",
            image: "default.png",
            deskid: "d127"
        }, {
            firstname: "Qingwei",
            secondname: "Yang",
            jobtitle: "Technical Team Manager",
            phonenumber: "  ",
            image: "Qingwei Yang.png",
            deskid: "d128"
        }, {
            firstname: "Jason",
            secondname: "Ramchandani",
            jobtitle: "Desktop Design Consultant",
            phonenumber: "020 0754 0821",
            image: "default.png",
            deskid: "d131"
        }, {
            firstname: "Andy",
            secondname: "Rhodes",
            jobtitle: "Managing Desktop Design Consultant",
            phonenumber: "020 7542 6939",
            image: "Andy Rhodes.png",
            deskid: "d132"
        },

        {
            firstname: "David",
            secondname: "Cammish",
            jobtitle: "Desktop Design Consultant",
            phonenumber: "020 0754 0524",
            image: "David Cammish.png",
            deskid: "d133"
        }, {
            firstname: "Neil",
            secondname: "Shah",
            jobtitle: "Desktop Design Consultant",
            phonenumber: "020 0754 4098",
            image: "Neil Shah.png",
            deskid: "d134"
        }, {
            firstname: "Eugen",
            secondname: "Radu",
            jobtitle: "Datastream App Support Manager",
            phonenumber: "020 0754 5019",
            image: "Eugen Radu.png",
            deskid: "d137"
        }, {
            firstname: "Jill",
            secondname: "Sundeen",
            jobtitle: "Datastream Development Manager",
            phonenumber: "020 0754 5089",
            image: "default.png",
            deskid: "d138"
        }, {
            firstname: "Phil",
            secondname: "Adams",
            jobtitle: "Technical Consultant",
            phonenumber: "020 0754 4744",
            image: "Phil Adams.png",
            deskid: "d139"
        }, {
            firstname: "Andrew",
            secondname: "Crook",
            jobtitle: "Technical Consultant",
            phonenumber: "020 0754 5095",
            image: "Andrew Crook.png",
            deskid: "d140"
        }, {
            firstname: "Duncan",
            secondname: "Gayler",
            jobtitle: "Analyst Programmer (1)",
            phonenumber: "020 0754 5138",
            image: "Duncan Gayler.png",
            deskid: "d141"
        }, {
            firstname: "Graham",
            secondname: "Parsons",
            jobtitle: "Head of Development, Search and DS Services",
            phonenumber: "020 0754 4747",
            image: "Graham Parsons.png",
            deskid: "d142"
        }
    ];
})();
