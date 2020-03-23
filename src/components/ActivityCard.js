import React, { useContext, useState } from 'react'
import { ActivityContext } from '../contexts/ActivityContext'
import { DayContext } from '../contexts/DayContext'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const ActivityCard = ({ history, index, activity: { title, desc, time, activity_id }, _loadActivities }) => {

  const [showDesc, setShowDesc] = useState(false);
  const { date } = useContext(DayContext);
  const { dispatch } = useContext(ActivityContext)

  const _onShowDesc = () => {
    setShowDesc(!showDesc);
  }

  const _onEdit = (e) => {
    history.push(`/edit/${activity_id}`);
  }

  const _onDelete = e => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui soft-shadow'>
            <h1 className="custom-ui__title">Delete this item?</h1>
            <p className="custom-ui__desc">"{title}"</p>
            <button
              className="soft-shadow"
              onClick={() => {

                const localData = JSON.parse(localStorage.getItem('user'));
                const prevVisitDate = JSON.parse(localStorage.getItem('current_dateInformation'))

                localData.activities.map((activity, activity_index) => {
                  if (activity.date_string === prevVisitDate.dateString) {
                    dispatch({ type: "DELETE_ACTIVITY", activity_id, activity_index })
                  }
                })

                _loadActivities();

                onClose();
              }}
            >
              Yes, Delete it!
                  </button>
            <button className="soft-shadow" onClick={onClose}>Cancel</button>
          </div>
        );
      }
    });
  }

  return (
    <div className="activity-card soft-shadow">
      <div className="activity-card__header">
        {/* More SVG */}
        <div className="neomorphism-logo" onClick={e => _onShowDesc()}>
          <svg className="logo arrow-svg" viewBox="0 0 25 15" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6486 7.61379C11.9274 7.78879 12.2386 7.90754 12.5636 7.96129C12.8799 7.95629 13.1836 7.83254 13.4124 7.61379L20.5774 0.717542C21.0655 0.258923 21.7095 0.00258005 22.3793 0.000260026C23.0491 -0.00206 23.6948 0.249815 24.1861 0.705042L24.2236 0.740042C24.4677 0.968327 24.6625 1.24416 24.7959 1.55056C24.9294 1.85695 24.9987 2.18743 24.9997 2.52163C25.0006 2.85583 24.9331 3.18669 24.8014 3.49383C24.6696 3.80097 24.4764 4.07789 24.2336 4.30754L13.4674 14.6413C13.2211 14.869 12.899 14.9969 12.5636 15C12.2203 14.945 11.8912 14.8232 11.5949 14.6413L0.763601 4.30754C0.521117 4.07755 0.328277 3.80036 0.196957 3.49303C0.0656373 3.18571 -0.00138355 2.85475 2.16475e-05 2.52055C0.00142685 2.18635 0.0712283 1.85597 0.205128 1.54976C0.339028 1.24355 0.534191 0.967985 0.778601 0.740042L0.823601 0.705042C1.31814 0.249804 1.96639 -0.0018451 2.63855 0.00047272C3.31072 0.00279054 3.95721 0.258904 4.4486 0.717542L11.6486 7.61379Z" fill="inherit" />
          </svg>

        </div>
        {/* Edit SVG */}
        <div className="neomorphism-logo" onClick={e => _onEdit()}>
          <svg className="logo arrow-svg" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 19.7909V25H5.20906L20.5792 9.62981L15.3702 4.42075L0 19.7909ZM24.5937 5.61536C25.1354 5.07362 25.1354 4.19155 24.5937 3.64981L21.3502 0.406306C20.8084 -0.135435 19.9264 -0.135435 19.3846 0.406306L16.8426 2.94833L22.0517 8.15738L24.5937 5.61536Z" fill="inherit" />
          </svg>

        </div>

        {/* Delete SVG */}
        <div className="neomorphism-logo" onClick={e => _onDelete(e)}>
          <svg className="logo arrow-svg" viewBox="0 0 25 7" xmlns="http://www.w3.org/2000/svg">
            <rect width="25" height="6.57895" fill="inherit" />
          </svg>

        </div>
      </div>
      <h1 className="activity-card__title">{title}</h1>
      <div className={`activity-card__desc_wrapper ${showDesc ? "showDescClass" : "hideDescClass"}`}>
        <small className="activity-card__time">{time}</small>
        <p className="activity-card__desc">{desc}</p>
      </div>
    </div>
  )
}

export default ActivityCard
