let myName: any = document.getElementById("name");
let desig: any = document.getElementById("desig");
let phone: any = document.getElementById("phone");
let email: any = document.getElementById("email");
let address: any = document.getElementById("address");
let pass: any = document.getElementById("pass");
let deg: any = document.getElementById("deg");
let uni: any = document.getElementById("uni");
let pass1: any = document.getElementById("pass1");
let deg1: any = document.getElementById("deg1");
let uni1: any = document.getElementById("uni1");
let pass2: any = document.getElementById("pass2");
let deg2: any = document.getElementById("deg2");
let uni2: any = document.getElementById("uni2");
let pass3: any = document.getElementById("pass3");
let deg3: any = document.getElementById("deg3");
let uni3: any = document.getElementById("uni3");
let skill: any = document.getElementById("skill");
let skill2: any = document.getElementById("skill2");
let skill3: any = document.getElementById("skill3");
let skill4: any = document.getElementById("skill4");
let skill5: any = document.getElementById("skill5");
let lang: any = document.getElementById("lang");
let lang2: any = document.getElementById("lang2");
let summary: any = document.getElementById("summary");
let styear: any = document.getElementById("styear");
let endyear: any = document.getElementById("endyear");
let company: any = document.getElementById("company");
let comlocation: any = document.getElementById("comlocation");
let jobTitle: any = document.getElementById("jobTitle");
let duties1: any = document.getElementById("duties1");
let duties2: any = document.getElementById("duties2");
let duties3: any = document.getElementById("duties3");
let duties4: any = document.getElementById("duties4");
let styear1: any = document.getElementById("styear1");
let endyear1: any = document.getElementById("endyear1");
let company1: any = document.getElementById("company1");
let comlocation1: any = document.getElementById("comlocation1");
let jobTitle1: any = document.getElementById("jobTitle1");
let duties5: any = document.getElementById("duties5");
let duties6: any = document.getElementById("duties6");
let duties7: any = document.getElementById("duties7");
let duties8: any = document.getElementById("duties8");
let course1: any = document.getElementById("course1");
let course2: any = document.getElementById("course2");
let reference: any = document.getElementById("reference");
let picture: any = document.getElementById("picture");

let submitBtn = document.getElementById("submit");
let form = document.getElementById("form");

form?.addEventListener('submit', (e)=>{
    e.preventDefault()

    localStorage.setItem('name', myName.value)
    localStorage.setItem('desig', desig.value)
    localStorage.setItem('phone', phone.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('address', address.value)
    localStorage.setItem('pass', pass.value)
    localStorage.setItem('deg', deg.value)
    localStorage.setItem('uni', uni.value)
    localStorage.setItem('pass1', pass1.value)
    localStorage.setItem('deg1', deg1.value)
    localStorage.setItem('uni1', uni1.value)
    localStorage.setItem('pass2', pass2.value)
    localStorage.setItem('deg2', deg2.value)
    localStorage.setItem('uni2', uni2.value)
    localStorage.setItem('pass3', pass3.value)
    localStorage.setItem('deg3', deg3.value)
    localStorage.setItem('uni3', uni3.value)
    localStorage.setItem('skill', skill.value)
    localStorage.setItem('skill2', skill2.value)
    localStorage.setItem('skill3', skill3.value)
    localStorage.setItem('skill4', skill4.value)
    localStorage.setItem('skill5', skill5.value)
    localStorage.setItem('lang', lang.value)
    localStorage.setItem('lang2', lang2.value)
    localStorage.setItem('summary', summary.value)
    localStorage.setItem('styear', styear.value)
    localStorage.setItem('endyear', endyear.value)
    localStorage.setItem('company', company.value)
    localStorage.setItem('comlocation', comlocation.value)
    localStorage.setItem('jobTitle', jobTitle.value)
    localStorage.setItem('duties1', duties1.value)
    localStorage.setItem('duties2', duties2.value)
    localStorage.setItem('duties3', duties3.value)
    localStorage.setItem('duties4', duties4.value)
    localStorage.setItem('styear1', styear1.value)
    localStorage.setItem('endyear1', endyear1.value)
    localStorage.setItem('company1', company1.value)
    localStorage.setItem('comlocation1', comlocation1.value)
    localStorage.setItem('jobTitle1', jobTitle1.value)
    localStorage.setItem('duties5', duties5.value)
    localStorage.setItem('duties6', duties6.value)
    localStorage.setItem('duties7', duties7.value)
    localStorage.setItem('duties8', duties8.value)
    localStorage.setItem('course', course1.value)
    localStorage.setItem('course2', course2.value)
    localStorage.setItem('reference', reference.value)


    if (picture.files && picture.files[0]){
        let reader = new FileReader()
            reader.addEventListener('load', () => {
                let textImg: any = reader.result;
                localStorage.setItem('profile_pic', textImg)
            })
            reader.readAsDataURL(picture.files[0])
    }
    
    window.location.href = "./resume/iNdex.html"

})
