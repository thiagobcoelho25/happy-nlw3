import React from 'react';
import { Link } from 'react-router-dom'
import { FiPlus} from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/Icon.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return(
        <div id='page-map'>
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crinças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>cachoeiro de itapemirim</strong>
                    <span>Espirito Santo</span>
                </footer>
            </aside>

            <Map 
                center={[-20.852055,-41.1749925]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url='https://a.title.openstreetmap.org/{z}{x}{y}.png' />
                {/*<TileLayer url={`https://ap1.mapbox.com/styles/v1/mapbox/streets-v11/titles/256/{z}{x}{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}>*/}
            </Map >

            <Link to='' className='create-orphanage'>
                <FiPlus size={32} color='#FFF' />
            </Link>
        </div>
    );
}

export default OrphanagesMap;