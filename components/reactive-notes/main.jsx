import React from 'react';
import RNotesList from './r-notes-list';
import { Route, Switch } from 'react-router-dom';
import Page404 from '../miscellaneous/page404';
import Stats from '../stats/stats';
import NewNote from './new-note';
import Page from '../miscellaneous/page';
import StatDashboard from '../stats/stat_dashboard';

function Main(props) {

    return (
        <main>
            <Switch>
                {   /*Home and Subs*/   }
                <Route path="/" exact component={props =>
                    <Page title="Main Page" component={RNotesList} />} />
                <Route path="/home" exact component={props =>
                    <Page title="Main Page" component={RNotesList} />} />
                <Route path="/home/new-note" exact component={props =>
                    <Page title="New Note" component={NewNote} />} />

                {   /*Stats and Subs*/  }
                <Route path="/stats" exact component={props =>
                    <Page title="Statistics" component={Stats} />} />
                <Route path="/stats/note_month" exact component={props =>
                    <Page title="Notes by Month" dashType="notesMonth" component={StatDashboard} />} />
                <Route path="/stats/note_cat" exact component={props =>
                    <Page title="Notes by Year" dashType="notesCat" component={StatDashboard} />} />
                <Route path="/stats/note_year" exact component={props =>
                    <Page title="Notes by Categorie" dashType="notesYear" component={StatDashboard} />} />

                {   /*Not found page*/    }
                <Route path="*" exact component={props =>
                    <Page title="Page Not Found" component={Page404} />} />
            </Switch>
        </main>
    );
}

export default Main;