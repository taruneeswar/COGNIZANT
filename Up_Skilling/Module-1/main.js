console.log("Welcome to the Community Portal");

window.onload = () => {
    alert("Page Loaded Successfully");
};

const events = [
    {
        id:1,
        name:"Music Festival",
        category:"Music",
        seats:5,
        upcoming:true
    },

    {
        id:2,
        name:"Tech Meetup",
        category:"Technology",
        seats:3,
        upcoming:true
    },

    {
        id:3,
        name:"Old Event",
        category:"Music",
        seats:0,
        upcoming:false
    }
];

function displayEvents(list){

    const container =
    document.querySelector("#eventsContainer");

    container.innerHTML = "";

    list.forEach(event => {

        if(event.upcoming && event.seats>0){

            const card =
            document.createElement("div");

            card.className="card";

            card.innerHTML=
            `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <p>Seats: ${event.seats}</p>

            <button onclick="registerUser(${event.id})">
            Register
            </button>
            `;

            container.appendChild(card);
        }

    });
}

function addEvent(event){
    events.push(event);
}

function registerUser(id){

    try{

        let event=
        events.find(e=>e.id===id);

        if(event.seats<=0){
            throw "No Seats Available";
        }

        event.seats--;

        displayEvents(events);

        alert("Registration Successful");

    }
    catch(error){
        alert(error);
    }
}

function filterEventsByCategory(category){

    if(category==="All"){
        displayEvents(events);
        return;
    }

    let filtered=
    events.filter(e=>e.category===category);

    displayEvents(filtered);
}

const registrationCounter=(()=>{

    let count=0;

    return ()=>{
        count++;
        return count;
    };

})();

document
.getElementById("categoryFilter")
.onchange=(e)=>{

    filterEventsByCategory(
        e.target.value
    );

};

document
.getElementById("searchBox")
.addEventListener("keydown",()=>{

    let keyword=
    document
    .getElementById("searchBox")
    .value
    .toLowerCase();

    let result=
    events.filter(event=>
    event.name
    .toLowerCase()
    .includes(keyword));

    displayEvents(result);

});

document
.getElementById("registerForm")
.addEventListener("submit",
async function(e){

    e.preventDefault();

    const form=e.target;

    const name=
    form.elements["name"].value;

    const email=
    form.elements["email"].value;

    const selectedEvent=
    form.elements["event"].value;

    if(name==="" || email===""){

        document
        .getElementById("message")
        .innerHTML=
        "Please fill all fields";

        return;
    }

    document
    .getElementById("loading")
    .style.display="block";

    await new Promise(resolve=>
    setTimeout(resolve,2000));

    document
    .getElementById("loading")
    .style.display="none";

    fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            selectedEvent
        })
    })
    .then(response=>response.json())
    .then(()=>{

        document
        .getElementById("message")
        .innerHTML=
        "Registration Submitted Successfully";

        console.log(
        "Total Registrations:",
        registrationCounter()
        );

    })
    .catch(()=>{

        document
        .getElementById("message")
        .innerHTML=
        "Submission Failed";

    });

});

class Event{

    constructor(
        name,
        category,
        seats
    ){

        this.name=name;
        this.category=category;
        this.seats=seats;
    }

}

Event.prototype.checkAvailability=
function(){

    return this.seats>0;

};

let sample=
new Event(
"Workshop",
"Technology",
10
);

console.log(
Object.entries(sample)
);

displayEvents(events);
