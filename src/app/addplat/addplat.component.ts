import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IPlats } from '../list/list';
import { TestserviceService } from '../services/testservice.service';

@Component({
  selector: 'app-addplat',
  templateUrl: './addplat.component.html',
  styleUrls: ['./addplat.component.scss']
})
export class AddplatComponent implements OnInit{

  loginform:FormGroup  ;
  container: FormArray | undefined;
  // plat : IPlats = new this.plat();
  selectedFile: File | null = null;
  

  constructor(private formBuilder: FormBuilder, private testservice: TestserviceService){
    this.loginform = this.formBuilder.group({
      'nom':[null, Validators.required],
      'prix ':[null, Validators.required],
      'restaurant':[null, Validators.required],
      // 'enqueteur':[null, Validators.required],
      'container':this.formBuilder.array([])
    })
  }
  ngOnInit(): void {}

 


  save(){
    this.testservice.create(this.loginform.value).subscribe(
      ( res: any) => {

        console.log(res);
        
      },
      ( e: any) => console.error(e)
    );
  }

  // onFileSelected(event: any): void {
  //   this.selectedFile = event.target.files[0];
  // }

  // onSubmit(): void {
  //   if (this.selectedFile) {
  //     const filePath = `images/${this.selectedFile.name}`;
  //     this.firestoreService.uploadFile(filePath, this.selectedFile)
  //       .then(() => {
  //         console.log('Image téléchargée avec succès');
  //       })
  //       .catch((error) => {
  //         console.error('Erreur lors du téléchargement de l\'image', error);
  //       });
  //   }
  // }
}
