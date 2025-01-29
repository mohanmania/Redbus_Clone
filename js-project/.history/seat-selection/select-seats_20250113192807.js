
      
const submit =  document.getElementById("submit");
submit.addEventListener("click",()=>{
     checkGender()

})

const seatlayoutform = document.getElementById("seatlayoutform");
const seatschairs = document.getElementById("seatchair")
const upperseats = document.getElementById("upperseats")

seatlayoutform.addEventListener("change",(e)=>{
    e.preventDefault()
    if(e.target.name == "seatlayout"){
        if(e.target.value == "seats"){
            // alert("seats selected")
            upperseats.style.display="none";
            seatschairs.style.display="block";

        }
        else if(e.target.value == "sleeper"){
            // alert("your in slepeer")
            seatschairs.style.display="none";
            upperseats.style.display="block";
        }
    }

})

var Gender = document.getElementById("gender").value

function checkGender() {
let Gender = document.getElementById("gender").value;

if (Gender.toLowerCase() === "female") {
    let seats = document.querySelectorAll("#seats1");

    seats.forEach((seat, index = 0) => {
        seat.addEventListener("click", () => {
            seat.style.backgroundColor = "lightgrey";
            seat.style.border = "1px solid red";
            seat.style.color = "green";
            seat.title = "Booked by female; not allowed beside men's seats";
        });
    });
}
else{
    let seats = document.querySelectorAll("#seats1");
    seats.forEach((seat)=>{
        seat.addEventListener("click",()=>{
            seat.style.backgroundColor = "lightgrey";
            seat.style.border = "1px solid black";
            seat.style.color = "black";
            seat.title = " Booked By Male passenger"
        })
    })

}

}




const seats = document.querySelectorAll('.seats, .seats-back, .outdiv1');
let selectedSeatsCount = 0 ;
console.log(typeof selectedSeatsCount)
console.log(selectedSeatsCount)
console.log(selectedSeatsCount)


seats.forEach(seat => {
seat.addEventListener('click', () => {
    if (seat.classList.contains('selected')) {
        seat.addEventListener('dbclick',()=>{
            seat.classList.remove('selected');
            seat.style.border="lightblue"
            seat.style.backgroundColor="lighgreen"
            seat.style.color="green"
            selectedSeatsCount--;
        })
       
    } else {
        seat.classList.add('selected');
        selectedSeatsCount++;
        if(selectedSeatsCount > 0){
            
       let confirmBooking = document.getElementById("confirm-Booking")
       confirmTicket()
       confirmBooking.style.display = "block";
       confirmBooking.style.backgroundColo="lightred";
       confirmBooking.style.color="white";

        }
    }
    document.getElementById('seatCount').textContent = `Selected Seats: ${selectedSeatsCount}`;
});
});
// if(selectedSeatsCount > 0){
//     alert("mohannnn");
// // console.log(selectedSeatsCount  == 0 )
// let confirmBooking = document.getElementById("confirm-Booking")


// confirmBooking.style.display = "block";
// confirmBooking.style.backgroundColor="lightred";
// confirmBooking.style.color="black";

// }
function confirmTicket(){
let confirmBooking = document.getElementById("confirm-Booking")
// alert("your in function")
confirmBooking.addEventListener("click",()=>{
    // alert("your in event function")
    window.location.href="../passengers/passengerdetails.html";
})
}




