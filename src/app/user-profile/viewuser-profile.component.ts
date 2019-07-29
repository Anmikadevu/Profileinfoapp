import { Component, OnInit,Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';
@Component({
  selector: 'app-viewuser-profile',
  templateUrl: './viewuser-profile.component.html',
  styleUrls: ['./viewuser-profile.component.css']
})
export class ViewUserProfileComponent implements OnInit {
  public user = {
    name: 'Kathrin Holmes',
    email: ' dev0@seibert-media.net',
    phonenumber:'0611205700'
  }
  constructor(private modalService: NgbModal) { }
  
  ngOnInit() {
  }
  openModal() {
   const modalRef= this.modalService.open(ModalContentComponent);
   
    modalRef.componentInstance.user = this.user;

   
  }
  
}
