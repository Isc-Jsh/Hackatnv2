import React from "react";

    const Hours = () => {
        // add logic

        const shelterHours = [
            { day: "Monday", open: "10:00", close: "23:50:00" },
            { day: "Tuesday", open: "10:00", close: "23:50:00" },
            { day: "Wednesday", open: "10:00", close: "23:00" },
            { day: "Thursday", open: "10:00", close: "23:50:00" },
            { day: "Friday", open: "10:00", close: "23:00" },
            { day: "Saturday", open: "9:00", close: "23:00" },
            { day: "Sunday", open: "9:00", close: "23:00" },
    
        ]

        // get the long day name and store it in a variable called today
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

        // get today's hours
        // const todayHours = shelterHours.find((day) => day.day === today);

        // display today and the hours in an div with an id of hours
        return (
            <div id="hours">
                <h2>ing.jesus.sanchez@gmail.com</h2>
               <h2><https://portal.azure.com/#@iscjshhotmail.onmicrosoft.com/resource/subscriptions/62193480-e846-4a36-802a-96e1425c3707/resourceGroups/pets-workshop/providers/Microsoft.App/containerApps/isc2containerapp/containerapp/h2>
            </div>
        )
    }

export default Hours;// Placeholder to host a component
