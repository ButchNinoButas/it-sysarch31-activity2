import Card from "./Card";
import person1 from './assets/person1.png'
import person2 from './assets/person2.png'
import person3 from './assets/person3.png'
import person4 from './assets/person4.png'
import person5 from './assets/person5.png'
import './index.css'
const students = [
    {id: 18453722, name: "Oliver Sykes", image: person1, email:"oliversykes69@gmail.com"},
    {id: 18453723, name: "Togepi", image: person2, email:"togepi69@gmail.com"},
    {id: 18453724, name: "Pichu", image: person3, email:"pichu69@gmail.com"},
    {id: 18453725, name: "Dedenne", image: person4, email:"dedenne69@gmail.com"},
    {id: 18453726, name: "Pachirisu", image: person5, email:"pachirisu69@gmail.com"},
   
  ];
export default function Student(){
        return(
            <div className="card-container">
                {students.map(student => (
                    <Card key={student.id} student={student} />
                ))}
            </div>
        );
}