import { Component, OnInit } from '@angular/core';
import { IPlats } from './list';
import { PlatserviceService } from '../services/platservice.service';
import { Router } from '@angular/router';
import { TestserviceService } from '../services/testservice.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public title= 'MENU';
  public errMsg: string | undefined;

  // product: any; 
  cartItems: any[] = []; 
  // public plats=[];

  // public plats: IPlats[] = [
  //   {
  //     id: 1,
  //     nom: 'BBH',
  //     prix: 250,
  //     restaurant: 'CHEZ MARTIN',
  //     image: 'assets/BBH.jpg'
  //   },
  //   {
  //     id: 2,
  //     nom: 'Crepes',
  //     prix: 300,
  //     restaurant: 'CLAIRE CREPES',
  //     image: 'assets/crepes.jpeg'
  //   },
  //   {
  //     id: 3,
  //     nom: 'poulet + plantains',
  //     prix: 1000,
  //     restaurant: 'CHEZ MARTIN',
  //     image: 'assets/poulet.jpg'
  //   },
  //   {
  //     id: 4,
  //     nom: 'ndolè + plantains',
  //     prix: 1000,
  //     restaurant: 'Cité la blanche',
  //     image: 'assets/ndolè.jpeg'
  //   }
  // ];
  plats : IPlats[] | undefined;
  public platfilter= 'mot'
  // public plats: IPlats[]=[];

  constructor(private platservice: PlatserviceService, private router: Router, private testservice: TestserviceService){}
 
  ngOnInit(){
    // this.platservice.getPlats().subscribe({
    //   next:plats => this.plats= plats,
    //   error: err=>this.errMsg = err
    // })
    // this.liste()
    // this.plats =  this.platservice.getPlats()
    this.testservice.getAll().snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.plats = data;
    });
  }
  addToCart() {
    this.cartItems.push(this.plats); // Ajoute le produit actuel au tableau du panier
    // Vous pouvez également appeler un service pour enregistrer les produits dans votre backend
    console.log('Produit ajouté au panier :', this.plats);
    alert('vous avez ajouté')
  }
  }
  //  liste(){
  //   this.platservice.getPlats().subscribe((response:any)=>{
  //     console.log(response)
  //     this.plats = response
  //   })
  //  }

  


// retrieveTutorials(): void {
//   this.tutorialService.getAll().snapshotChanges().pipe(
//     map(changes =>
//       changes.map(c =>
//         ({ id: c.payload.doc.id, ...c.payload.doc.data() })
//       )
//     )
//   ).subscribe(data => {
//     this.tutorials = data;
//   });
// }