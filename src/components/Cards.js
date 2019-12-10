import React from 'react';
import { IoMdTime } from 'react-icons/io';
import { IoIosCalendar } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';

function Cards() {
    let newYearConference = confs['newYearConference']
    let theLordsSupperNorway = confs['theLordsSupperNorway']
    return <>
    <div className="card-deck">
        <Card {...newYearConference}/>
        <Card {...theLordsSupperNorway}/>
    </div>
    </>
}

const confs = {
    'newYearConference': {
        imageUrl :'https://d1vpzb8ccuu79x.cloudfront.net/wp-content/uploads/stockholm-750x450.jpg',
        confType : 'New Year Conference',
        country: 'Sweden',
        city: 'Stockholm',
        confStart: { 
            date: '28',
            sup: 'th',
            month: 'December'
        },
        confEnd: { 
            date: '31',
            sup: 'st',
            month: 'December'
        },
        confSubtypes: [
            {
                'title': 'Whole day program',
                'location': {
                    'address': 'KISTA TORG 7, 164 42 Kista',
                    'map': 'https://www.google.com/maps/place/Kista+Tr%C3%A4ff/@59.4022735,17.9397174,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9ef25f64e0cd:0x66aab4a9f9ddf527!8m2!3d59.4022735!4d17.9419061',
                },
                'time': [
                    {
                        'date': { 
                            day:'Saturday',
                            date: '28',
                            sup: 'th',
                            month: 'December'
                        },
                        'startTime': '14:00',
                        'finishTime': '20:00'
                    },
                    {
                        'date': { 
                            day:'Sunday',
                            date: '29',
                            sup: 'th',
                            month: 'December'
                        },
                        'startTime': '15:00',
                        'finishTime': '21:00'
                    }
                ]
            },
            {
                'title': 'Evening program',
                'location': {
                    'address': 'KISTA TORG 7, 164 42 Kista',
                    'map': 'https://www.google.com/maps/place/Kista+Tr%C3%A4ff/@59.4022735,17.9397174,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9ef25f64e0cd:0x66aab4a9f9ddf527!8m2!3d59.4022735!4d17.9419061',
                },
                'time': [
                    {
                        'date': { 
                            day:'Monday',
                            date: '30',
                            sup: 'th',
                            month: 'December'
                        },
                        'startTime': '18:00',
                        'finishTime': '22:00'
                    },
                    {
                        'date': { 
                            day:'Thuesday',
                            date: '31',
                            sup: 'st',
                            month: 'December'
                        },
                        'startTime': '18:00',
                        'finishTime': '22:00'
                    }
                ]
            },
            {
                'title': 'Evening program',
                'location': {
                    'address': 'Borgenvägen 16, 182 38 Danderyd',
                    'map': 'https://www.google.com/maps/place/Borgenv%C3%A4gen+16,+182+38+Danderyd,+Sweden/@59.4050446,18.0018831,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9c22477dcc5b:0x43856619d855d1ad!8m2!3d59.4050446!4d18.0040718',
                },
                'time': [
                    {
                        'date': { 
                            day:'Monday',
                            date: '30',
                            sup: 'th',
                            month: 'December'
                        },
                        'startTime': '13:00',
                        'finishTime': '16:00'
                    },
                    {
                        'date': { 
                            day:'Thuesday',
                            date: '31',
                            sup: 'st',
                            month: 'December'
                        },
                        'startTime': '13:00',
                        'finishTime': '16:00'
                    }
                ]
            }
        ]
    },
    'februaryConferenceUK': {
        imageUrl :'https://d1vpzb8ccuu79x.cloudfront.net/wp-content/uploads/stockholm-750x450.jpg',
        confType : 'New Year Conference',
        country: 'Sweeden',
        city: 'Stockholm',
        confStart: { 
            date: '28',
            sup: 'th',
            month: 'December'
        },
        confEnd: { 
            date: '31',
            sup: 'st',
            month: 'December'
        },
        confSubtypes: [
            {
                'title': 'Whole day program',
                'location': {
                    'address': 'KISTA TORG 7, 164 42 Kista',
                    'map': 'https://www.google.com/maps/place/Kista+Tr%C3%A4ff/@59.4022735,17.9397174,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9ef25f64e0cd:0x66aab4a9f9ddf527!8m2!3d59.4022735!4d17.9419061',
                },
                'time': [
                    {
                        'date': { 
                            day:'Saturday',
                            date: '28',
                            sup: 'th',
                            month: 'December'
                        },
                        'startTime': '14:00',
                        'finishTime': '20:00'
                    },
                    {
                        'date': { 
                            day:'Sunday',
                            date: '29',
                            sup: 'th',
                            month: 'December'
                        },
                        'startTime': '15:00',
                        'finishTime': '21:00'
                    }
                ]
            },
            {
                'title': 'Evening program',
                'location': {
                    'address': 'KISTA TORG 7, 164 42 Kista',
                    'map': 'https://www.google.com/maps/place/Kista+Tr%C3%A4ff/@59.4022735,17.9397174,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9ef25f64e0cd:0x66aab4a9f9ddf527!8m2!3d59.4022735!4d17.9419061',
                },
                'time': [
                    {
                        'date': { 
                            day:'Monday',
                            date: '30',
                            sup: 'th',
                            month: 'December'
                        },
                        'startTime': '18:00',
                        'finishTime': '22:00'
                    },
                    {
                        'date': { 
                            day:'Thuesday',
                            date: '31',
                            sup: 'st',
                            month: 'December'
                        },
                        'startTime': '18:00',
                        'finishTime': '22:00'
                    }
                ]
            },
            {
                'title': 'Evening program',
                'location': {
                    'address': 'Borgenvägen 16, 182 38 Danderyd',
                    'map': 'https://www.google.com/maps/place/Borgenv%C3%A4gen+16,+182+38+Danderyd,+Sweden/@59.4050446,18.0018831,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9c22477dcc5b:0x43856619d855d1ad!8m2!3d59.4050446!4d18.0040718',
                },
                'time': [
                    {
                        'date': { 
                            day:'Monday',
                            date: '30',
                            sup: 'th',
                            month: 'December'
                        },
                        'startTime': '13:00',
                        'finishTime': '16:00'
                    },
                    {
                        'date': { 
                            day:'Thuesday',
                            date: '31',
                            sup: 'st',
                            month: 'December'
                        },
                        'startTime': '13:00',
                        'finishTime': '16:00'
                    }
                ]
            }
        ]
    },
    'theLordsSupperNorway' : {
        imageUrl :'https://d1vpzb8ccuu79x.cloudfront.net/wp-content/uploads/stockholm-750x450.jpg',
        confType : "The Lord's Supper",
        country: 'Norway',
        city: 'Oslo',
        confStart: { 
            date: '3',
            sup: 'rd',
            month: 'April'
        },
        confEnd: { 
            date: '5',
            sup: 'th',
            month: 'April'
        },
        confSubtypes: [
            {
                'title': 'Evening program',
                'location': {
                    'address': 'Solbergliveien 85, 0683 Oslo',
                    'map': "https://www.google.com/maps/place/Sk%C3%B8yer'n+fritidsklubb/@59.8997986,10.8407608,17z/data=!3m1!4b1!4m5!3m4!1s0x46416f63edefaf97:0x8273d57b2f979b8!8m2!3d59.8997986!4d10.8429495",
                },
                'time': [
                    {
                        'date': { 
                            day:'Friday',
                            date: '3',
                            sup: 'rd',
                            month: 'April'
                        },
                        'startTime': '17:00',
                        'finishTime': '20:00'
                    }
                ]
            },
            {
                'title': 'Whole day program',
                'location': {
                    'address': 'Solbergliveien 85, 0683 Oslo',
                    'map': "https://www.google.com/maps/place/Sk%C3%B8yer'n+fritidsklubb/@59.8997986,10.8407608,17z/data=!3m1!4b1!4m5!3m4!1s0x46416f63edefaf97:0x8273d57b2f979b8!8m2!3d59.8997986!4d10.8429495",
                },
                'time': [
                    {
                        'date': { 
                            day:'Saturday',
                            date: '4',
                            sup: 'th',
                            month: 'April'
                        },
                        'startTime': '11:00',
                        'finishTime': '20:00'
                    },
                    {
                        'date': { 
                            day:'Sunday',
                            date: '5',
                            sup: 'th',
                            month: 'April'
                        },
                        'startTime': '11:00',
                        'finishTime': '20:00'
                    }
                ]
            }
        ]
    },
    'theLordsSupperCanada' : {},
    'mayConference' : {},
    'anualConference' : {},
    'octoberConference' : {},

}
const Card = ({imageUrl, confType, city, country, confStart, confEnd, confSubtypes}) => {
    return <div className="card">
        <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
        <ul className="list-group list-group-flush">
        <li key='mainBody' className="list-group-item">
                    {/* confType, city, country */}
            <h5 className="card-title">{confType} - {city}, {country}</h5>
            {/* conStart, confEnd */}
            <h6 className="card-subtitle mb-2 text-muted">{confStart.date}<sup>{confStart.sup}</sup> {confStart.month} - {confEnd.date}<sup>{confEnd.sup}</sup> {confEnd.month}</h6> 
        </li>
            {confSubtypes.map((item) => <ConfSubTypeItem {...item}/>)}
        </ul>
  </div>
}

const ConfSubTypeItem = ({id, title, location, time}) => {
    return <li key={id} className="list-group-item">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{title} at <a href={location.map}><GoLocation /> {location.address}</a></h6> 
                    <ul style={{listStyle: 'none'}}>
                        {time.map((item) => <ConfSubTypeTimeItem {...item}/>)}
                    </ul>
                </div>
            </li>
}

const ConfSubTypeTimeItem = ({id, date, startTime, finishTime}) => {
    return <li style={{border: 'px solid rgba(0,0,0,.125)'}} key={id}>
            <p><IoIosCalendar /> {date.day} {date.date}<sup>{date.sup}</sup> {date.month}</p>
            <p><IoMdTime /> {startTime} - {finishTime} </p>
        </li>

}
export default Cards