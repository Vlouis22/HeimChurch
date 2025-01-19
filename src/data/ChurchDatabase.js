import {getLanguage} from "./language";

let language = getLanguage()

const englishDatabase = {
    "church-name": "HEIM Church",
    "navbar": ["Home", "About", "Ministries", "Watch Live", "Offering"],
    "subnav": ["Youth", "Women's", "Kids", "Others"],
    "subnav-for-phone": ["Youth Ministry", "Women's Ministry", "Kids Ministry", "Other Ministries"],
    "homepage": {
        "welcome-screen":{
            'text-1': "WELCOME TO",
            'text-2': "HEIM CHURCH",
            'button-1': "WATCH LIVE",
            'button-2': "GIVE"
        },
        "pg2-coming-up-text": "Coming Up At HEIM Church",
        "calendar-button-text": "VIEW CALENDAR",
        "container-1-button": "About Us",
        "container-2-title": "Follow Us",
        "container-3-title": "In Need Of Prayer?",
        "container-3-button-text": "Request Prayer",
        "container-4-title": "Get Involved",
        "container-4-links": ["Giving", "Groups"],
        "container-5-title": "In Need Of A Ride?",
        "container-5-button-text": "Request Ride",
        "container-6-title": "Are you interested in Getting Baptized?",
        "container-6-button-text": "Learn More",
    },
    "footer": {
        "text-container-1": {
            "title": "Sunday Morning",
            "description": "11:00am service - in person & online"
        },
        "text-container-2": {
            "title": "Visit Us",
        },  
        "buttons": ["CONTACT US", "WATCH LIVE", "GIVE"],
        "copyright" : {
            "text-1": "By",
            "text-2": "All Rights Reserved"
        }
    },
    "aboutpage": {
        "title": "Welcome to HEIM Church"
    },
    "watchlive": {
        "prayer-button": "Request Prayer",
        "upcoming": {
            "title": "Upcoming Live Streams",
            "button-text": "VIEW CALENDAR"
        },
        "pastEvents": {
            "title": "View Recorded Live Events",
            "errorMessage": "An unexpected error occured. Please try again later."
        }
    },
    "offering": {
        "title": "Ways To Give",
        "payment": {
            "description-1": "Name:",
            "description-2": "Number:"
        }
    },
    "ministries": {
        "ministry": {
            "title" : "Frequently Asked Questions",
            "text-1": "Welcome to the",
            "text-2": "ministry page"
        },
        "Youth": {
            "name": "Youth",
            "descriptionTitle1": "About HEIM Youth",
            "description1": "Welcome to the Youth Page of HEIM Church! This is where our youth can come together to grow in faith, share experiences, and build lifelong friendships. Our mission is to create a space where young people can deepen their relationship with God, develop meaningful friendships, and make a difference in the world.",
            "descriptionTitle2": 'Our Goals',
            "description2": 'Our goal is to help and encourage each other as we grow together in faith. We desire to serve the Lord daily. Anyone between the age of 14 to 29 can join our youth. We plan many spiritual and social activities every month and lead the church morning service every second Sunday of the month.',
            "descriptionTitle3":'Bible Study', 
            "description3":'Our Young Adults group gathers every Wednesday from 6:30 PM to 8:00 PM for an engaging time of fellowship and spiritual growth. Each Bible Study night includes a devotional centered on a portion of the reading plan, led by Sadrac Danjoint or one of our group members. Join us for meaningful discussions and encouragement!'
        },
        "Womens": {
            "name": "Womens",
            "descriptionTitle1":"About Womens ministry", 
            "description1": "HEIM Church's Women’s Ministry is a vibrant community where women grow in faith, build lasting relationships, and serve the church and community. Every 3rd Sunday, the women lead the service in worship and fellowship. The Ministry provides opportunities for spiritual enrichment and connection, supporting one another through life’s challenges and serving together. Join us as we grow in Christ and support one another in love and unity."
        },
        "Kids": {
            "name": "Kids",
            "descriptionTitle1": "About Kids Ministry",
            "description1": "At HEIM Church, we are committed to helping children grow in their faith in a fun and safe environment. We offer a special service just for kids aged 13 and under, led by caring and experienced instructors. This allows parents to focus on the regular service while their children enjoy a program designed just for them.",
            "descriptionTitle2": "Our Goals",
            "description2": "Our Kids Ministry is all about helping children learn about God in a way that makes sense to them. We want them to build strong friendships, discover how to read and explore the Bible, and learn songs that help them praise God. To make their time enjoyable, we’ve created a welcoming space filled with books, games, iPads, and plenty of fun activities. At HEIM Church, we’re here to help every child grow in their love for God while having a great time doing it."
        },
        "Others": {
            "mainTitle": "Other Groups/Ministries at HEIM Church",
            "subtitle": "Find Your Community at HEIM Church",
            "subtitle-description": "At HEIM Church, we offer a wide variety of ministries and groups designed to welcome everyone. No matter your stage in life or the skills you bring, there’s a place for you here. These groups are opportunities to build friendships, grow in faith, and make a difference. Whether you’re seeking support, meaningful connections, or ways to serve, you’ll find something just right for you. We invite you to join us and be a part of the vibrant HEIM Church community."
        },
    },
    "baptism": {
        "title-1": "What is Baptism?",
        "description-1": "A Christian sacrament signifying spiritual cleansing and rebirth.",
        "title-2": "Acts 2:38",
        "description-2": <>"Repent and be Baptized in the name of Jesus Christ for the remission of sins"</>,
        "interested-in-baptizing": "If you are interested in getting baptized or would like to know more about baptism, visit us in person at 3540 peachtree run, Dover, DE 19901 United States"
    },
    "calendar":
    {
        "title": "HEIM Church Calendar"
    },

    "contact": {
        "title": "Ways To Contact Us",
        "ride-request": "Ride Requests",
        "prayer-request": "Prayer Requests",
        "website-inquiry": "Website Support",
        "general-inquiry": "General Inquiries",
        "email": "Email",
        "phone": "Phone",
    }      
}

const creoleDatabase = {
    "church-name": "Legliz HEIM",
    "navbar": ["Paj Prensipal", "Konsènan nou", "Ministè", "Gade An Dirèk", "Ofrann"],
    "subnav": ["Jèn", "Fanm", "Timoun", "Lòt yo"],
    "subnav-for-phone": ["Ministè Jèn", "Ministè Fanm", "Ministè Timoun", "Lòt Ministè"],
    "homepage": {
        "welcome-screen":{
            'text-1': "Byenvini Nan",
            'text-2': "Legliz HEIM",
            'button-1': "Gade An Dirèk",
            'button-2': "Ofrann"
        },
        "pg2-coming-up-text": "Evènman k'ap vini",
        "calendar-button-text": "Kalendriye",
        "container-1-button": "Konsènan Nou",
        "container-2-title": "Swiv Nou Sou",
        "container-3-title": "Ou Bezwen Lapriyè?",
        "container-3-button-text": "Demann Priyè",
        "container-4-title": "Patisipe",
        "container-4-links": ["Ofrann", "Gwoup"],
        "container-5-title": "Èske w bezwen transpòtasyon?",
        "container-5-button-text": "Demann transpòtasyon",
        "container-6-title": "Èske w enterese batize?",
        "container-6-button-text": "Plis Enfòmasyon",
    },
    "footer": {
        "text-container-1": {
            "title": "Dimanch Maten",
            "description": "Sèvis 11:00am - an pèsòn ak an dirèk"
        },
        "text-container-2": {
            "title": "Vizite Nou",
        },  
        "buttons": ["KONTAKTE NOU", "GADE AN DIRÈK", "Ofrann"],
        "copyright" : {
            "text-1": "Pa",
            "text-2": "Tout Dwa Rezève"
        }
    },
    "aboutpage": {
        "title": "Byenvini Nan Legliz HEIM"
    },
    "watchlive": {
        "prayer-button": "Demann Priyè",
        "upcoming": {
            "title": "Sèvis an lign",
            "button-text": "Kalendriye"
        },
        "pastEvents": {
            "title": "Gade Evènman Anrejistre yo",
            "errorMessage": "Yon erè ki pa te espere rive. Tanpri eseye ankò pita."
        }
    },
    "offering": {
        "title": "Fason Pou Bay",
        "payment": {
            "description-1": "Non:",
            "description-2": "Nimewo:"
        }
    },
    "ministries": {
        "ministry": {
            "title" : "Kesyon yo poze souvan",
            "text-1": "Byenvini sou paj Ministè",
            "text-2": "yo"
        },
        "Youth": {
            "name": "Jèn",
            "descriptionTitle1": "Konsènan HEIM Jèn",
            "description1": "Byenvini nan Paj Jèn HEIM CHURCH! Se la jèn nou yo ka rasanble pou grandi nan lafwa, pataje eksperyans, ak bati amitye pou tout lavi yo. Misyon nou se kreye yon espas kote jèn yo ka pwogrese nan relasyon yo ak Bondye, devlope amitye ki gen sans, epi fè yon diferans nan mond lan.",
            "descriptionTitle2": 'Objektif Nou',
            "description2": 'Objektif nou se pou ede ak ankouraje youn lòt pandan nou ap grandi ansanm nan lafwa. Nou swete sèvi Senyè a chak jou. Nenpòt moun ant 14 ak 29 an ka rantre nan group jèn nan. Nou planifye anpil aktivite spirityèl ak sosyal chak mwa epi nou mennen sèvis legliz la chak dezyèm dimanch nan mwa.',
            "descriptionTitle3":'Etid Biblik', 
            "description3":'Gwoup Jèn nan rasanble chak Mèkredi apati 6:30 PM pou rive a 8:00 PM pou yon tan kolektivite ak kwasans espirityèl. Chak swa Etid Biblik gen ladan yon devosyon ki santre sou yon pati nan plan lekti a, ki ap dirije pa Sadrac Danjoint oswa youn nan manm gwoup nou an. Rantre nan nou pou diskisyon ki gen sans ak ankourajman!'
        },
        "Womens": {
            "name": "Fanm",
            "descriptionTitle1":"Konsènan Ministè Fanm", 
            "description1": "Ministè Fanm HEIM CHURCH se yon kominote vivan kote fanm nou nan lafwa, bati relasyon ki dire lontan, epi sèvi legliz ak kominote a. Chak 3yèm Dimanch, fanm yo mennen sèvis la nan adorasyon ak kolektivite. Ministè a ofri opòtinite pou ranfòse espirityèl ak koneksyon, sipòte youn lòt atravè defi lavi yo epi sèvi ansanm. Rantre nan nou pandan nou grandi nan Kris epi sipòte youn lòt nan lanmou ak inite."
        },
        "Kids": {
            "name": "Timoun",
            "descriptionTitle1": "Konsènan Ministè Timoun",
            "description1": "Nan Legliz HEIM, nou angaje pou ede timoun grandi nan lafwa yo nan yon anviwònman amizan ak an sekirite. Nou ofri yon sèvis espesyal sèlman pou timoun ki gen 13 an ak pi piti, dirije pa enstriktè ki gen kè kontan ak eksperyans. Sa pèmèt paran yo konsantre sou sèvis regilye a pandan timoun yo ap jwi yon pwogram fèt espesyalman pou yo.",
            "descriptionTitle2": "Objektif Nou",
            "description2": "Ministè Timoun nou an konsantre sou ede timoun aprann sou Bondye nan yon fason ki gen sans pou yo. Nou vle yo bati zanmitay fò, dekouvri kijan pou li ak eksplore Bib la, epi aprann chante ki ede yo louwe Bondye. Pou fè tan yo amizan, nou kreye yon espas akeyan ki ranpli ak liv, jwèt, iPad, ak anpil lòt aktivite amizan. Nan HEIM CHURCH, nou la pou ede chak timoun grandi nan lanmou pou Bondye pandan y ap pran plezi nan sa yo ap fè."
        },
        "Others": {
            "mainTitle": "Lòt Gwoup/Ministè Nan Legliz HEIM",
            "subtitle": "Jwenn Kominote Ou Nan Legliz HEIM",
            "subtitle-description": "Nan Legliz HEIM, nou ofri yon varyete gwo ministè ak gwoup ki fèt pou akeyi tout moun. Kit ou nan nenpòt etap nan lavi oswa gen kapasite espesyal, gen yon kote pou ou la. Gwoup sa yo se opòtinite pou bati zanmitay, grandi nan lafwa, epi fè yon diferans. Kit ou ap chèche sipò, koneksyon ki gen sans, oswa fason pou sèvi, ou pral jwenn yon bagay ki jis pou ou. Nou envite ou rantre nan nou e vin yon pati nan kominote vivan HEIM CHURCH."
        }
    },
"baptism": {
    "title-1": "Kisa Batèm ye?",
    "description-1": "Yon sakreman kretyen ki siyifi netwayaj espirityèl ak renesans.",
    "title-2": "Travay 2:38",
    "description-2": "\"Repanti nou epi resevwa batèm nan non Jezikri pou padon peche nou yo.\"",
    "interested-in-baptizing": "Si w enterese resevwa batèm oswa ou ta renmen konnen plis sou batèm, vizite nou an pèsòn nan 3540 Peachtree Run, Dover, DE 19901, Etazini."
},
"calendar": {
        "title": "Kalandriye Legliz HEIM"
},

"contact": {
    "title": "Fason Pou Kontakte Nou",
    "ride-request": "Demann transpòtasyon",
    "prayer-request": "Demann Priyè",
    "website-inquiry": "Sipò Sitwèb",
    "general-inquiry": "Ankèt jeneral",
    "email": "Email",
    "phone": "Telefòn",
}

}

const database = language == "English" ? englishDatabase : creoleDatabase;

export {database};
