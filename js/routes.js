import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,Redirect} from 'react-router';
import {Favourites} from './components/favourites.js';
import {Settings} from './components/settings.js';
import {Todos} from './components/todos.js';
import {App} from './components/app.js';
import {Header} from './components/header/header.js';
import {NotFoundPage} from './components/notFoundPage.js';


export default (
			<Route name="App" path="/" component={App}>
				<IndexRoute component={Todos} />			
				<Route path="archives(/:article)" component={Favourites}/>
				<Route path="settings" component={Settings}/>
				<Redirect from="settingsTodo" to="settings"/>
				<Route path="*" component={NotFoundPage}/>
			</Route>
		);
