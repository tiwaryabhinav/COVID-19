let date=document.getElementById('date');
function updateclock()
{
    let time=new Date();
    let currhr=time.getHours();
    let currmin=time.getMinutes();
    let currsec=time.getSeconds();
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


function covid()
{
  url='http://covid19-india-adhikansh.herokuapp.com/states';
  fetch(url).then(function(response)
  {
    return response.text();
}).then((data)=>{
  let tablebody = document.getElementById('tablebody');
  let uistr='';
  let obj=JSON.parse(data);
  console.log(obj.state);
  obj.state.forEach((element)=>{
    if(element['name']!='Cases being reassigned to states')
    {
    uistr+=`<tr>
    <td>${element['name']}</td>
    <td>${element['total']}</td>
    <td>${element['active']}</td>
    <td>${element['cured']}</td>
    <td>${element['death']}</td>
</tr>
<br>`
    }
  });
  tablebody.innerHTML=uistr;
})
}
covid();