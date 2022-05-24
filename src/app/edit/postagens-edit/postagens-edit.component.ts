import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagens } from 'src/app/model/Postagens';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagens-edit',
  templateUrl: './postagens-edit.component.html',
  styleUrls: ['./postagens-edit.component.css']
})
export class PostagensEditComponent implements OnInit {

  postagens: Postagens =new Postagens()

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == '') {
      // alert("Sessão expirada! Refaça o Login!")
      this.router.navigate(['/entrar'])
    }
  
  let id = this.route.snapshot.params['id']
  this.findByIdPostagens(id)
  this.findAllTemas()
  }

  findByIdPostagens(id: number){
    this.postagemService.getByIdPotagens(id).subscribe((resp: Postagens)=>{
      this.postagens = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  atualizar(){
    this.tema.id = this.idTema
    this.postagens.tema = this.tema

    this.postagemService.putPostagens(this.postagens).subscribe((resp: Postagens)=>{
      this.postagens = resp
      this.alertas.showAlertSuccess('Postagem atualizada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}
