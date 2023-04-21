createTable()
let index = -1;
document.getElementById("form").onsubmit=function(e){
    e.preventDefault();

    let famname = e.target.elements.famname.value;
    let gname = e.target.elements.gname.value;
    let tel = e.target.elements.tel.value;
    console.log(famname,gname,tel);
    
    writeRow(famname,gname,tel);
}

function createTable(){
    let table = '<table id="table"><tr><td>Vezetéknév</td><td>Utónév</td><td>Telefonszám</td><td>Töröl</td><td>Módosít</td></tr></table>';
    document.getElementById("datatable").innerHTML = table;
}

function writeRow(famname,gname,tel) {
    if (index != -1) {
        
        let rows = document.getElementsByTagName("tr");
        console.log(rows);
        // let tb = rows.children;
        // console.log(tb);
        let row = rows[index++];
        console.log("row",row);
        row.childNodes[0].innerHTML = famname;
        row.childNodes[1].innerHTML = gname;
        row.childNodes[2].innerHTML = tel;
        console.log("row",row);
    }else{
        let table = document.getElementById("table");
        let row = document.createElement("tr");
        let famnametable = document.createElement("td");
        famnametable.innerHTML = famname;
        let gnametable = document.createElement("td");
        gnametable.innerHTML = gname;
        let teltable = document.createElement("td");
        teltable.innerHTML = tel;
        let delrow = document.createElement("td");
        delrow.innerHTML = '<button type="button" onclick="delRow(this)">Töröl</button>';
        let editrow = document.createElement("td");
        editrow.innerHTML = '<button type="button" onclick="editRow(this)">Szerkeszt</button>';
        //delrow.addEventListener("click", delRow(this));
        row.appendChild(famnametable);
        row.appendChild(gnametable);
        row.appendChild(teltable);
        row.appendChild(delrow);
        row.appendChild(editrow);
        table.appendChild(row);    
    }
    
}
function delRow(e) {
    console.log(e);
    console.log(e.parentNode);
    console.log(e.parentNode.parentNode);
    let row = e.parentNode.parentNode;
    
    let table = document.getElementById("table");

    table.removeChild(row);
}
function editRow(e) {
    let row = e.parentNode.parentNode;
    console.log(row.childNodes);
    const cells = row.childNodes;
    console.log(cells[0].innerHTML);
    let fname = document.getElementById("famname")
    fname.value = cells[0].innerHTML;
    let lname = document.getElementById("gname")
    lname.value = cells[1].innerHTML;
    let tel = document.getElementById("tel")
    tel.value = cells[2].innerHTML;
    index = row.rowIndex;
}