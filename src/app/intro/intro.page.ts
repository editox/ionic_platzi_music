import { Component, OnInit } from '@angular/core';
import  {Router } from '@angular/router';
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOps =  {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  slides= [
    {
      imageSrc: "/assets/image/Certimin.jpg",
      imageAlt: "Platzi Music Logo",
      title: "Escucha tu música",
      subTitle: "EN CUALQUIER LUGAR",
      description: `Los mejores albumes, las mejores canciones. Escucha y comparte en
      cualquier momento, a todas horas.`,
      icon: "play"
    }, 
    {
      imageSrc: "/assets/image/Certimin.jpg",
      imageAlt: "Platzi Music Logo",
      title: "Escucha tu música",
      subTitle: "EN CUALQUIER LUGAR",
      description: `Los mejores albumes, las mejores canciones. Escucha y comparte en
      cualquier momento, a todas horas.`,
      icon: "play"
    }, 
    {
      imageSrc: "/assets/image/Certimin.jpg",
      imageAlt: "Platzi Music Logo",
      title: "Escucha tu música",
      subTitle: "EN CUALQUIER LUGAR",
      description: `Los mejores albumes, las mejores canciones. Escucha y comparte en
      cualquier momento, a todas horas.`,
      icon: "play"
    }]

  constructor(private router: Router, private storage: Storage) { }

  finish(){
    this.storage.create();
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }


  ngOnInit() {
  }

}
