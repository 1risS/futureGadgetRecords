import { React, useState, useRef} from 'react'
import './ContentMenu.css'
// import logo from '../images/logo_test.png'

function ContentMenu(props){

    const [expanded, setExpanded] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const contentVisibleRef = useRef(contentVisible);
    contentVisibleRef.current = contentVisible;

    function onClick() {
        if (expanded === false) {
        setExpanded(true);
        } else {
        setExpanded(false);
        }
    }

    function onMouseEnter() {
        setExpanded(true);
    }

    function onMouseLeave() {
        setTimeout(() => {
        if (!contentVisibleRef.current) {
            setExpanded(false);
        }
        }, 100);
    }

    function onContentMenuMouseEnter() {
        setContentVisible(true);
        console.log("content visible true");
    }

    function onContentMenuMouseLeave() {
        setContentVisible(false);
        setExpanded(false)
    }

    return (
        <div className="ContentMenuContainer" {...props}>
            <div className="MenuOptions">
                <div
                  className="ArtistsContainer"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                    <div className="TitleArtists">Artists</div>
                </div>
                <div className="ReleasesContainer">
                    <div className="TitleReleases">Releases</div>
                </div>
                <div className="AboutContainer">
                    <div className="TitleAbout">About</div>
                </div>
            </div>
            <div
              className="ArtistsListContainer"
              style={!expanded ? { display: "none" } : {}}
              onMouseEnter={onContentMenuMouseEnter}
              onMouseLeave={onContentMenuMouseLeave}
            >
                <div className="">Artista 1</div>
                <div className="">Artista 2</div>
                <div className="">Artista 3</div>
                <div className="">Artista 4</div>
                <div className="">Artista 5</div>
            </div>
        </div>
    )
}

export default ContentMenu