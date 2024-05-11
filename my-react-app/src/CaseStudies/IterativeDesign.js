const logo = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/partiful/partiful.gif";
const old = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/partiful/current-demo.mp4";
const lofi1 = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/partiful/lofi1.png";
const lofi2 = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/partiful/lofi2.png";
const lofi3 = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/partiful/lofi3.png";
const lofi4 = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/partiful/lofi4.png";
const hifi1 = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/partiful/hifi1.png";
const hifi2 = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/partiful/hifi2.png";
const hifi3 = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/partiful/hifi3.png";
const hifi4 = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/partiful/hifi4.png";

function IterativeDesign () {
    return(
        <div className="case-study-holder">
            <div>
                <h1 id="partiful-header"> Redesigning Partiful <b>Settings</b></h1>
            </div>
            <div className="subsection">
                <h2>The Problem</h2>
                <p> 
                Partiful is an event planning application desgined specifically for Gen Z. Partiful reached out to me and a few other designers to reimagine their settings tab for their mobile app.
                Despite offering helpful settings, users were not utilizing these to their full extent. Most users were not aware of the existence of many of these settings. 
                </p>
            </div>
            <div className="image-holder">
                <img src={logo} alt="partiful-logo"/>
            </div>

            <div className="subsection">
                <h2>The Redesign Process</h2>
                <p>
                    Partiful gave us a problem statement: <b>How might we make event settings more prominent and easier to navigate for hosts?</b> This was the underlying question we kept in mind throughout this project. The end goal was to create a high-fidelity prototype in Figma of our redesigned Event Settings page that would enhance the user experience of navigating the settings.
                </p>
            </div>
            
            <div className="showcase">
                <h2> Pinpointing Painpoints</h2>

                <div className="showcase-subsection">
                    <ul className="bullets">
                        <li> <b>Non-intuitive</b> right scroll is needed to view all settings</li>
                        <li> Chunky blocks of text that make the extra informnation <b>hard to digest</b></li>
                        <li> Lots of settings are mutually exclusive, but that's <b>not apparent</b></li>
                        <li> <b>Lacks playfulness</b> associated with the brand  </li>
                        <li> <b>Press play</b> to watch demo of how the settings menu currently works &rarr;</li>

                    </ul>
                   
                    

                    <video id="partiful-demo" controls loop>
                    <source src={old} type="video/mp4"/>
                    Your browser does not support the video tag.
                    </video>
                
                </div>
                
                
            </div>
            <div className="subsection">
                <h2>Mocking</h2>
                <p>
                In our first attempts we aimed to enhance user navigation and reduce visual clutter. Key improvements included streamlined navigation, intuitive design, reduced redundancy and clear informnation. 
                <a>Streamlined Navigation</a> in which we discarded the multi-scroll approach for a cleaner, single-page layout, making it easier for users to overview and access settings.
                 <a>Intuitive Design</a> inspired by the familiar layout of the iPhone settings app, this approach prioritizes user familiarity and ease of navigation. 
                <a>Reduced Redundancy</a> by eliminating redundant settings such as "Chip In" and "Add Co-Hosts" that were duplicated in the Create Event page, simplifying the user experience. 
                <a>Clear Information</a> by adding an info button that provides concise descriptions, enhancing understanding without overwhelming the user.
                This redesign is part of our continuous effort to improve usability and ensure a seamless event creation process. The settings interface now showcases a clean, user-friendly environment that allows hosts to easily manage event details.
                </p>
            </div>
            <div className="image-holder-partiful">
            <img src={lofi2} alt ="lofi-2"/>
                <img src={lofi1} alt ="lofi-1"/>
                <img src={lofi3} alt ="lofi-3"/>
                <img src={lofi4} alt ="lofi-4"/>
            </div>

            <div className="subsection">
                <h2>Critique</h2>
                <p>
                    Before proceeding with our final drafts, we decided that it was of utmost importance to talk to potential users and our client, Partiful, to see what parts of the redesign were effective and which were not. 
                </p>
                <div className="left-right-subsection">
                    <div className="left-subsection">
                        <h3>User Critique </h3>
                        

                        <p>
                        When our low-fi design was presented to potential users, they felt that our prototype did not make it clear what our info sections would look like. Many of them liked the idea of the information text expanding underneath, which would move all the text down. They also pointed out that if our users needed info on one of the settings, they might need info on all of them, which would require them to do a lot of thinking. They also suggested we <b>make our font bigger and more readable</b>.

                        </p>
                    </div>
                    <div className="right-subsection">
                        <h3>Client Critique</h3>
                        <p>
                            Our client had similar critiques. They worried that clicking into <b>more icons may get annoying </b>if users had to keep doing it for each setting. They also suggested that we add spacing and reduce the boldness here to make sure things are legible and easy to follow. In addition, they pointed out that settings also works for hosts without having to click into edit event - so by removing Chip In and adding Co-host, hosts will be forced to edit event in order to change these settings. Finally, they also felt the design of the info buttons was unclear but they thought that either a pop up or adding text that would move the page elements down were both unideal.
                       </p>
                    </div>
                </div>              </div>
            <div className="subsection">
                <h2>Final Drafts</h2>
                <p>
                    After meeting with the Partiful team and showing them our mockups, we received some feedback. With it we redid some of the additions. For example, we decided to make the design a little more <b>fun</b> by adding color. We also added a changing info button so that users could tell that they could press it and which state the button was in. In the end we fine-tuned the designs to fit both he user and the brand.
                </p>
            </div>
            <div className="image-holder-partiful">
                <img src={hifi1} alt ="hifi-1"/>
                <img src={hifi2} alt ="hifi-2"/>
                <img src={hifi3} alt ="hifi-3"/>
                <img src={hifi4} alt ="hifi-4"/>
            </div>
            <br/>
            
            
        </div>
    );
}

export default IterativeDesign;