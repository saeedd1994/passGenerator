import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  password:string='';
  includeNum:boolean=false;
  includeSymbol:boolean=false;
  includeLetter:boolean=false;
  length:number=0;


  constructor(){}


  onBtnClicked()
  {
    const numbers='0123456789';
    const symbols='!@#$%^&*)(_+';
    const letters='abcdefghijklmnopqrstuvwxyz';
    let validChar='';


    if(this.includeNum)
    {
      validChar+=numbers;
    }
    if(this.includeLetter)
    {
      validChar+=letters;
    }
    if(this.includeSymbol)
    {
      validChar+=symbols;
    }
    
  
    let generatedPass='';
    for(let index=0;index<this.length;index++)
    {
      let i=Math.floor(Math.random()*validChar.length);
      generatedPass+=validChar[i];
    }



    this.password=generatedPass;


  }

  onChangeLetter()
  {
    this.includeLetter=!this.includeLetter
  }
  onChangeNum()
  {
    this.includeNum=!this.includeNum
  }
  onChangeSymbol()
  {
    this.includeSymbol=!this.includeSymbol
  }

  
}
