import type { WorldClassSpeakers,Highlight ,UpcommingConference} from "@/types/demos/conference";


//World Class Speakers

import team1 from '/images/aboutpage/team/team-1.jpg';
import team3 from '/images/aboutpage/team/team-3.jpg';
import team4 from '/images/aboutpage/team/team-4.jpg';
import team5 from '/images/aboutpage/team/team-5.jpg';

const WorldClassSpeakersData: WorldClassSpeakers[] = [
    {
        img: team3,
        name: 'Dan Cristan',
        designation: 'Designation',
    },
    {
        img: team4,
        name: 'Jorgea Steward',
        designation: 'Designation',
    },
    {
        img: team5,
        name: 'Brian Roberto',
        designation: 'Designation',
    },
    {
        img: team1,
        name: 'Darrell Lewis',
        designation: 'Designation',
    },

]


//Highlight Banner slider 

import banner1 from '/images/conference/previous-highlights/audience.jpg';
import banner2 from '/images/conference/previous-highlights/audience.jpg';
import banner3 from '/images/conference/previous-highlights/audience.jpg';
const HighlightData: Highlight[] = [
    {
        banner:banner1,
    },
    {
        banner:banner2,
    },
    {
        banner:banner3,
    }
]

//Upcomming Conference
const UpcommingConferenceData: UpcommingConference[] = [
    {
        date:1,
        monthyear:'Aug 2024'
    },
    {
        date:2,
        monthyear:'Aug 2024'
    },
    {
        date:3,
        monthyear:'Aug 2024'
    },
    {
        date:7,
        monthyear:'Aug 2024'
    },
    {
        date:8,
        monthyear:'Aug 2024'
    },
    {
        date:9,
        monthyear:'Aug 2024'
    },
    {
        date:10,
        monthyear:'Aug 2024'
    },
    {
        date:12,
        monthyear:'Aug 2024'
    },
    {
        date:15,
        monthyear:'Aug 2024'
    },
    {
        date:17,
        monthyear:'Aug 2024'
    },
    {
        date:18,
        monthyear:'Aug 2024'
    },
    {
        date:20,
        monthyear:'Aug 2024'
    },
]

export { WorldClassSpeakersData,HighlightData,UpcommingConferenceData };