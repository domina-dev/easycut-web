import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'vex-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent {

  form: FormGroup;
  dialogRef: any;

    constructor(private fb: FormBuilder, private produtoService: ProdutoService) {
      this.form = this.fb.group({
        nome: ['', Validators.required],
        tempo: ['', Validators.required],
        categoria: ['', Validators.required],
        valor: ['', Validators.required],
      });
    }

    cadastrarProduto() {
      this.produtoService.cadastrarProduto(this.form.value).subscribe(() => {
        console.log(this.form.value);
        this.dialogRef.close()
      },
        (error) => {
          console.log(error)
        })
    }

}
