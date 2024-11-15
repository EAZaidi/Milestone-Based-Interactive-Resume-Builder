let name = localStorage.getItem("name");

window.addEventListener("load", () => {

  let desig = localStorage.getItem("desig");
  let phone = localStorage.getItem("phone");
  let email = localStorage.getItem("email");
  let address = localStorage.getItem("address");
  let pass = localStorage.getItem("pass");
  let deg = localStorage.getItem("deg");
  let uni = localStorage.getItem("uni");
  let pass1 = localStorage.getItem("pass1");
  let deg1 = localStorage.getItem("deg1");
  let uni1 = localStorage.getItem("uni1");
  let pass2 = localStorage.getItem("pass2");
  let deg2 = localStorage.getItem("deg2");
  let uni2 = localStorage.getItem("uni2");
  let pass3 = localStorage.getItem("pass3");
  let deg3 = localStorage.getItem("deg3");
  let uni3 = localStorage.getItem("uni3");
  let skill = localStorage.getItem("skill");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let skill4 = localStorage.getItem("skill4");
  let skill5 = localStorage.getItem("skill5");
  let lang = localStorage.getItem("lang");
  let lang2 = localStorage.getItem("lang2");
  let summary = localStorage.getItem("summary");
  let styear = localStorage.getItem("styear");
  let endyear = localStorage.getItem("endyear");
  let company = localStorage.getItem("company");
  let comlocation = localStorage.getItem("comlocation");
  let jobTitle = localStorage.getItem("jobTitle");
  let duties1 = localStorage.getItem("duties1");
  let duties2 = localStorage.getItem("duties2");
  let duties3 = localStorage.getItem("duties3");
  let duties4 = localStorage.getItem("duties4");
  let styear1 = localStorage.getItem("styear1");
  let endyear1 = localStorage.getItem("endyear1");
  let company1 = localStorage.getItem("company1");
  let comlocation1 = localStorage.getItem("comlocation1");
  let jobTitle1 = localStorage.getItem("jobTitle1");
  let duties5 = localStorage.getItem("duties5");
  let duties6 = localStorage.getItem("duties6");
  let duties7 = localStorage.getItem("duties7");
  let duties8 = localStorage.getItem("duties8");
  let course = localStorage.getItem("course");
  let course2 = localStorage.getItem("course2");
  let reference = localStorage.getItem("reference");
  let pic = localStorage.getItem("profile_pic");


  let resName:any = document.getElementById('resName');
    resName.textContent = name;

    let resDesig:any = document.getElementById('resDesig');
    resDesig.textContent = desig;

    let resPhone:any = document.getElementById('resPhone');
    resPhone.textContent = phone;

    let resEmail:any = document.getElementById('resEmail');
    resEmail.textContent = email;

    let resAddress:any = document.getElementById('resAddress');
    resAddress.textContent = address;
    
    let resPass:any = document.getElementById('resPass');
    resPass.textContent = pass;

    let resDeg:any = document.getElementById('resDeg');
    resDeg.textContent = deg;
    
    let resUni:any = document.getElementById('resUni');
    resUni.textContent = uni;

    let resPass1:any = document.getElementById('resPass1');
    resPass1.textContent = pass1;

    let resDeg1:any = document.getElementById('resDeg1');
    resDeg1.textContent = deg1;

    let resUni1:any = document.getElementById('resUni1');
    resUni1.textContent = uni1;

    let resPass2:any = document.getElementById('resPass2');
    resPass2.textContent = pass2;

    let resDeg2:any = document.getElementById('resDeg2');
    resDeg2.textContent = deg2;

    let resUni2:any = document.getElementById('resUni2');
    resUni2.textContent = uni2;

    let resPass3:any = document.getElementById('resPass3');
    resPass3.textContent = pass3;

    let resDeg3:any = document.getElementById('resDeg3');
    resDeg3.textContent = deg3;

    let resUni3:any = document.getElementById('resUni3');
    resUni3.textContent = uni3;

    let resSkill1:any = document.getElementById('resSkill1');
    resSkill1.textContent = skill;

    let resSkill2:any = document.getElementById('resSkill2');
    resSkill2.textContent = skill2;

    let resSkill3:any = document.getElementById('resSkill3');
    resSkill3.textContent = skill3;

    let resSkill4:any = document.getElementById('resSkill4');
    resSkill4.textContent = skill4;

    let resSkill5:any = document.getElementById('resSkill5');
    resSkill5.textContent = skill5;

    let resLang1:any = document.getElementById('resLang1');
    resLang1.textContent = lang;

    let resLang2:any = document.getElementById('resLang2');
    resLang2.textContent = lang2;

    let resSummary:any = document.getElementById('resSummary');
    resSummary.textContent = summary;

    let resStYear:any = document.getElementById('resStYear');
    resStYear.textContent = styear;

    let resEndYear:any = document.getElementById('resEndYear');
    resEndYear.textContent = endyear;

    let resCompany:any = document.getElementById('resCompany');
    resCompany.textContent = company;

    let resComLocation:any = document.getElementById('resComLocation');
    resComLocation.textContent = comlocation;

    let resJobTitle:any = document.getElementById('resJobTitle');
    resJobTitle.textContent = jobTitle;

    let resDuties1:any = document.getElementById('resDuties1');
    resDuties1.textContent = duties1;

    let resDuties2:any = document.getElementById('resDuties2');
    resDuties2.textContent = duties2;

    let resDuties3:any = document.getElementById('resDuties3');
    resDuties3.textContent = duties3;

    let resDuties4:any = document.getElementById('resDuties4');
    resDuties4.textContent = duties4;
    let resStYear1:any = document.getElementById('resStYear1');
    resStYear1.textContent = styear1;

    let resEndYear1:any = document.getElementById('resEndYear1');
    resEndYear1.textContent = endyear1;

    let resCompany1:any = document.getElementById('resCompany1');
    resCompany1.textContent = company1;

    let resComLocation1:any = document.getElementById('resComLocation1');
    resComLocation1.textContent = comlocation1;

    let resJobTitle1:any = document.getElementById('resJobTitle1');
    resJobTitle1.textContent = jobTitle1;

    let resDuties5:any = document.getElementById('resDuties5');
    resDuties5.textContent = duties5;

    let resDuties6:any = document.getElementById('resDuties6');
    resDuties6.textContent = duties6;

    let resDuties7:any = document.getElementById('resDuties7');
    resDuties7.textContent = duties7;

    let resDuties8:any = document.getElementById('resDuties8');
    resDuties8.textContent = duties8;

    let resCourse1:any = document.getElementById('resCourse1');
    resCourse1.textContent = course;

    let resCourse2:any = document.getElementById('resCourse2');
    resCourse2.textContent = course2;

    let resRef:any = document.getElementById('resRef');
    resRef.textContent = reference;

    let resPic:any = document.getElementById('resPic');
    resPic.src = pic;

});

let print_btn = document.getElementById('print_btn');

print_btn?.addEventListener('click', () => {
  window.print();
});

let edit_btn = document.getElementById('edit_btn');

edit_btn?.addEventListener('click', () => {
  window.history.back()
});


let share_btn = document.getElementById('share_btn');
let anc = document.getElementById('anc');
let userName;
if (name){
  userName = name.toLowerCase().replace(/\s+/g, "-")
}
else {
  userName = "user"
}

let baseUrl = "http://127.0.0.1:5500/resume/iNdex.html"
let uniqueUrl = `${baseUrl}?/${name}`

share_btn?.addEventListener('click', () => {
  anc?.setAttribute("href", uniqueUrl)
})

let copy_btn = document.getElementById("copy_btn")

copy_btn?.addEventListener("click", () => {
  navigator.clipboard.writeText(uniqueUrl).then(() => {
    alert("URL copied!")
  })
  
});
