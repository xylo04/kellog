import {Component, OnInit} from '@angular/core';
import {QsoService} from '../shared/qso.service';
import {Observable} from 'rxjs';
import {K0sQso} from "../k0s-qso";

@Component({
  selector: 'k0s-qsos',
  templateUrl: './qsos.component.html',
  styleUrls: ['./qsos.component.css']
})
export class QsosComponent implements OnInit {
  qsos$: Observable<K0sQso[]>;

  constructor(private qsoService: QsoService) {
  }

  ngOnInit(): void {
    this.qsos$ = this.qsoService.getQsos();
  }
}
