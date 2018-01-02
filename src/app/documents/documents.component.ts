import { Component, OnInit } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents: Document[] = [
    {
      title: "My First Doc",
      description: "asdfjldksjflds",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com"
    },
    {
      title: "My Second Doc",
      description: "asdfjldksjflds",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com"
    },
    {
      title: "My Last Doc",
      description: "asdfjldksjflds",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
