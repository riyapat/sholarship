import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'aps,aps-root',
  templateUrl: './aps.component.html',
  styleUrls: ['./aps.component.css']
})
export class ApsComponent {
  title="NikhilKumarAman"
  banners1=["Pre Matric Scholarships Scheme for Minorities","Post Matric Scholarships Scheme for Minorities","Scholarship for Girl: Eligibility Criteria","Special Scholarship Scheme For North Eastern Region","Pre-matric Scholarship for Students with Disabilities","Post-matric Scholarship for Students with Disabilities","Pre-matric Scholarship for diffrent states","Post-matric Scholarship for diffrent states"]
  banners2=[{text:"National Scholarship for PG ~Last date 31/12/2023",link:"https://teachersbadi.in/nsp-national-scholarship-portal-scholarships-gov-in-to-apply-for-scholarship-schemes/"},{text:"National Scholarship for Pre matrix ~Last date 28/12/2023",link:"https://teachersbadi.in/nsp-national-scholarship-portal-scholarships-gov-in-to-apply-for-scholarship-schemes/"},{text:"National Scholarship for Post Matrix ~Last date 28/12/2023",link:"https://teachersbadi.in/nsp-national-scholarship-portal-scholarships-gov-in-to-apply-for-scholarship-schemes/"},{text:"AICTE GATE Scholarship 2023 ~Last date 14/12/2023",link:"https://leverageedu.com/blog/aicte-scholarships/"},{text:"Kotak Kanya Scholarship 2022: last date 25/12/2023",link:"https://scholarshiparena.in/kotak-kanya-scholarship/"}]  
}

