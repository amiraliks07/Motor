function showDetails(motor) {
    const details = {
        Honda: "CB1300: قدرت; 114 اسب بخار  گیربکس; 5 سرعته دستی  وزن; 249 کیلوگرم  سیلندر; 4 سیلندر و 16 سوپاپ",
        Yamaha: "Yamaha R1: قدرت; 197 اسب بخار  گیربکس; 6 سرعته دستی  وزن; 201 کیلوگرم  سیلندر; 4 سیلندر و 16 سوپاپ",
        Kawasaki: "Kawasaki H2R: قدرت; 326 اسب بخار  گیربکس; 6 سرعته دستی  وزن; 179 کیلوگرم  سیلندر; 4 سیلندر و 16 سوپاپ",
          cbr: "Honda CBR1000RR-R: قدرت; 214 اسب بخار  گیربکس; 6 سرعته دستی  وزن; 202 کیلوگرم  سیلندر; 4 سیلندر و 16 سوپاپ",
          bmw: "BMW R 1250 RT: قدرت; 136 اسب بخار  گیربکس; 6 سرعته دستی  وزن; 279 کیلوگرم  سیلندر; 2 سیلندر و 8 سوپاپ",
           m1000 : "BMW M 1000 RR: قدرت; 218 اسب بخار  گیربکس; 6 سرعته دستی  وزن; 192 کیلوگرم  سیلندر; 4 سیلندر و 16 سوپاپ"
    };

    document.getElementById("details-text").innerHTML = details[motor];
    document.getElementById("details-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("details-modal").style.display = "none";
}


document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});


window.addEventListener("click", function(event) {
    const modal = document.getElementById("details-modal");
    if (event.target === modal) {
        closeModal();
    }
});



function submitPoll() {
  const selected = document.querySelector('input[name="brand"]:checked');
  const resultBox = document.getElementById("pollResult");

  if (selected) {
    resultBox.innerText = `شما برند ${selected.value} را انتخاب کردید. ممنون از مشارکت شما!`;
  } else {
    resultBox.innerText = "لطفاً یک برند را انتخاب کنید.";
  }
}
