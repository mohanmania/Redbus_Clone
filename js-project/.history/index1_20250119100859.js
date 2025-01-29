   
//     const submit =  document.getElementById("submit");
//     submit.addEventListener("click",()=>{
//          checkGender()

//     })

// // var Gender = document.getElementById("gender").value
// let RadioFemale = document.getElementById("male")
// let RadioMale = document.getElementById("Female")
// let RadiOther = document.getElementById("others")


// function checkGender() {
//     [RadioFemale,RadioMale,RadioOther].forEach(e => {
//         e.addEventListener("click",()=>{
//             if (RadioFemale.checked) {
//                 let seats = document.querySelectorAll("#seats1");

//                 seats.forEach((seat) => {
//                     seat.addEventListener("click", () => {
//                         seat.style.backgroundColor = "lightgrey";
//                         seat.style.border = "1px solid red";
//                         seat.style.color = "green";
//                         seat.title = "Booked by female; not allowed beside men's seats";
//                     });
//                 });
         
//         }  else if (RadioMale.checked) {
//             let seats = document.querySelectorAll("#seats1");
//             seats.forEach((seat)=>{
//                 seat.addEventListener("click",()=>{
//                     seat.style.backgroundColor = "lightgrey";
//                     seat.style.border = "1px solid black";
//                     seat.style.color = "black";
//                     seat.title = " Booked By Male passenger"
//                 });
//             });
      
//         } else if (RadioOther.checked) {
//             // 
         
//         } else {
//          console.log("No gender selected");
//      }
//     });

// });
// }

//     // // [RadioFemale,RadioMale,RadioOther].forEach(e => {
//     //     e.addEventListener("click",()=>{
//     //         if (RadioFemale.checked) {
//     //             let seats = document.querySelectorAll("#seats1");

//     //             seats.forEach((seat) => {
//     //                 seat.addEventListener("click", () => {
//     //                     seat.style.backgroundColor = "lightgrey";
//     //                     seat.style.border = "1px solid red";
//     //                     seat.style.color = "green";
//     //                     seat.title = "Booked by female; not allowed beside men's seats";
//     //                 });
//     //             });
         
//     //     }  else if (RadioMale.checked) {
//     //         let seats = document.querySelectorAll("#seats1");
//     //         seats.forEach((seat)=>{
//     //             seat.addEventListener("click",()=>{
//     //                 seat.style.backgroundColor = "lightgrey";
//     //                 seat.style.border = "1px solid black";
//     //                 seat.style.color = "black";
//     //                 seat.title = " Booked By Male passenger"
//     //             })
//     //         })
      
//     //     } else if (RadioOther.checked) {
//     //      console.log("Other is selected");
//     //     } else {
//     //      console.log("No gender selected");
//     //  }

//     //     })
        
//     // });
 
//     const seats = document.querySelectorAll('.seats, .seats-back, .outdiv1');
// var selectedSeatsCount = 0 ;

// var  seatDataStored = []
// seats.forEach(seat => {
//     seat.addEventListener('click', () => {
//         if (seat.classList.contains('selected')) {
//             seat.addEventListener('dbclick',()=>{
//                 seat.classList.remove('selected');
//                 seat.style.border="lightblue"
//                 seat.style.backgroundColor="lighgreen"
//                 seat.style.color="green"
//                 selectedSeatsCount--;
//                 console.log(selectedSeatsCount);
//             })
           
//         } else {
//             seat.classList.add('selected');
//             selectedSeatsCount++;
//             seatDataStored.push(selectedSeatsCount)
//             console.log(":",seatDataStored)
//             if(selectedSeatsCount > 0){
//                 // alert("i am new function")
//            let confirmBooking = document.getElementById("confirm-Booking")
//            confirmBooking.style.display = "block";
//            confirmBooking.style.backgroundColo="lightred";
//            confirmBooking.style.color="white";
//            selectedSeatsCounts()
//            console.log(selectedSeatsCount);

//             }
//         }
//         document.getElementById('seatCount').textContent = `Selected Seats: ${selectedSeatsCount}`;
//     });
// });
// // console.log(selectedSeatsCount);
// // let seatStored = []
// // if(selectedSeatsCount > 0){
// //     selectedSeatsCounts()
// //  let confirmBooking = document.getElementById("confirm-Booking")

// //  confirmBooking.style.display = "block";
// //  confirmBooking.style.backgroundColor="lightred";
// //  confirmBooking.style.color="black";

// //  confirmBooking.style.display = "block";
// //  confirmBooking.style.backgroundColor="lightred";
// //  confirmBooking.style.color="black";


// // }
// function selectedSeatsCounts(){

// // alert("your in new functionselected ")
//     let confirmBooking = document.getElementById("confirm-Booking")

//     confirmBooking.addEventListener("click",(e)=>{
//         e.preventDefault()
//         window.location.href="../passengers/passengerdetails.html"

//     });
 
// }

//     function AddeSeatSelection() {
//         const seats = document.querySelectorAll('.seats, .outdiv1');

//         seats.forEach(seat => {
//             seat.addEventListener('click', () => SeatSelection(seat));
//         });
//     }
//     // document.addEventListener('DOMContentLoaded', initializeSeatSelection);
    

const search = document.createElement("input")



const fetchRecipe = async () => {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a061682185msh0d6732a3643ea18p1d4a00jsn095ae710a653',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse as JSON instead of text
        console.log(result);
    } catch (error) {
        console.error("Error fetching the recipe:", error);
    }
};

// Call the function
fetchRecipe();
