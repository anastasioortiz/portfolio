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
                <h2>Pokémon Champion Begginings</h2>
                <p> 
                Whether you’re a ten-year-old unwrapping your first gaming console or a twenty-six-year-old reminiscing about the good old days, Pokémon remains a cultural icon in the world of gaming. Like many fans, I've dived deep into the Pokémon universe, a place where whimsical creatures abound, each eager to be part of a team.
                </p>
            </div>

            <div className="subsection">
                <h2>Planning Makes Perfect</h2>
                <p> 
                While the famous motto Gotta Catch 'Em All captures the essence of Pokémon for many, there's a more complex layer to the experience—building your own team. This involves not just collection but also strategy: understanding intricate rules, and crafting a lineup that resonates with your style. </p>
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
                Addressing the complexities of team composition, my project, the Pokémon Team Builder, was designed to simplify and optimize this process. Utilizing a mix of data analysis and user-friendly design, the Team Builder helps players identify potential synergies and gaps in their lineup. By inputting desired Pokémon or selecting specific roles they need to fill, users can receive suggestions based on statistical effectiveness and compatibility. This tool leverages algorithmic insights to recommend configurations that not only meet the strategic demands of the game but also align with the player’s personal preferences and playstyle. The goal? To make the daunting task of team planning both accessible and enjoyable, ensuring every trainer can step into battle with confidence.                </p>
            </div>

            <div className="showcase">
                <h2>Understanding Player Needs </h2>

                <div className="showcase-subsection">
                <p> 
                    In order to design a team builder I first needed to understand what players' take into account when building a team. Below is a mock up of what three different types of players decision making when adding a new team member would look like. 
                </p>
                    
          
                </div>
                <div id="diagram">
                    <img src={diagram} alt="diagram"/>
                </div>
            </div>
            

            <div className="subsection">
                <h2>The Pokemon Team Builder</h2>
                <p> 
                    The Pokemon Team Builder is desgined to facilitate the comparison of Pokémon to Pokémon, by using filters and sorters so that users can look for specific pokemon typings and sort through stats, entry number and even alphabetical ordering. 
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus cras. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Justo eget magna fermentum iaculis eu. Sodales neque sodales ut etiam sit amet nisl purus. Proin sed libero enim sed faucibus turpis in eu mi. Mollis nunc sed id semper risus in hendrerit. Tellus id interdum velit laoreet id donec ultrices. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Est ullamcorper eget nulla facilisi. Nulla aliquet porttitor lacus luctus accumsan tortor. Egestas sed tempus urna et pharetra pharetra massa. Bibendum enim facilisis gravida neque convallis a cras semper. Amet risus nullam eget felis eget nunc lobortis mattis. Vel risus commodo viverra maecenas. Scelerisque purus semper eget duis at tellus at urna condimentum. Interdum velit euismod in pellentesque massa.
                </p>
            </div>
        </div>
    );
}

export default Development;