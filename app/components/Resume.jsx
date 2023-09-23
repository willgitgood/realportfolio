import './Resume.css'

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-container">
      <div className="title">
        <h1 className="title-ul">Professional Summary:</h1>
      </div>

      <div className="title-summary">
        <p>
          Computer Informations Systems graduate and IT professional with over 2 years of experience with providing Tier 1 and Tier 2 second level specialized LAN or network communications support for end users. I have experiencewith configuring IPv4 routing and switching commands and protocols for Cisco devices. I have knowledge with Full Stack development using HTML, CSS, JavaScript React, Nextjs and MongoDB.
        </p>
      </div>
      </div>

    <div className="resume-container2">

    <div className='skills'>
        <h1 className="skills-section">
          Technical Skills & Qualifications:
        </h1>
        <div className="skills-paragraph">
          <ul>
           <div>
             <li className="pb-2">• <span> Operating Systems:</span> Windows 7, 10; ARC GIS, Windows Server (2008r2/2012/2016)</li>
           </div>
            <div>
              <li className="pb-2">• <span>Networks</span>: COMPOSE 4.1, AR2, ACGv3, NMCI </li>
            </div>
            <div>
              <li className="pb-2">• <span>Programs</span>: Active Directory, Exchange Server</li>
            </div>
            <div>
              <li className="pb-2">• <span>Protocols:</span> SSH, Telnet, EIGRP, DNS</li>
            </div>
            <div>
              <li className="pb-2">• <span>Languages:</span> HTML, CSS, Javascript, Python, C++</li>
            </div>
            <div>
              <li className="pb-2">• <span>Software:</span> Microsoft Visio, Word, Excel, PowerPoint, Outlook, Access, VMware, AWS, Hyper-V, Ansible, Powershell, BASH Shell, Oracle</li>
            </div>
            <div>
              <li className="pb-2">• <span>Project Management:</span> Microsoft Teams, Zoom, Google Meets</li>
            </div>
          </ul>
        </div>
        </div>

    </div>
    </div>
  )
}

export default Resume
