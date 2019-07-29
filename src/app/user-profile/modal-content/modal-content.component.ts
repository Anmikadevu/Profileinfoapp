import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  
  constructor(public activeModal: NgbActiveModal) { }
  @Input() public user;
  
  ngOnInit() {
 
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  onClickSubmit() {

    this.activeModal.close(this.user);
  }
}
