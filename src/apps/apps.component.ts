import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'apps,apps-root',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent {
  title = 'testings';
   
   name=["Ashok Kumar","Disha Shetty","Giridev Rabha","Radhe Raman","Vishwajeet Ghosh"]
   
   base=["https://d2w7l1p59qkl0r.cloudfront.net/static/images/testimonial/ashok-kumar1605011526.jpg",
   "https://d2w7l1p59qkl0r.cloudfront.net/static/images/testimonial/disha-shetty1605010583.jpg",
   "https://d2w7l1p59qkl0r.cloudfront.net/static/images/testimonial/giridev-rabha1605010185.jpg",
   "https://d2w7l1p59qkl0r.cloudfront.net/static/images/testimonial/radhe-raman1605011092.jpg",
   "https://d2w7l1p59qkl0r.cloudfront.net/static/images/testimonial/vishwajeet-ghosh1605009866.jpg"];
   a=0;
   details=["After starting my post-graduation studies, I also began providing tuitions to the neighborhood children to meet my educational expenses. But I was still unable to pay the college fee of Rs. 16,000 per annum with my humble income. While looking for ways to overcome this situation, I came across NiS. With the help of this portal, I applied for HDFC Bank Educational Crisis Scholarship Support and won a scholarship amount of Rs. 16,000! Thanks to NiS, I have been able to fund my college expenses and take control of my life","I worked hard to get admission in Manipal College of Health Professions. However, paying the colossal fee of INR 1,60,000 per year was out of the question for my family. Right then, I came to know about Nis. I visited the portal and applied for Dr BR & CR Shetty Scholarship for Academic Excellence. Sooner than I could expect, I got an approval call and won a scholarship amount of INR 60,000! Thankyou Nis!","While the educational expenses of us two siblings was always a concern for my father, it grew even more serious after the lockdown happened. Nevertheless, I kept studying and searching for a scholarship rigorously. That's when I got to know about the Nis portal and was able to apply for the Fullerton India Scholarship Programme. The application process was smooth on Nis and I even got selected! I was awarded with an amount of Rs. 10,000 with the help of which I paid my Mathematics coaching fees and bought books for self-study.","I was in need of financial assistance and mentorship to ensure quality education for myself. Through Nis, I was able to apply for the prestigious HCL My Scholar Program. This program not only gave me monetary assistance, but also helped me polish my personality and vision through continuous mentorship. The Nis Team has made this journey even more memorable for me.","Due to COVID-19, my father’s business was shut for almost 3 months. This led to financial stress in my family. I decided to find help to fund my postgraduate studies, and came across NiS. With the help of NiS, I was able to comfortably apply for the IDFC FIRST Bank Scholarship and ended up winning it! Thanks to this portal, I was able to overcome a challenging phase in my educational journey."];
   update(event=0) { 
    this.a=event;
    
   }
   
}

