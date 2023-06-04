import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import '../styles/Experience.scss';

function Experience() {
  return (
    <div className="experience container">
      <VerticalTimeline lineColor="#f5f0ec">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1/2022 - Present"
          iconStyle={{ background: "#F4C35A", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            AGBA Management Company Limited
          </h4>
          <p>
              UI/UX Designer
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="4/2019 - 1/2022"
          iconStyle={{ background: "#F4C35A", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Orange Data
          </h4>
          <p>
              Web Designer
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11/2016 - 3/2019"
          iconStyle={{ background: "#F4C35A", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Sing Tao Corporation Limited
          </h4>
          <p>
              Web Designer
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2016"
          iconStyle={{ background: "#F4C35A", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Hong Kong Baptist University
          </h4>
          <p>
            Bachelor of Communication (Honours) - Film and Media Arts
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2014"
          iconStyle={{ background: "#F4C35A", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Hong Kong Institution of Vocational Education (Lee Wai Lee)
          </h4>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Web Designer
          </h4> */}
          <p>Higher Diploma in Multimedia</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;