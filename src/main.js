//<input class="form-control"  submit_url="{{url('getData')}}" msg_id="msg" method="get" type="text" id="onKeyUp"  placeholder="FeeHead Name" name="fees">

document.getElementById("onKeyUp").onkeyup = function() {
    // Using a Callback Function
    loadXMLDoc(response);
};
function loadXMLDoc(callback) {

    var onKeyUp = document.getElementById("onKeyUp");
    var submit_url = onKeyUp.getAttribute("submit_url");
    var method = onKeyUp.getAttribute("method");

    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        // console.log(this.readyState);
        // console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
            callback(onKeyUp,this);
        }else if(this.status == 200){

        }
    };
    xhttp.open(method, submit_url, true);
    xhttp.send();
}

function response(onkeyup,xhttp) {
    var msg_id = onkeyup.getAttribute("msg_id");
    var data = JSON.parse(xhttp.responseText);
    if(data.status==200){
        document.getElementById(msg_id).innerHTML = data.msg;
        onkeyup.style.border = "2px solid green";
        document.getElementById(msg_id).style.color = "green";
    }else{
        document.getElementById(msg_id).innerHTML = data.msg;
        onkeyup.style.border = "2px solid red";
        document.getElementById(msg_id).style.color = "red";
    }

}
