const YouthQuestions = [
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
]


const WomenQuestions = [
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
]

const AboutQuestions = [
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
        answer: "Yes, we hold Bible study sessions every Wednesday at 6:30 PM. Everyone is welcome!"
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
];

const OtherGroupsQuestions = [
    { 
        question: "What groups are available besides Youth, Kids, and Women's?",
        answer: "In addition to these groups, we also have Men's Ministry, the Tech and Media Team, the Musicians' Group, and the Worship Team."

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
]

const KidsQuestions = [
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
        answer: "All children from toddlers to age 13 are welcome to participate in the Kids Ministry."

    }
]

export { YouthQuestions, WomenQuestions, AboutQuestions, OtherGroupsQuestions, KidsQuestions};
