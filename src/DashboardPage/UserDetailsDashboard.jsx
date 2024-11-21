import React from 'react'
import './UserDetailsDashboard.css'

const UserDetailsDashboard = () => {
  return (
    <div className='div_userdetailsdashboard_container'>
        <div className='div_userdetailsdashboard_content'>
            <div className='div_userdetailsdashboard_content_details'>
                <div className='ud_sub_content_details'>
                    <div className='sub_content_userdetails'>
                        <div className='sub_content_container'>
                            <div className='sub_userdetails_title'>
                                <span id='sub_ud_title_span_01'>Candidate Details</span>
                            </div>
                            <div className='sub_userdetails_name_email_container'>
                                <div className='sub_userdetails_name_email_manually'>
                                    <div className='sub_username_manually'>
                                        <span id='sub_username_manually_span_01'>Candidate Name</span>
                                    </div>
                                    <div className='sub_useremail_manually'>
                                        <span id='sub_useremail_manually_span_02'>Candidate Email</span>
                                    </div>
                                </div>
                                <div className='sub_userdetails_name_email_db'>
                                    <div className='sub_username_db'>
                                        <span id='sub_username_db_span_01'>Kadiyala Siva Prasad</span>
                                    </div>
                                    <div className='sub_useremail_db'>
                                        <span id='sub_useremail_db_span_02'>sivaprasad.ksp01@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className='sub_content_upcoming_interviews'>
                        <div className='sub_upcoming_interview_container'>
                            <div className='sub_ui_content_title'>
                                <span id='sub_ui_content_title_span_01'>Upcoming Interviews</span>
                            </div>
                            <div className='sub_ui_content_interview_detail'>
                                <span id='sub_ui_content_interview_detail_span_01'>No schedule at the moment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div_userdetailsdashboard_content_pfphoto_resume'>

            </div>
        </div>    
    </div>
  )
}

export default UserDetailsDashboard;