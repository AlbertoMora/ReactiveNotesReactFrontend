import React from 'react';
import Chart from 'react-google-charts';
import CssLoader from '../miscellaneous/css-loader';
import BreadCrumb from '../miscellaneous/breadcrumb';
import BrCrItem from '../miscellaneous/breadcumb-item';

function StatDashboard(props) {

    const chartInfo = setDashInfo(props.dashType);

    return (
        <React.Fragment>
            <h2 className="chart-title">{chartInfo.title}</h2>
            <hr />
            <BreadCrumb>
                <BrCrItem to="/stats" icon="line-chart" text="Statistics" />
                <BrCrItem icon="" text={chartInfo.brText} />
            </BreadCrumb>
            <Chart
                width={'100%'}
                height={'400px'}
                chartType={chartInfo.type}
                loader={<CssLoader color="blue" size="100" />}
                data={chartInfo.data}
                options={chartInfo.options}
            />
        </React.Fragment>
    );
};

function setDashInfo(type) {

    switch (type) {
        case "notesMonth":
            let infoMonth = {
                data: [
                    ['Month', '2018 Notes', '2019 Notes'],
                    ['January', 200, 259],
                    ['February', 20, 100],
                    ['March', 130, 208],
                    ['April', 130, 208],
                    ['May', 130, 208],
                    ['June', 130, 208],
                    ['July', 130, 208],
                    ['August', 130, 208],
                    ['September', 130, 208],
                    ['October', 130, 208],
                    ['November', 130, 208],
                    ['December', 130, 208]
                ],
                options: {
                    title: 'Notes by Month',
                    chartArea: { width: '70%' },
                    hAxis: {
                        title: 'Total Notes',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Month',
                    },
                },
                title: 'Stats by Month - Last 2 years',
                type: "ColumnChart",
                brText: "Notes by Month"
            };
            return infoMonth;
        case "notesCat":
            let infoCat = {
                data: [
                    ['Categorie', 'Amount'],
                    ['Technologie', 20],
                    ['Home', 40],
                    ['Health', 35],
                    ['University', 60],
                ],
                options: {
                    title: 'My Notes by Categorie'
                },
                title: "Stats by Categorie",
                type: "PieChart",
                brText: "Notes by Categorie"
            };
            return infoCat;
        case "notesYear":
            let infoYear = {
                data: [
                    ['Year', 'Amount'],
                    ['2017', 20],
                    ['2018', 15],
                    ['2019', 90],
                    ['2020', 0]
                ],
                options: {
                    title: 'Amount of notes by year'
                },
                title: "Notes by Year - Last 4 Years",
                type: "AreaChart",
                brText: "Notes by Year"
            };
            return infoYear;
        default:
            return null;
    }

}

export default StatDashboard;