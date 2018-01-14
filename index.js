import React from 'react';
import {render} from 'react-dom';
import data from './src/api.json';
//Here we register all the components for the app
// import Playlist from './src/playlist/components/playlist';
import Content from './src/playlist/components/content';

const app = document.getElementById('app');
render( <Content data={data} /> , app );