import "./CaseStudy.css";

const forestVideo = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/forest/forestDemo.mp4";
const raytracer = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/forest/raytracer.png";


function ForestGenerator () {
    return(
        <div className="case-study-holder">
            <h1>Forest Generator</h1>

            <div className="subsection">
                <h2> Conceptualizing a Simulator</h2>
                <p>
                Born in the digital age, my peers and I spent countless hours navigating various digital landscapes. Inspired by our experiences, a small group of us envisioned crafting our own virtual environment—one that mirrored the infinite and unpredictable nature of nature itself. Motivated by this vision and a desire to deepen our understanding of computer graphics, we embarked on a project to create a <b>procedurally generated forest environment</b>. This initiative wasn't just about building a digital space; it was about pushing the limits of what we could achieve with technology and expanding our knowledge in a tangible, impactful way.                </p>
            </div>

            <div className="subsection">
                <h2>Building a Ray Tracer</h2>
                <p>

As we ventured deeper into the project, the need for a tool that could realistically render our expansive forest became apparent. I developed a ray tracer—a program capable of simulating and tracing the paths of light as they interact with virtual objects, creating realistic images. I started with the basic principles of ray tracing, gradually layering on complexities such as lighting for wchih I used the <b>Phong Illumination Model</b> accounting for ligth reflection, refraction, and shadows. To truly see our forest come to life, I experimented extensively, using JSON files to manage and test different environmental configurations. 
                </p>
            </div>

            <div className="image-holder">
                <img src={raytracer} alt="raytraced-img"/>
                <p>
                    Rendering of lots spheres using the raytracer.
                </p>
            </div>


            <div className="showcase">
                <h2> The Outcome</h2>

                <div className="showcase-subsection">
                    <ul className="bullets">
                        <li> A procedurally generated forest with chunk-based rendering</li>
                        <li> User can <b>move</b>, <b>zoom</b> and <b>rotate</b> the camera</li>
                        <li> Toggleable <b>invert</b>, <b>brighten</b>, <b>pixel</b>, and <b>grayscale</b> filters</li>
                        <li> Includes <b>reflective</b> ponds, with <b>pseudorandomly generated</b> trees and hills </li>
                        <li> <b>Press play</b> to watch demo &rarr;</li>

                    </ul>
                   
                    

                <video controls loop>
                    <source src={forestVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                
                </div>
                
                
            </div>

            <div className="subsection" >
                <h2> Behind the Scenes</h2>
                <div className="left-right-subsection">
                    <div className="left-subsection">
                        <h3>Project Structure </h3>
                        
                        

                        <p>
                        Implemented a <b>realtime raytracer in C++ </b> that renders a traversable forest scene. 
                        Program procdeurally generates chunks based on internal parameters and surroundingm exisitng chunks. These chunks' vertex data is then stored in a
                        hashmap and rendered when the user is in the range of the the <i> visible chunks </i> parameter.
                        
                        Created <b>shaders</b> for each object using <b>OpenGL</b>. The filters use convolution techniques that apply different kernels to the pixels being rendered.  

                        </p>
                    </div>
                    <div className="right-subsection">
                        <h3>Component Design</h3>
                        <p>
                        The <a>terrain</a> is <b>generated using perlin noise</b> and gets its color depending on the z-position of each pixel.
                
                        The <a>ponds</a> are generated in low-altitude valleys. They <b>utilize a reflection heavy lighting model</b> to reflect the light coming from the sky creating a shimmerimg illusion.
                        The <a>trees</a> are made up of cylinder primitives and utilize <b>L-Systems</b> generate unique trees. The user can change parameters to increase leaf count and size.</p>
                    </div>
                </div>              
            </div>

            <div className="subsection">
                <h2> Working as a team</h2>
                <p>
                    For this project I worked with two other team developers. One of them focused on the generation of trees, while the other one focused on the water. My role was to create the terrain and chunk generation with trees and ponds.
                     Together we worked on the raytracer and filters.
                </p>
            </div>

            <div className="subsection">

                <h2> Learning Insights </h2>
                <p>
                Throughout this project, our journey from conceptualization to implementation has been rich with learnings and insights. One of the most significant takeaways was the <a>importance of flexibility and adaptation in digital creation</a>. The ability to manipulate and fine-tune our virtual environment using JSON files proved crucial, as it allowed us to experiment with various scenarios and instantly see the results of our modifications. This iterative process not only perfected our forest simulation but also reinforced the importance of a dynamic workflow in digital design.

                Additionally, the project underscored the value of collaboration and the sharing of expertise. Working closely with my teammates, each focusing on different aspects of the environment, enriched the project and expanded our collective skill set. We learned to integrate diverse components seamlessly, from terrain generation to lighting effects, creating a cohesive and immersive experience.

                This endeavor has not only pushed the boundaries of what we can create in a virtual space but also deepened our appreciation for the complexities of natural environments. The skills and insights gained from this project will undoubtedly influence our future work, driving us to explore new possibilities in the realm of digital simulation and design.
                </p>
            </div>
            

        </div>

        
    );
}

export default ForestGenerator;