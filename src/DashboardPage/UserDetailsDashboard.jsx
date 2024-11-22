import React from 'react'
import './UserDetailsDashboard.css'
import { FiUpload } from "react-icons/fi";

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
                <div className='ud_sub_content_pfphoto_resume'>
                    <div className='sub_pfphoto_conatiner'>
                        <div className='sub_pfphoto_container_content'>
                            <div className='sub_pfphoto_title'>
                                <span id='sub_pfphoto_title_span_01'>Profile Photo</span>
                            </div>
                            <div className='sub_pfphoto_image'>
                                <img src='https://www.w3schools.com/howto/img_avatar.png' alt='Profile Photo' className='sub_pfphoto_image_img'/>
                            </div>
                            <div className='sub_pfphoto_image_details'>
                                <span id='sub_pfphoto_image_details_span_01'>JPG or PNG no larger than 50 KB</span>
                            </div>
                            <div className='sub_pfphoto_upload_button'>
                                <div className='content_upload_button'>
                                    <i class='bx bx-upload'></i>
                                    <span id='content_upload_button_span_01'>Upload</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sub_resume_container'>
                        <div className='sub_resume_container_content'>
                            <div className='sub_resume_title'>
                                <span id='sub_resume_title_span_01'>Resume</span>
                            </div>
                            <div className='sub_resume_upload_details'>
                                <div className='resume_ud'>
                                    <span id='resume_ud_span_01'>sivaprasad_resume.pdf</span>
                                    <button id='resume_ud_button_01'>View</button>
                                </div>
                                <div className='resume_ud_time'>
                                    <span id='resume_ud_time_span_01'>Last updated on:<span id='resume_db_time_date'>21-11-2024 12:49:59 PM</span></span>
                                </div>
                            </div>
                            <div className='sub_resume_upload_button'>
                                <div className='resume_content_upload_button'>
                                    <i class='bx bx-upload'></i>
                                    <span id='resume_content_upload_button_span_01'>Upload</span>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default UserDetailsDashboard;