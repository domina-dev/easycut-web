import { Component, OnInit } from "@angular/core";

@Component({
  selector: "vex-planos",
  templateUrl: "./planos.component.html",
  styleUrls: ["./planos.component.scss"],
})
export class PlanosComponent implements OnInit {
  openModal: boolean = false;

  ngOnInit(): void {
    this.openModal = true;
  }
}
