import arch from "../../assets/Projects/arch.jpg";
import coper from "../../assets/Projects/coper.jpg";
import travels from "../../assets/Projects/travell.png";
import texnikamega from "../../assets/Projects/megatexnika.png";
import digital from "../../assets/Projects/digital.png";
import music from "../../assets/Projects/music.png";
import maxresdefault from "../../assets/Projects/calcs.jpg";
import { Container } from "@mui/material";

const projects = [
    {
        image: arch,
        name: "Arch Baku",
        skills: ["HTML", "CSS", "AOS", "SWIPER", "JAVASCRIPT", "React.js"],
        liveLink: "https://arch-baku-eyyub.vercel.app/",
    },
    {
        image: coper,
        name: "Coper Pro",
        skills: ["HTML", "CSS", "AOS", "SWIPER", "JAVASCRIPT", "React.js"],
        liveLink: "https://copper-projects-nv9q.vercel.app/",
    },
    {
        image: digital,
        name: "Communicat-E",
        skills: ["HTML", "CSS", "SASS/SCSS", "JAVASCRIPT", "React.js"],
        liveLink: "https://communicat-e.netlify.app/",
    },
    {
        image: travels,
        name: "Travel",
        skills: ["HTML", "CSS", "AOS", "SWIPER", "JAVASCRIPT", "React.js"],
        liveLink: "https://global-travel-project.vercel.app/",
    },
    {
        image: texnikamega,
        name: "Mega Texnika",
        skills: ["HTML", "CSS", "AOS", "SWIPER", "JAVASCRIPT", "React.js"],
        liveLink: "https://mega-texnika-flame.vercel.app/",
    },
    {
        image: music,
        name: "Music Galery",
        skills: ["HTML", "CSS", "Swiper", "JAVASCRIPT"],
        liveLink: "https://music-galery-game.vercel.app/",
    },
    {
        image: maxresdefault,
        name: "Calculator-Js",
        skills: ["HTML", "CSS","ALGORITHM","JAVASCRIPT"],
        liveLink: "https://calculator-simple-tan.vercel.app/",
    },
];

const Project = () => {
    return (

        <div id="projects">
            <Container>
                <div className="projects__container">
                    <div className="projects__top">
                        <h2>Projects</h2>
                    </div>
            <div data-aos="fade-down-left">
                    <div className="projects__allcard">
                        {projects.map((project, index) => (
                            <div className="project__card" key={index}>
                                <img className="projectimg" src={project.image} alt={project.name} />
                                <h2 className="projectname">{project.name}</h2>
                                <div className="project__skils">
                                    {project.skills.map((skill, skillIndex) => (
                                        <p className="skilscolor" key={skillIndex}>{skill}</p>
                                    ))}
                                </div>
                                <a className="project__live" href={project.liveLink}>
                                    <div>
                                        View Live
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

        </div>
            </Container>
        </div>
    );
};

export default Project;
