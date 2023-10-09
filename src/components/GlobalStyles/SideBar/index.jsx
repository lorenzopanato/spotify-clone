import styled from "styled-components";
import { Home, Search, Library, Plus, ArrowRight, ChevronDown } from 'lucide-react';
import Topic from "./Topic";
import Playlist from "./Playlist";

const SideContainer = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 356px;
    height: 100vh;
    font-size: 15px;

    header {
      height: 124px;
      display: flex;
      flex-direction: column;
      padding-left: 22px;
      justify-content: center;
      gap: 24px;
    }

    section {
      flex: 1;
    }

    header,
    section {
      background-color: #141414;
      border-radius: 8px;
    }

    section {
        display: flex;
        flex-direction: column;
        padding: 22px;
        .libray-container {
            display: flex;
            justify-content: space-between;
            color: #9e9e9e;

            .library-icons {
                display: flex;
                gap: 12px;
                cursor: pointer;
            }
        }

        .icon {
            padding: 4px;
            border-radius: 50%;
            &:hover {
                color: #FFF;
                transition: 0.5s;
                background-color: #3636369f;
            }
        }

        button {
            background-color: #3636369f;
            font-size: 13px;
            width: fit-content;
            font-weight: 500;
            color: #FFF;
            border: none;
            padding: 10px;
            border-radius: 18px;
            margin: 20px 0 20px 0;
            cursor: pointer;
            &:hover {
                background-color: #55555570;
                transition: 0.5s;
            }
        }

        .search-playlists {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #9e9e9e;
            margin-bottom: 16px;

            .recents {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;

                &:hover {
                    color: #FFF;
                    transition: 0.5s;
                }
            }
        }

        .playlists-container {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
    }
  `;

  const playlists = [
    {
        image: '/images/liked-songs.png',
        title: 'Liked Songs',
        description: 'Playlist • 0 songs'
    }, 
    {
        image: '/images/astroworld.jpg',
        title: 'Playlist',
        description: 'Playlist • User'
    },
    {
        image: '/images/astroworld.jpg',
        title: 'Playlist',
        description: 'Playlist • User'
    },
    {
        image: '/images/astroworld.jpg',
        title: 'Playlist',
        description: 'Playlist • User'
    },
    {
        image: '/images/astroworld.jpg',
        title: 'Playlist',
        description: 'Playlist • User'
    },
    {
        image: '/images/astroworld.jpg',
        title: 'Playlist',
        description: 'Playlist • User'
    }
  ]

const SideBar = () => {
    return (
        <SideContainer>
            <header>
                <Topic active={true} icon={<Home />} text="Home" />
                <Topic active={false} icon={<Search />} text="Search" />
            </header>
            <section>
                <div className="libray-container">
                    <Topic active={false} icon={<Library />} text="Your Library" />
                    <div className="library-icons">
                        <Plus className="icon" />
                        <ArrowRight className="icon" />
                    </div>
                </div>
                <button>Playlists</button>
                <div className="search-playlists">
                    <Search className="icon" size={'20px'} style={{ padding: '8px', cursor: 'pointer' }}/>
                    <div className="recents">
                        <p>Recents</p>
                        <ChevronDown />
                    </div>
                </div>
                <div className="playlists-container">
                    {playlists.map(playlist => <Playlist playlist={playlist} />)}
                </div>
                
            </section>
        </SideContainer>
    )
}

export default SideBar;