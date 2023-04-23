import React from 'react';
import "../ProgressLine/ProgressLine.css";

function ProgressBar({filled}) {

  return (
	  <div>
	  <div className='urok'>
	  <span className='urok_progress'>Прогресс урока</span>
	  </div>
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "#0dcaf0",
				  transition:"width 0.5s"
			  }}></div>
			  <span className="progressPercent">{ filled }%</span>
		  </div>
	</div>
  )
}
export default ProgressBar;