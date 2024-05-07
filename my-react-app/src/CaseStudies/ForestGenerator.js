import "./CaseStudy.css";

const forestVideo = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/forest/forestDemo.mp4";

function ForestGenerator () {
    return(
        <div className="case-study-holder">
            <h1>Forest Generator</h1>

            <div className="subsection">
                <h2> Conceptualizing a Simulator</h2>
                <p>
                    
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
            

        </div>

        
    );
}

export default ForestGenerator;