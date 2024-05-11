import "./CaseStudy.css";

const diagram = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/pokemon/diagram.png";
const website = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/dev4.png";
const ashKetchum = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/pokemon/ashTeam.png";
const xyBox = "./" + process.env.PUBLIC_URL + "/images/CaseStudies/pokemon/xyBox.png";

function Development () {

    return(
        <div className="case-study-holder">
            <div id="pokemon-header-holder">
                <h1 id="pokemon-header-1"> Gotta Catch 'Em All</h1>
                <h1 id="pokemon-header-2">–But You Can't Toss 'Em All into Battle!</h1>
            </div>
            <div className="subsection">
                <h2>Planning in Pokemon </h2>
                <p> 
                Whether you’re a ten-year-old unwrapping your first gaming console or a twenty-six-year-old reminiscing about the good old days, Pokémon remains a cultural icon in the world of gaming. Like many fans, I've dived deep into the Pokémon universe, a place where whimsical creatures abound, each eager to be part of a team.
                While the famous motto Gotta Catch 'Em All captures the essence of Pokémon for many, there's a more complex layer to the experience—building your own team. This involves not just collection but also strategy: understanding intricate rules, and crafting a lineup that resonates with your style. 
                </p>
            </div>

            <div className="image-holder">
                <img src={ashKetchum} alt="ash"/>
                <p>
                    Ash and his Team from the anime
                </p>
            </div>
            
            <div className="subsection">
                <h2>What's in a Team?</h2>
                <p> 
                In the world of Pokémon, a team is not just a random assortment of creatures; it’s a carefully considered compilation of skills, abilities, and synergies. Each Pokémon brings its own unique strengths, weaknesses, and abilities to the table, which can drastically affect outcomes in battles. A well-structured team considers factors like type advantages, move sets, and strategic roles—whether you need a sturdy defender, a swift attacker, or a versatile support to balance your squad. This level of detail requires not only knowledge but also foresight and planning, turning team assembly into an art form as much as a science.            </p>
            </div>
            <div className="image-holder">
                <img src={xyBox} alt="ash"/>
                <p>
                    In-game team selection tool
                </p>
            </div>
            
            <div className="subsection">
                <h2>Finding the optimal team building formula</h2>
                <p> 
                Addressing the complexities of team composition, my project, the Pokémon Team Builder, was conceived to simplify and optimize this process. Utilizing a mix of data analysis and user-friendly design, the Team Builder helps players aimed to identify potential synergies and gaps in their lineup. By inputting desired Pokémon or selecting specific roles they need to fill, users would have the capcity to sift through options and make decisions on whatever criteria they deemed important.     </p>
            </div>

            <div className="showcase">
                <h2>Understanding Player Needs </h2>

                <div className="showcase-subsection">
                <p> 
                    In order to design a team builder I first needed to understand what players' take into account when building a team. Below is a mock up of what three different types of players' decision making when adding a new team member would look like. 
                </p>
                    
          
                </div>
                <div id="diagram">
                    <img src={diagram} alt="diagram"/>
                </div>
            </div>
            

            <div className="subsection">
                <h2>The Pokemon Team Builder</h2>
                <p> 
                    The Pokemon Team Builder, featured below, is desgined to facilitate the comparison of Pokémon to Pokémon, by using filters and sorters so that users can look for specific pokemon typings and sort through stats, entry number and even alphabetical ordering. 
                </p>
                <div className="left-right-subsection">
                    <div className="left-subsection">
                        <ul className="bullets">
                            <li> User can <b>add</b> or <b>remove</b>  a Pokemon from their team</li>
                            <li> Implements a <b>sorter</b> that allows user to display Pokémon in order of the <b>alphabet</b>, <b>Pokedex Entry Number</b>, or a chosen <b>stat</b></li>
                            <li> Includes a toggleable <b>filter</b> bar that sifts through Pokémon by type</li>
                            <li> Each Pokémon is formatted as a json and read into a <b>Pokémon Card React Component</b> </li>
                        </ul>
                    </div>
                    <div className="right-subsection">
                        <img src={website} alt="website pic" id="website-pic"/>
                        
                    </div>
                    </div>
            </div>
            


`            <div className="subsection">
                <h2>Takeaways</h2>
                <p> 
                    From this project, I managed to weave my web application development skills in React along with my pasion for strategy games. Once I began conceptualizing this project, it became clear how important it was to take into account all types of players and what they would look for in a tool like this. I learned how to balance using an intuitive design that leveraged Pokemon knowledge without making an over complicated tool that might be just have been appealing to hardcore players.
                </p>
            </div>
            <br></br>
        </div>
    );
}

export default Development;