let date=document.getElementById('date');
function updateclock()
{
    let time=new Date();
    let currhr=time.getHours();
    if(currhr<10)
    currhr="0"+currhr;
    let currmin=time.getMinutes();
    if(currmin<10)
    currmin="0"+currmin;
    let currsec=time.getSeconds();
    if(currsec<10)
    currsec="0"+currsec;
    date.innerHTML=currhr+":"+currmin+":"+currsec;
}

function getnews()
{
    let content=document.getElementById('main-content');
    let str='';
    url='http://newsapi.org/v2/top-headlines?country=in&apiKey=38f3b7aa55ca46c783055e85544e8bcd';
    fetch(url).then((response)=>{
        return response.text();
    }).then((data)=>
    {
        let obj=JSON.parse(data);
        obj.articles.forEach(function(element,index){  
            str+=`<div class="accordion" id="accordionExample">
            <div class="card" id="news_link_title">
              <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    <p id="news_content">${element['title']}</p>
                  </button>
                </h2>
              </div>
          
              <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#accordionExample">
                <div class="card-body" id="news_background">
                <img src="${element['urlToImage']}" class="img-thumbnail news_image" alt="IMAGE NOT AVAILABLE">
                <br>
                <br>
               <p>${element['content']}</p>
               <a href="${element['url']}" target="_blank" >Read More..</a>
                </div>
              </div>
            </div>
            </div>
            <br>`
        });
        content.innerHTML=str;
    })
}
getnews();
function covid()
{
  url='https://api.rootnet.in/covid19-in/stats/latest';
  fetch(url).then(function(response)
  {
    return response.text();
}).then((data)=>{
  let tablebody = document.getElementById('tablebody');
  let uistr='';
  let obj=JSON.parse(data);
  obj.data.regional.forEach((element)=>{
    uistr+=`<tr>
    <td>${element["loc"]}</td>
    <td>${element["totalConfirmed"]}</td>
    <td>${element["confirmedCasesIndian"]}</td>
    <td>${element["discharged"]}</td>
    <td>${element["deaths"]}</td>
</tr>`;
  });
  tablebody.innerHTML=uistr;
})
}
covid();

let signup=document.getElementById('signup');
signup.addEventListener('click',function()
{
  let signup_name=document.getElementById('signup_name');
  let signup_mail=document.getElementById('signup_mail');
  let pswrd=document.getElementById('pswrd');
  if(signup_name.value.length>0 && signup_mail.value.length>0 && pswrd.value.length>0)
  {
    let alert=document.getElementById('alertmsg');
    alert.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Great </strong>Succesfully Registered
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    setTimeout(function () {
        alert.innerHTML = ``;
    }, 5000);
  }
  else
  {
    let alert=document.getElementById('alertmsg');
    alert.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
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
