import React from 'react'
import './PersonalDetailsActivity.css'

const PersonalDetailsActivity = () => {
  return (
    <div className='div_pd_container'>
        <div className='pd_container_content'>
            <div className='pd_content_title'>
                <span id='pd_content_title_span_01'>Personal Details</span>
            </div>
            <div className='pd_content_user_enter'>
                <div className='pd_userenter_fr01'>
                    <div className='ue_fr01_inner01'>
                        <span className='ue_span_fr01_inner01'>Date of Birth</span>
                        <input className='ue_input_fr01_inner01' type="text" name="dateofbirth" placeholder="Enter DOB" />
                    </div>
                    <div className='ue_fr01_inner02'>
                        <span className='ue_span_fr01_inner02'>Gender</span>
                        <input className='ue_input_fr01_inner02' type="text" name="gender" placeholder="Select Gender" />
                    </div>
                    <div className='ue_fr01_inner03'>
                        <span className='ue_span_fr01_inner03'>Nationality</span>
                        <input className='ue_input_fr01_inner03' type="text" name="nationality" placeholder="" />
                    </div>
                </div>
                <div className='pd_userenter_fr02'>
                    <div className='ue_fr02_inner01'>
                        <span className='ue_span_fr02_inner01'>Martial Status</span>
                        <input className='ue_input_fr02_inner01' type="text" name="martial status" placeholder="Enter Name" />
                    </div>
                    <div className='ue_fr02_inner02'>
                        <span className='ue_span_fr02_inner02'>Personal Mobile Number ISD Code</span>
                        <input className='ue_input_fr02_inner02' type="text" name="personal mobile number isd code" placeholder="Enter Name" />
                    </div>
                    <div className='ue_fr02_inner03'>
                        <span className='ue_span_fr02_inner03'>Personal Mobile Number</span>
                        <input className='ue_input_fr02_inner03' type="text" name="personal mobile number" placeholder="Enter Personal Mobile Number" />
                    </div>
                </div>
                <div className='pd_userenter_fr03'>
                    <div className='ue_fr03_inner01'>
                        <span className='ue_span_fr03_inner01'>Alternative Email ID</span>
                        <input className='ue_input_fr03_inner01' type="text" name="alternative email id" placeholder="Enter Alternative Email ID" />
                    </div>
                    <div className='ue_fr03_inner02'>
                        <span className='ue_span_fr03_inner02'>Alternative Mobile Number ISD Code</span>
                        <input className='ue_input_fr03_inner02' type="text" name="alternative mobile number isd code" placeholder="Enter Alternative Mobile Number ISD Code" />
                    </div>
                    <div className='ue_fr03_inner03'>
                        <span className='ue_span_fr03_inner03'>Alternative Mobile Number</span>
                        <input className='ue_input_fr03_inner03' type="text" name="alternative mobile number" placeholder="Enter Alternative Mobile Number" />
                    </div>
                </div>
                <div className='pd_userenter_fr04'>
                <div className='ue_fr04_inner01'>
                        <span className='ue_span_fr04_inner01'>Physically Challenged</span>
                        <input className='ue_input_fr04_inner01' type="text" name="physically challenged" placeholder="Enter Name" />
                    </div>
                    <div className='ue_fr04_inner02'>
                        <span className='ue_span_fr04_inner02'>Pincode</span>
                        <input className='ue_input_fr04_inner02' type="text" name="pincode" placeholder="Enter Pincode" />
                    </div>
                    <div className='ue_fr04_inner03'>
                        <span className='ue_span_fr04_inner03'>Address</span>
                        <input className='ue_input_fr04_inner03' type="text" name="address" placeholder="Enter Address" />
                    </div>
                </div>
            </div>
            <div className='pd_userenter_fr05'>
                <div className='ue_fr05_inner01'>
                    <button className='ue_btn_fr05_inner01' >Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalDetailsActivity;