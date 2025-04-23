import React from 'react';
import FadeInSection from './FadeIn';
import '../App.css'; // Make sure this path is correct

const Experience = () => {
    const [activeTab, setActiveTab] = React.useState('harris');

    const tabs = [
        {
            id: 'harris',
            title: 'HARRIS PAINTS',
            content: (
                <FadeInSection>
                    <span>
                        
                        <ul>
                            <li>Assisted with maintaining the company's computer and network infrastructure.</li>
                            <li>Provided technical support to staff members on hardware and software issues..</li>
                            <li>Assisted with setting up user accounts, resetting passwords, emails, and handling other confidential data..</li>
                        </ul>
                    </span>
                </FadeInSection>
            ),
        },
        {
            id: 'emax',
            title: 'EMAX SOLUTIONS',
            content: (
                    
                    <span>
                       <FadeInSection>
                        <ul>
                            <li>Managed and organized data entry tasks, ensuring accuracy and timely completion.</li>
                            <li>Collaborated with team members to ensure data integrity.</li>
                            <li>Processed large volumes of data for business operations.</li>
                        </ul>
                        </FadeInSection>
                    </span>
              
            ),
        },
        {
            id: 'jnb',
            title: 'JNB TECHNOLOGY',
            content: (
               
                    <span>
                        <FadeInSection>

                      
                        <ul>
                            <li>Provided on-site technical support to various businesses, resolving hardware and software issues.</li>
                            <li>Diagnosed and repaired computer systems and network-related problems.</li>
                            <li>Maintained client satisfaction by delivering efficient, timely solutions.</li>
                        </ul>
                        </FadeInSection>
                    </span>
          
            ),
        },
    ];
    

    return (
        <FadeInSection>
            <div id="Experience">
                <div className='experience-header'>
                    <h2>/ Experience</h2>
                </div>
                <div className="tab-container">
                    <div className="tab-titles">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`tab-title ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                                aria-selected={activeTab === tab.id}
                                role="tab"
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                    <div className={`tab-content ${activeTab ? 'tab-content-active' : ''}`} 
                        role="tabpanel"
                        aria-labelledby={activeTab}
                    >
                        <strong>{tabs.find(tab => tab.id === activeTab)?.title}</strong> | {tabs.find(tab => tab.id === activeTab)?.content}
                    </div>
                </div>
            </div>
        </FadeInSection>
    );
};

export default Experience;
