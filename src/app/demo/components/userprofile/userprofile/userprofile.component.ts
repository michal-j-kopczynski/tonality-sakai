import { HttpClient, HttpClientModule, HttpEvent, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig} from '@kolkov/angular-editor';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss'],

})
export class UserprofileComponent  {


 // htmlContent:string="//0//Hello its me<br/>//5// Its me<br/>//8// darkness<br/>//9// where you belong<br/>//10// ";

  htmlContent:string="//0//Hello its me<br/>//5// Its me<br/>//8// darkness<br/>//9//Hello its me where you belong<br/>//10//and let<br/>//12//it be ";
  sekundy=0
  lines:any = "";
  //lineColors: string[] = [];

 // constructor()
  changeColor(sekundy: number)
  {
    this.htmlContent = this.htmlContent.split("<font color=\"red\">").join('');
   // console.log(this.htmlContent)
    //this.lines=this.lines.join('')
    this.htmlContent = this.htmlContent.split("</font color=\"red\">").join('');
    //console.log(this.htmlContent);
  
    //let second = "10"
    let regex = new RegExp("(//.+?//)", "gi");
  //  this.lines = this.htmlContent.split(regex).filter(Boolean);
  this.lines = this.htmlContent

   
   // console.log(this.htmlContent);
    let testowe = this.htmlContent.split('//');
    let lower = testowe.filter(item => Number(item) <= Number(sekundy) ).filter(Boolean)
    let greater = testowe.filter(item => Number(item) >= Number(sekundy) ).filter(Boolean)
   // console.log(this.lines)
    let regex2 = new RegExp("//"+lower.at(-1)+"//")
    console.log(regex2)
    let cos = this.lines.search(regex2)
  
   console.log(cos)
   //this.lines = 
   // this.lines = this.lines.splice(item => item.search(regex2),0,"<font color=\"red\">");
   this.lines= this.lines.slice(0,cos) + "<font color=\"red\">" + this.lines.slice(cos)
    //let regex3 = new RegExp("//")
   //let cos2 = this.lines.search()
   let cos2 = this.lines.indexOf("//",cos+1);
   cos2 = this.lines.indexOf("//",cos2+5);
   //cos2 = this.lines.indexOf("//",cos2+5);
   console.log(cos2)
   console.log("lower",lower)
   this.lines= this.lines.slice(0,cos2) + "</font color=\"red\">" + this.lines.slice(cos2)
   console.log(this.lines)
   this.htmlContent=this.lines
    // Iteruj po każdej linii i zmień kolor, jeśli jest to piąta linia
   /* this.lines.forEach((line, index:number) => {
      if(Number(second) == 0)
      {s
        this.lines.splice(1,0,"<font color=\"red\">")
        this.lines.splice(3,0,"</font color=\"red\">")
        
      }
      let regex2 = new RegExp('//0\\d+//',"gi");
     // let testowe = this.htmlContent.search(regex2)
     let testowe = this.htmlContent.split('//');
      let greater = testowe.filter(item => Number(item) > Number(second) )
      
      console.log(greater)
      let cos= this.lines.indexOf(greater[0])
      console.log(cos)
     if(index >0  && index == 2)
     {
      this.lines.splice(index-1,0,"<font color=\"red\">")
      this.lines.splice(index+1,0,"</font color=\"red\">")
     }

    });
   // console.log(this.lines.join(''))
    this.htmlContent=String(this.lines.join(''));
    
    
*/
  }
  
  /*changeColor(second: string)
  {
    second = "5"
    let regex = new RegExp("(//.+?//)", "gi");
    const lines = this.htmlContent.split(regex).filter(Boolean);
    console.log(lines)
    console.log(lines)
    // Iteruj po każdej linii i zmień kolor, jeśli jest to piąta linia
    lines.forEach((line, index) => {
     
      if (line.includes("//" + second + "//")) {
        this.lineColors[index] = 'red';
      } else {
        this.lineColors[index] = 'black';
      }
    });
  }*/



    editorConfig: AngularEditorConfig = {
      editable: true,
        spellcheck: true,
        height: '100%',
        minHeight: '0',
        maxHeight: 'auto',
        width: '80%',
        minWidth: '0',
        translate: 'yes',
        enableToolbar: true,
        showToolbar: true,
        placeholder: 'Enter text here...',
        defaultParagraphSeparator: '',
        defaultFontName: '',
        defaultFontSize: '',
        fonts: [
          {class: 'arial', name: 'Arial'},
          {class: 'times-new-roman', name: 'Times New Roman'},
          {class: 'calibri', name: 'Calibri'},
          {class: 'comic-sans-ms', name: 'Comic Sans MS'}
        ],
        customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ],
      uploadUrl: 'pliki',
      //upload: (file: File) => return this.getJSON()},
      uploadWithCredentials: false,
      sanitize: true,
      toolbarPosition: 'top',
      toolbarHiddenButtons: [
        ['bold', 'italic'],
        ['fontSize']
      ]
  };
  
}
