import SchedulesDay from './SchedulesDay'
import Link from 'next/link'
import {useState} from 'react'


function YogaSchedules() {

  
  const [active, setActive]=useState(0)
  
  
  const days = [
    {
      'id': "sc-mon-tab",
      'img': "http://placehold.it/400x400",
      'date' : "Monday",
      'link':"#sc-mon",
      'title' : "Graphic Designing"
    },
    {
      'id': "sc-tue-tab",
      'img': "http://placehold.it/400x400",
      'date' : "Tuesday",
      'link':"#sc-tue",
      'title' : "Online Marketing"
    },
    {
       'id': "sc-wed-tab",
      'img': "http://placehold.it/400x400",
      'date' : "Wednesday",
      'link':"#sc-wed",
      'title' : "Brand Strategys"
    },
    {
      'id': "sc-thu-tab",
      'img': "http://placehold.it/400x400",
      'date' : "Thursday",
      'link':"#sc-thu",
      'title' : "Social Marketing"
    },
    {
      'id': "sc-fri-tab",
      'img': "http://placehold.it/400x400",
      'date' : "Friday",
      'link':"#sc-fri",
      'title' : "On-the-go learning"
    },
    {
      'id': "sc-sat-tab",
      'img': "http://placehold.it/400x400",
      'link':"/courses/6",
      'date' : "Saturday",
      'title' : "Basic photography"
    },
    {
      'id': "sc-sun-tab",
      'img': "http://placehold.it/400x400",
      'link':"/courses/6",
      'date' : "Sunday",
      'title' : "Basic photography"
    },
  

  ]
  const scheduleTimes = [
    {
      'id': '#sc-mon',
      'img': "http://placehold.it/400x400",
      'time' : "8:30 am",
      'link':"/courses/1",
      'title' : "Namaste Yoga",
      'small' : "- Ruby Vov Rails",
      'label':"sc-mon-tab"


    },
    {
      'id': '#sc-tue',
      'img': "http://placehold.it/400x400",
      'time' : "9:30 am",
      'link':"/courses/1",
      'title' : "tue",
      'small' : "- Ruby Vov Rails",
      'label':"sc-tue-tab"


    },
 
    {
      'id': '#sc-wed',
      'img': "http://placehold.it/400x400",
      'time' : "85:30 am",
      'link':"/courses/1",
      'title' : "Farhan",
      'small' : "- Ruby Vov Rails",
      'label':"sc-wed-tab"


    },
    {
      'id': '#sc-thu',
      'img': "http://placehold.it/400x400",
      'time' : "85:30 am",
      'link':"/courses/1",
      'title' : "Farhan ahmed",
      'small' : "- Ruby Vov Rails",
      'label':"sc-thu-tab"


    },
   

  ]
 


    return (
        <>
           <div className="section section-schedule" style={{background: 'linear-gradient(to bottom, rgba(126, 150, 128, 0) 0%, rgba(126, 150, 128, 0.8) 70%) left top', padding: '100px 0', backgroundSize: '100% 100%'}}>
        <div className="container">
          <div className="heading-block border-bottom-0 bottommargin-lg" style={{maxWidth: '700px'}}>
            <h2 className="font-weight-bold mb-2 nott" style={{fontSize: '42px', letterSpacing: '-1px'}}>Yoga <span>Schedule</span>.</h2>
            <p className="lead">Energistically syndicate team building synergy after efficient human capital. Assertively underwhelm sticky solutions.</p>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-5 mt-4 mt-md-0 sticky-sidebar-wrap">
              <div className="sticky-sidebar">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
             

                  { days.map((day , index)=>{
              return (<Link  href={day.link} onClick ={(e) =>{
                setActive(index)
              }} 
               ><a id={day.id} data-toggle="pill" role="tab" aria-controls={day.link}  aria-selected="true" className= {`nav-link ${index===active && "active"}`}>{day.date}</a></Link>)
            })}
                </div>
              </div>
            </div>
            <div className="col-md-7 mt-5 mt-md-0">
              <h5 id="week-details" className="font-body text-black-50 d-inline-block">Date</h5><span className="text-black-50"> (Monday - Sunday)</span>
              <div className="tab-content" id="v-pills-tabContent">
         
          { scheduleTimes.map((scheduleTime , index)=>{
            return (<div onClick ={(e) =>{
              setActive(index)
            }} 
             className={`tab-pane schedule-wrap fade ${index===active && "show active"}`} id={scheduleTime.id} role="tabpanel" aria-labelledby={scheduleTime.label}>
                <dl className="row no-gutters table mb-0">
              
              {
                scheduleTimes.map((scheduleTime) =>{
                  return <SchedulesDay scheduleTime = {scheduleTime} key={scheduleTime.id} />
                })
              }
             
            </dl>
               </div>)
              
          })}

      
              </div>
            </div>
          </div>
        </div>
      </div>


        </>
    )
}

export default YogaSchedules
