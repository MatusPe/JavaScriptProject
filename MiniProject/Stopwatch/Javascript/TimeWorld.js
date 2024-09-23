

let TimeDate=[]
const City=['Europe/London', 'America/New_York', 'Asia/Tokyo', 'Australia/Sydney', 'Europe/Berlin', "Europe/Paris"]
async function WorldTime() {


    for (const city of City) {
          await fetch(`http://worldtimeapi.org/api/timezone/${city}`)
            .then(response => response.json())
            .then(date => { const time = date.datetime.split('T')[1].split('.')[0]; // Get time part, remove milliseconds
                TimeDate.push(time);
                console.log(date.datetime);
            })

            .catch(error => console.log(error))


    }
    addToHtml();
    console.log(TimeDate);







}
function addToHtml() {
    console.log(TimeDate);
    console.log(document.getElementById('mytable'));
    if(document.getElementById('mytable')){
        document.getElementById('mytable').remove();
    }
    let table = '<table id="mytable">';

    table += '<thead><tr><th>Time</th><th>Timezone</th></tr></thead>';
    table += '<tbody>';

    TimeDate.forEach((time, index) => {
        table += '<tr>';
        table += `<td>${City[index]}</td>`;
        table += `<td>${TimeDate[index]}</td>`;
        table += '</tr>';
    });

    table += '</tbody></table>';
    console.log(table);
    console.log(TimeDate);
    console.log("ra")

    // Insert the table into the HTML
    document.getElementById('timeWorld').innerHTML = table;
}



    function update() {

        TimeDate.forEach((time, index) => {
            let [Hours, Minutes, Seconds] = time.split(":").map(Number);

            if (Seconds < 59) {
                Seconds += 1;

            } else if (Seconds == 59 && Minutes != 59) {
                Seconds = 0;
                Minutes += 1;


            } else if (Minutes == 59 && Hours != 23) {
                Seconds = 0;
                Minutes = 0;
                Hours += 1;
            }else{
                Seconds = 0;
                Minutes = 0;
                Hours = 0;
            }
            TimeDate[index] = [String(Hours).padStart(2, "0"), String(Minutes).padStart(2, "0"), String(Seconds).padStart(2, "0")].join(":");


        })
        addToHtml();



    }
function init(){
    WorldTime();
    setInterval(update, 1000);
}
init();