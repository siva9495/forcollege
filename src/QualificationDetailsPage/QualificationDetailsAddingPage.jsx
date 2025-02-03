import React, { useState } from "react";
import "./QualificationDetailsAddingPage.css";

const QualificationDetailsAddingPage = () => {
  const [examType, setExamType] = useState("");
  const [degree, setDegree] = useState("");
  const [specializationVisible, setSpecializationVisible] = useState(false);
  const [boardVisible, setBoardVisible] = useState(false);
  const [markingSchemeVisible, setMarkingSchemeVisible] = useState(true);

  const handleExamTypeChange = (e) => {
    const selectedExam = e.target.value;
    setExamType(selectedExam);

    // Show/hide fields based on Exam Type
    if (["10th", "+2"].includes(selectedExam)) {
      setDegree(selectedExam);
      setBoardVisible(true);
      setSpecializationVisible(false);
      setMarkingSchemeVisible(true);
    } else if (selectedExam === "PhD") {
      setBoardVisible(false);
      setSpecializationVisible(false);
      setMarkingSchemeVisible(false);
      setDegree(selectedExam);
    } else if (["Under Graduation", "Post Graduation"].includes(selectedExam)) {
      setBoardVisible(false);
      setSpecializationVisible(true);
      setMarkingSchemeVisible(true);
      setDegree("");
    } else {
      setBoardVisible(false);
      setSpecializationVisible(false);
      setMarkingSchemeVisible(true);
      setDegree(selectedExam);
    }
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  return (
    <div className="div_qd_container">
      <div className="qd_container_content">
        <div className="qd_content_title">
          <span id="qd_content_title_span_01">Qualification Details</span>
        </div>
        <div className="qd_content_user_enter">
          {/* Education Status */}
          <div className="form-group">
            <span>Education Status</span>
            <select>
              <option value="" disabled selected>
                Select
              </option>
              <option value="Completed">Completed</option>
              <option value="Pursuing">Pursuing</option>
            </select>
          </div>

          {/* Exam Type */}
          <div className="form-group">
            <span>Exam Type</span>
            <select value={examType} onChange={handleExamTypeChange}>
              <option value="" disabled selected>
                Select
              </option>
              <option value="10th">10th</option>
              <option value="+2">+2</option>
              <option value="Diploma">Diploma</option>
              <option value="Under Graduation">Under Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
              <option value="MPhil">MPhil</option>
              <option value="PhD">PhD</option>
            </select>
          </div>

          {/* Degree */}
          <div className="form-group">
            <span>Degree</span>
            {["10th", "+2", "Diploma", "MPhil", "PhD"].includes(examType) ? (
              <select disabled>
                <option>{examType}</option>
              </select>
            ) : (
              <select value={degree} onChange={handleDegreeChange}>
                <option value="" disabled selected>
                  Select
                </option>
                {examType === "Under Graduation" && (
                  <>
                    <option value="B.Tech">B.Tech</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="B.Com">B.Com</option>
                  </>
                )}
                {examType === "Post Graduation" && (
                  <>
                    <option value="M.Tech">M.Tech</option>
                    <option value="M.Sc">M.Sc</option>
                    <option value="M.Com">M.Com</option>
                  </>
                )}
              </select>
            )}
          </div>

          {/* Degree Name */}
          <div className="form-group">
            <span>Degree Name</span>
            <input type="text" readOnly value={degree || "N/A"} />
          </div>

          {/* Specialization */}
          {specializationVisible && (
            <div className="form-group">
              <span>Specialization</span>
              <input type="text" placeholder="Enter Specialization" />
            </div>
          )}

          {/* Board */}
          {boardVisible && (
            <div className="form-group">
              <span>Board</span>
              <input type="text" placeholder="Enter Board Name" />
            </div>
          )}

          {/* College/University Name */}
          <div className="form-group">
            <span>College/University Name</span>
            <input type="text" placeholder="Enter College/University Name" />
          </div>

          {/* Place of Institution */}
          <div className="form-group">
            <span>Place of Institution</span>
            <input type="text" placeholder="Enter Place of Institution" />
          </div>

          {/* Mode of Education */}
          <div className="form-group">
            <span>Mode of Education</span>
            <select>
              <option value="" disabled selected>
                Select
              </option>
              <option value="Regular">Regular</option>
              <option value="Distance">Distance</option>
              <option value="Part-time">Part-time</option>
              <option value="Online">Online</option>
            </select>
          </div>

          {/* Month & Year of Passing */}
          {examType !== "PhD" && (
            <div className="form-group">
              <span>Month & Year of Passing</span>
              <input type="month" />
            </div>
          )}

          {/* Marking Scheme */}
          {markingSchemeVisible && (
            <>
              <div className="form-group">
                <span>Marking Scheme</span>
                <select>
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="CGPA">CGPA</option>
                  <option value="Percentage">Percentage</option>
                </select>
              </div>
              <div className="form-group">
                <span>CGPA/Percentage</span>
                <input type="number" placeholder="Enter CGPA/Percentage" />
              </div>
            </>
          )}

          {/* PhD-Specific Fields */}
          {examType === "PhD" && (
            <>
              <div className="form-group">
                <span>Date of Registration of your Ph.D. Degree</span>
                <input type="date" />
              </div>
              <div className="form-group">
                <span>Date of Award of your Ph.D. Degree</span>
                <input type="date" />
              </div>
              <div className="form-group">
                <span>Ph.D. from</span>
                <select>
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="University">University</option>
                  <option value="Institution">Institution</option>
                </select>
              </div>
              <div className="form-group">
                <span>Ph.D. - Area of Specialization</span>
                <input type="text" placeholder="Enter Ph.D. Area of Specialization" />
              </div>
              <div className="form-group">
                <span>Post-doc - Area of Specialization</span>
                <input type="text" placeholder="Enter Post-doc Area of Specialization" />
              </div>
            </>
          )}
        </div>

        {/* Submit Button */}
        <div className="qd_userenter_fr05">
          <button className="ue_btn_fr05_inner01">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default QualificationDetailsAddingPage;