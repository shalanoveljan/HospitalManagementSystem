class Person{
    constructor(name,surname){
        this.name=name;
        this.surname=surname;
    }
}


class Patient extends Person{
    constructor(name,surname,fin,cins,birthdate){
    super(name,surname); 
    this.fin=fin;
    this.cins=cins;
    this.birthdate=birthdate;
    }
}

class Doctor extends Person{
constructor(name,surname,specialty){
super(name,surname);
this.specialty=specialty;
this.patientlist=[];


}

 XesteAdd(patient){
this.patientlist.push(patient);
}

XesteRemove(patient){
    this.patientlist.pop(patient);
}
}
debugger

class Rezervation{
    constructor(doctor,patient,date){
       this.doctor=doctor;
       this.patient=patient;
        this.date=date;
    }

    RezervInfo(){
    console.log(`doctor:${this.doctor.name} patient:${this.patient.name} date:${this.date}`);
    }
}

class HospitalSystem{
    constructor(){
        this.doctors=[];
        this.patients=[];
        this.rezervs=[];
    }

    AddXeste(patient){
    this.patients.push(patient);
    }
    AddDoctor(doctor){
        this.doctors.push(doctor);
        }

        AddRezerv(rezervation){
            this.rezervs.push(rezervation);
        }
        
        RezervList(){
            for (let rez of this.rezervs) {
                rez.RezervInfo();
            }
        }
}
let hs= new HospitalSystem();
let doctor1=new Doctor("Nuray","Mensimova","Bas cerrah");
let doctor2=new Doctor("Elcan","Mensimov","Sobe muduri");
let doctor3=new Doctor("Natiq","Mensimo","Goz");
hs.AddDoctor(doctor1);
hs.AddDoctor(doctor2);
hs.AddDoctor(doctor3);

let Patient1=new Patient("Banana","Ezizova",13243454,"qiz",1999);
let Patient2=new Patient("Nicat","Ezizov",13243454,"oglan",1999);
let Patient3=new Patient("Samir","Bedelov",13243454,"oglan",2001);
let Patient4=new Patient("Banana","Ezizova",13243454,"qiz",1993);
let Patient5=new Patient("Hecer","Ezizova",13243454,"qiz",1995);
let Patient6=new Patient("Banana","Ezizova",13243454,"qiz",1999);
hs.AddXeste(Patient1);
hs.AddXeste(Patient2);
hs.AddXeste(Patient3);
hs.AddXeste(Patient4);
hs.AddXeste(Patient5);
hs.AddXeste(Patient6);


let rezerv1=new Rezervation(doctor1,Patient1,new Date('December 17,1995,03:24:00'));
let rezerv2=new Rezervation(doctor1,Patient2,new Date('December 17,1995,03:24:00'));
let rezerv3=new Rezervation(doctor2,Patient3,new Date('December 17,1995,03:24:00'));
let rezerv4=new Rezervation(doctor2,Patient4,new Date('December 17,1995,03:24:00'));
let rezerv5=new Rezervation(doctor3,Patient5,new Date('December 17,1995,03:24:00'));
let rezerv6=new Rezervation(doctor3,Patient6,new Date('December 17,1995,03:24:00'));

hs.AddRezerv(rezerv1);
hs.AddRezerv(rezerv2);
hs.AddRezerv(rezerv3);
hs.AddRezerv(rezerv4);
hs.AddRezerv(rezerv5);
hs.AddRezerv(rezerv6);

hs.RezervList();
doctor1.XesteAdd(Patient1);
doctor1.XesteAdd(Patient2);
doctor2.XesteAdd(Patient3);
doctor2.XesteAdd(Patient4);
doctor3.XesteAdd(Patient5);
doctor3.XesteAdd(Patient6);
doctor3.XesteRemove(Patient6);





// let arr1 = [2,4,6]
// let arr2 = [2,3,6]


// function getDiff(a,b) {
//     let diff_arr = []

//     if(a.length > 0 && b.length > 0) {
//         for(let x of a) {
//             if(!b.includes(x)) {
//                 diff_arr.push(x)
//             }
//         }
    
//         for(let x of b) {
//             if(!a.includes(x)) {
//                 diff_arr.push(x)
//             }
//         }
//     }
//     else{
//         if(a.length === 0) {
//             for(let item of b) {
//                 diff_arr.push(item)
//             }
//         }
//         else if(b.length){
//             for(let item of a) {
//                 diff_arr.push(item)
//             }
//         }
//     }

//     console.log(diff_arr);

    
// }

// getDiff(arr1,arr2)