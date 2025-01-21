import {getLanguage} from "./language";

let language = getLanguage()

const YouthQuestions = language == "English" ? [
    {
    question: "How do I join?",
    answer: "Simply connect with one of our youth leaders after church, and we’ll be happy to discuss how you can get involved!"
    },
    {
        question: "Can I invite a friend?",
        answer: "Of course! Invite as many friends as you'd like."
    },
    {
        question: "When do you meet?",
        answer: "We meet every second Sunday of the month after our church service."
    }
] : [
    {
        "question": "Kijan mwen ka rantre?",
        "answer": "Senpleman konekte ak youn nan lidè jèn yo apre sèvis legliz la, epi n ap di w kijan w ka antre nan gwoup jèn yo."
    },
    {
        "question": "Èske mwen ka envite yon zanmi?",
        "answer": "Wi, envite nenpòt kantite zanmi ou vle."
    },
    {
        "question": "Kilè nou reyini?",
        "answer": "Nou reyini chak dezyèm dimanch nan mwa a apre sèvis legliz la."
    }
]


const WomenQuestions = language == "English" ?  [
    { 
        question: "How do I join?",
        answer: "Simply connect with one of our Women's group leaders after church, and we’ll be happy to discuss how you can get involved!"

    },
    { 
        question: "Who can join the Women's Ministry?",
        answer: "All women are welcome! Whether you're young, married, or in another stage of life, we encourage you to connect with us. Speak to a leader if you have any questions."

    },
    { 
        question: "How can I stay updated on upcoming events?",
        answer: "We typically announce upcoming events during our church services and also in the Womens ministry group chat."

    }
] : [
    { 
        "question": "Kijan mwen ka rantre?",
        "answer": "Senpleman konekte ak youn nan lidè gwoup Fanm yo apre sèvis legliz la, epi n ap di w kijan w ka antre nan gwoup la"
    },
    { 
        "question": "Kilès ki ka rantre nan Ministè Fanm nan?",
        "answer": "Kit ou jèn, marye, oswa nan yon lòt etap nan lavi, nou ankouraje ou pou konekte avèk nou. Pale ak yon lidè si ou gen nenpòt kesyon."
    },
    { 
        "question": "Kijan mwen ka rete enfòme sou evènman kap vini yo?",
        "answer": "nou anonse evènman k ap vini yo pandan sèvis legliz la epi tou nan gwoup chat ministè Fanm yo."
    }
]

const AboutQuestions = language == "English" ? [
    {
        question: "How can I get in touch with church leaders or members?",
        answer: (<>You can reach out to our church leaders or members by <span className='blue-text underlined'><a href='/Contact'>clicking here</a></span>. There, you’ll find email addresses and phone numbers you can use to reach out to us. You’re also welcome to speak with someone in person after any of our services.</>)
    },
    {
        question: "Where are you located and when do you gather?",
        answer: "Our church is located at 3540 Peachtree Run, Dover, DE 19901, United States. We gather every Sunday at 11:00 AM."
    },
    {
        question: "What groups are available, and how can I join one?",
        answer: "There are numerous groups you can join! Visit our Ministries section to explore the available groups and learn more about each one."
    },
    {
        question: "Are there any Bible study sessions?",
        answer: "Yes, we hold Bible study sessions every Wednesday at 6:30 nan apremidi. Everyone is welcome!"
    },
    {
        question: "How can I visit the church if I don't have a ride?",
        answer: "We have transportation to and from church, fill out a ride request form if this will be your first time visiting the church."
    },
    {
        question: "What do you have for young adults?",
        answer: "If you're a young adult, we encourage you to join the youth ministry! We host a variety of activities, including Bible study sessions, social events, etc..."
    },
    {
        question: "I don't speak Haitian Creole, can I still visit?",
        answer: "Absolutely! We would be delighted to have you visit. While our church services are primarily conducted in Haitian Creole, we also incorporate French and English throughout the service. Additionally, we provide translation services for your convenience."
    }
] : [
    {
        "question": "Kijan mwen ka kontakte lidè legliz la?",
        "answer": (<>Ou ka kontakte lidè legliz la <span className='blue-text underlined'><a href='/Contact'>pa klike nan lyen sa</a></span>. La, w ap jwenn adrès, imèl, ak nimewo telefòn ou ka itilize pou kontakte nou.</>)
    },
    {
        "question": "Kote legliz la ye, epi ki lè nou rasanble?",
        "answer": "Legliz nou an sitiye nan 3540 Peachtree Run, Dover, DE 19901, Etazini. Nou rasanble chak dimanch a 11:00 nan maten."
    },
    {
        "question": "Ki gwoup ki disponib, epi kijan mwen ka rantre nan yon group?",
        "answer": "Gen anpil gwoup ou ka rantre ladan yo! Vizite seksyon Ministè nou an pou w ka wè tout gwoup ki disponib yo."
    },
    {
        "question": "Èske gen etid biblik?",
        "answer": "Wi, nou fè etid biblik chak mèkredi a 6:30 nan apremidi. Tout moun envite!"
    },
    {
        "question": "Kijan mwen ka vizite legliz la si mwen pa gen transpòtasyon?",
        "answer": "Nou gen transpòtasyon ou ka itilize pou ou vini legliz la, ranpli yon fòm transpòtasyon si sa pral premye fwa wap vizite legliz la."
    },
    {
        "question": "Ki sa ou ofri pou jèn moun?",
        "answer": "Si ou se yon jèn moun, nou ankouraje ou rantre nan ministè jèn yo! Nou òganize anpil aktivite pou jèn yo. Nou gen etid biblik, evènman sosyal, avek anpil lot bagay."
    },
    {
        "question": "Mwen pa pale kreyòl ayisyen, èske mwen ka toujou vin vizite?",
        "answer": "Wi, nou tap renmen anpil pou ou ta vizite nou. Pandan ke sèvis legliz nou yo fèt an kreyòl ayisyen, nou entegre franse ak anglè nan sèvis la tou. Anplis de sa, nou bay sèvis tradiksyon pou konvenyans ou."
    }
]

const OtherGroupsQuestions = language == "English" ? [
    { 
        question: "What groups are available besides Youth, Kids, and Women's?",
        answer: "In addition to these groups, we also have Men's Ministry, the Tech and Media Team, the Musicians' Group, the choir group, and the Worship Team."

    },
    { 
        question: "Can I join more than one group?",
        answer: "Yes, if you have multiple talents or interests, you're welcome to join more than one group."

    },
    { 
        question: "Can I join a group if I’m not baptized?",
        answer: (
            <>
                While we encourage everyone to consider baptism, it is not a requirement to join a group. 
                However, there may be some limitations on your involvement in certain activities if you are not baptized. 
                If you’re interested in learning more about baptism, please visit our <a href="/Baptizing">baptism page</a>.
            </>
        )

    }
] : [
    { 
        "question": "Ki gwoup ki disponib apre gwoup jèn yo, timoun yo ak gwoup fanm yo?",
        "answer": "Anplis gwoup sa yo, nou genyen Ministè Gason, Ekip Teknoloji ak Media, Gwoup Mizisyen, ekip koral la ak Ekip Adorasyon an."
    },
    { 
        "question": "Èske mwen ka rantre nan plisye gwoup?",
        "answer": "Wi, si ou gen plizyè talan oswa enterè, ou ka rantre nan plisye gwoup."
    },
    { 
        "question": "Èske mwen ka rantre nan yon gwoup si mwen pa batize?",
        "answer": (
            <>
                Byenke nou ankouraje tout moun pou yo konsidere batèm, se pa yon kondisyon pou rantre nan yon gwoup. 
                Si w enterese aprann plis sou batèm, tanpri vizite <a href="/Baptizing">paj batèm nou an</a>.
            </>
        )
    }
]

const KidsQuestions = language == "English" ? [
    { 
        question: "What time does the kids service starts?",
        answer: "The Kids Ministry service begins at 11:00 AM, coinciding with our main worship service."

    },
    { 
        question: "What time does the kids service ends?",
        answer: "The Kids Ministry service concludes at the same time as our main worship service."

    },
    { 
        question: "Is there an age limit for participating in the Kids Ministry?",
        answer: "All children from age 4 to age 9 are welcome to participate in the Kids Ministry."

    }
] : [
    { 
        "question": "A ki lè sèvis Timoun yo kòmanse?",
        "answer": "Sèvis Ministè Timoun yo kòmanse a 11:00 nan maten, ansanm ak sèvis adorasyon prensipal la."
    },
    { 
        "question": "A ki lè sèvis Timoun yo fini?",
        "answer": "Sèvis Ministè Timoun yo fini an menm tan ak sèvis adorasyon prensipal la."
    },
    { 
        "question": "Èske gen yon laj maksimòm pou patisipe nan Ministè timoun yo?",
        "answer": "Tout timoun soti nan laj 4 rive a 9 ane ka patisipe nan Ministè Timoun yo."
    }
]

export { YouthQuestions, WomenQuestions, AboutQuestions, OtherGroupsQuestions, KidsQuestions};
