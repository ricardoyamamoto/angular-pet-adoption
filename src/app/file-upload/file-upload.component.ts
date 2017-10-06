import {Component, Directive, EventEmitter, Input, Output} from '@angular/core';

import {FileItem, FileUploader, ParsedResponseHeaders } from 'ng2-file-upload';

import {environment} from '../../environments/environment';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent {

  public uploadUrl = environment.apiUrl + 'upload';
  public uploader: FileUploader = new FileUploader({url: this.uploadUrl});

  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  @Input() images: string[];
  @Output() notify: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() {
    this.uploader.onAfterAddingFile = (file) => {
      file.alias = 'avatar';
      file.withCredentials = false;
      this.images = [];
    };
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  };

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  };

  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    const data = JSON.parse(response); // success server response
    console.log(data);
    this.images.push(data.objectId);
    this.notify.emit(this.images);
  }

  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    const error = JSON.parse(response); // error server response
  }


}
