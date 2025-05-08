import Timeline from "../components/Timeline";

export default function Travel() {
    const events = [
        {
          heading: "Mexico",
          subHeading: "April 2025",
          direction: "right"
        },
        {
          heading: "Sri Lanka",
          subHeading: "August 2024",
          direction: "left"
        },
        {
          heading: "Cuba",
          subHeading: "December 2023",
          direction: "right"
        },
        {
          heading: "Italy and Switzerland",
          subHeading: "August 2023",
          direction: "left"
        },
        {
            heading: "Ottawa",
            subHeading: "March 2022",
            direction: "right"
        },
        {
            heading: "Sri Lanka",
            subHeading: "July 2019",
            direction: "left"
        }
    ];
    return (
        <>
            <h1>Travel Timeline</h1>
            <Timeline events={events}/>
        </>
    );
}