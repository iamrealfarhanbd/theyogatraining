


function SchedulesDay({scheduleTime}) {



    return (


        
        <>
        <dt className="col-sm-3"><div className="schedule-time font-primary">{scheduleTime.time}</div></dt>
        <dd className="col-sm-9 d-flex justify-content-between align-items-center">
                <div className="schedule-desc font-primary">{scheduleTime.title}<small>{scheduleTime.small}</small></div>
               <a href="#"> <img src="demos/yoga/images/teacher/thumbs/1.jpg" alt="" className="schedule-teacher" /></a>
              </dd>
        </>
  
    )
}

export default SchedulesDay
