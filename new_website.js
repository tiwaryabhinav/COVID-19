let date = document.getElementById('date');
function updateclock() {
  let time = new Date();
  let currhr = time.getHours();
  if (currhr < 10)
    currhr = "0" + currhr;
  let currmin = time.getMinutes();
  if (currmin < 10)
    currmin = "0" + currmin;
  let currsec = time.getSeconds();
  if (currsec < 10)
    currsec = "0" + currsec;
  date.innerHTML = currhr + ":" + currmin + ":" + currsec;
}


function covid() {
  url = 'https://api.rootnet.in/covid19-in/stats/latest';
  fetch(url).then(function (response) {
    return response.text();
  }).then((data) => {
    let tablebody = document.getElementById('tablebody_covid');
    let uistr = '';
    let obj = JSON.parse(data);
    obj.data.regional.forEach((element) => {
      uistr += `<tr>
    <td>${element["loc"]}</td>
    <td>${element["totalConfirmed"]}</td>
    <td>${element["confirmedCasesIndian"]}</td>
    <td>${element["discharged"]}</td>
    <td>${element["deaths"]}</td>
</tr>`;
    });
    tablebody.innerHTML = uistr;
  })
}
covid();

function beds() {
  url = 'https://api.rootnet.in/covid19-in/hospitals/beds';
  fetch(url).then(function (response) {
    return response.text();
  }).then((data) => {
    let tablebody = document.getElementById('tablebody_beds');
    let uistr = '';
    let obj = JSON.parse(data);
    obj.data.regional.forEach((element) => {
      uistr += `<tr>
    <td>${element["state"]}</td>
    <td>${element["ruralHospitals"]}</td>
    <td>${element["ruralBeds"]}</td>
    <td>${element["urbanHospitals"]}</td>
    <td>${element["urbanBeds"]}</td>
    <td>${element["totalHospitals"]}</td>
    <td>${element["totalBeds"]}</td>
</tr>`;
    });
    tablebody.innerHTML = uistr;
  })
}
beds();

function colleges() {
  url = 'https://api.rootnet.in/covid19-in/hospitals/medical-colleges';
  fetch(url).then(function (response) {
    return response.text();
  }).then((data) => {
    let tablebody = document.getElementById('tablebody_colleges');
    let uistr = '';
    let obj = JSON.parse(data);
    obj.data.medicalColleges.forEach((element) => {
      uistr += `<tr>
    <td>${element["name"]}</td>
    <td>${element["state"]}</td>
    <td>${element["city"]}</td>
    <td>${element["ownership"]}</td>
    <td>${element["admissionCapacity"]}</td>
    <td>${element["hospitalBeds"]}</td>
</tr>`;
    });
    tablebody.innerHTML = uistr;
  })
}
colleges();


function advices()
{
  url='https://api.rootnet.in/covid19-in/notifications';
  fetch(url).then(function(response){
    return response.text();
  }).then(function(data)
  {
    let advice=document.getElementById('advices');
    let str='';
    let obj=JSON.parse(data);
    obj.data.notifications.forEach((e)=>{
      str+=`
      <div class="card advices" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">NOTIFICATION</h5>
        <p class="card-text">By ${e["title"]}</p>
        <a href="${e["link"]}" class="btn btn-primary">Go To Link</a>
      </div>
    </div>`;
    });
    advice.innerHTML=str;
})
}
advices();





let signup = document.getElementById('signup');
signup.addEventListener('click', function () {
  let signup_name = document.getElementById('signup_name');
  let signup_mail = document.getElementById('signup_mail');
  let pswrd = document.getElementById('pswrd');
  if (signup_name.value.length > 0 && signup_mail.value.length > 0 && pswrd.value.length > 0) {
    let alert = document.getElementById('alertmsg');
    alert.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Great </strong>Succesfully Registered
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    setTimeout(function () {
      alert.innerHTML = ``;
    }, 5000);
  }
  else {
    let alert = document.getElementById('alertmsg');
    alert.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Error </strong>Incorrect Details
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    setTimeout(function () {
      alert.innerHTML = ``;
    }, 5000);
  }
})
