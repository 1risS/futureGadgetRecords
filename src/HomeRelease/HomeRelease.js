import { React } from 'react'
import './HomeRelease.css'
// import picture from '../images/hatemzug_CNDSD.jpg'
// import picture from '../images/CNDSD.jpg'
import Soundcloud from '../Soundcloud'



function HomeRelease (props) {
    return(
        <div className="HomeReleaseContainer" {...props}>
            <div className="ReleasePicContainer">
                {/* <img className="ReleasePic" src={picture} alt="Release"></img> */}
                <div className="PreviewContainer">
                    <Soundcloud visual="false" url="https://soundcloud.com/vor4gine/sets/cndsd-crisis-tales" height="10%"/>
                </div>
            </div>
            <div className="ReleaseDescriptionContainer">
                <div className="ReleaseTitle">Crisis Tales</div>
                <div className="Artist">CNDSD</div>
                <div className="ReleaseDescription">
                    Conformado por piezas de músicos y artistas de lo sonoro que orbitan alrededor de 
                    diversos géneros, esta es la primera entrega de Antimateria Sonora, sello dedicado 
                    al ambient y sonidos afines. Bajo esta premisa se convocó a un grupo de colegas a 
                    crear un track inédito, que en la mayoría de los casos los sacaría de su estilo musical 
                    habitual. El resultado son estas 29 interpretaciones alrededor del ambient, drone, 
                    experimental y el diseño sonoro. Artistas del compilado: nerBIOS, Hypnosoft, 
                    Dvrvnt, JorgeRodrigo, Eric Uh, CNDSD, KOI, José Soberanes, Soos, EMBA Soundsystem, 
                    Yomi, ASS, Rawdell, Bioluminik, Beastie C, Ruido, Impvlso, P0110, Seagit Arc, Naerlot, 
                    Dj Fucci, Poeta Ruido, Red Boy, Derrumbe & Adeller, Idea Asimétrica, Testosterone, 
                    Tahres One, 2678262 & Shakiro Nil y Cautiverio.</div>
            </div>
        </div>
    )
}

export default HomeRelease