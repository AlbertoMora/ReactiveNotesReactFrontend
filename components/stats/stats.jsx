import React from 'react';
import Row from 'react-bootstrap/Row';
import StatCard from './stat-card';

function Stats(props) {
    return (
        <Row className="stats-dashboard">
            <StatCard type="bar-chart" title="Notes by Month"
                desc="Bar Chart with the information about the amount of notes generated on each month."
                bgColor="white" to="/stats/note_month" iconColor="blue" />
            <StatCard type="pie-chart" title="Notes by Categorie"
                desc="Pie Chart with the information about the amount of notes generated on each Categorie."
                bgColor="white" to="/stats/note_cat" iconColor="red" />
            <StatCard type="area-chart" title="Notes by Year"
                desc="Pie Chart with the information about the amount of notes generated by year, in the last 4 years."
                bgColor="white" to="/stats/note_year" iconColor="purple" />
            <StatCard type="line-chart" title="Notes by Categorie"
                desc="Pie Chart with the information about the amount of notes generated on each Categorie."
                bgColor="white" to="/stats/note_cat" iconColor="green" />
        </Row>
    );
}
export default Stats;