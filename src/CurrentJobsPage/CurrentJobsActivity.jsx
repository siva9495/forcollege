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
                            <th className='table_cj_s_no'><h4>S.No</h4></th>
                            <th className='table_cj_campus'><h4>Campus</h4></th>
                            <th className='table_cj_nof_positions'>Name of the Position<h4></h4></th>
                            <th className='table_cj_no_f_position'><h4>No. of Position</h4></th>
                            <th className='table_cj_exp_req'><h4>Experience Required</h4></th>
                            <th className='table_cj_job_ref_no'><h4>Job Reference No.</h4></th>
                            <th className='table_cj_action'><h4>Action</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table_cj_tr01'>
                            <td className='table_cj_td_s_no'>1</td>
                            <td className='table_cj_td_campus'>Hyderabad</td>
                            <td className='table_cj_td_nof_position'>Assistant Professor</td>
                            <td className='table_cj_td_no_f_position'>10</td>
                            <td className='table_cj_td_exp_req'>0 to 15 years</td>
                            <td className='table_cj_td_job_ref_no'>CBIT ECE HYD-AP/00001</td>
                            <td className='table_cj_td_action'>
                                <div className='div_table_cj_btn_v_details'>
                                    <div className='action_cj_btn_container'>
                                        <span id='action_cj_btn_span01'>View Details</span>
                                    </div>    
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='cj_table_show_entiies'>

            </div>
        </div>
    </div>
  )
}

export default CurrentJobsActivity;