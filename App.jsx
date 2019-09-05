import React from 'react';
import ReactDom from 'react-dom';
import SideBar from './components/sidebar/sidebar';

const AppExport = <SideBar />;
ReactDom.render(AppExport, document.getElementById("react-app-container"));
