import React from 'react'
import './CurrentJobsActivity.css'

const CurrentJobsActivity = () => {
  return (
    <div className='div_cj_container'>
        <div className='cj_container_content'>
            <div className='cj_content_title'>
                <span id='cj_content_title_span_01'>Current Jobs</span>
            </div>
            <div className='cj_content_table'>
                <table>
                    <thead>
                        <tr className='cj_table_head'>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className='cj_table_show_entiies'>
                
            </div>
        </div>
    </div>
  )
}

export default CurrentJobsActivity;