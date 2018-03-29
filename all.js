var xhr = new XMLHttpRequest();
var data;
xhr.open('get','https://tcgbusfs.blob.core.windows.net/blobfs/GetDisasterSummary.json');
xhr.send(null);
xhr.onload = function(){
	var str = JSON.parse(xhr.responseText);
    data = str.DataSet['diffgr:diffgram'].NewDataSet.CASE_SUMMARY;
    initTable();
}


var town = document.querySelector("#town");
town.addEventListener('change',showTableList,false);

function showTableList(){
    var str ='';
    var len = data.length;
    for(var i = 0;len>i;i++){
        if(data[i].CaseLocationDistrict==town.value || town.value=="--請選擇行政區--"){
            str+= '<tr><td>'+data[i].CaseLocationDistrict+'</td><td>'+data[i].CaseTime+'</td><td>'+data[i].CaseDescription+'</td></tr>';
        }
    }
    document.querySelector('#list tbody').innerHTML = str;
  }

function initTable(){
    var str ='';
    var len = data.length;
    for(var i = 0;len>i;i++){
        str+= '<tr><td>'+data[i].CaseLocationDistrict+'</td><td>'+data[i].CaseTime+'</td><td>'+data[i].CaseDescription+'</td></tr>';
    }
    document.querySelector('#list tbody').innerHTML = str;
}
