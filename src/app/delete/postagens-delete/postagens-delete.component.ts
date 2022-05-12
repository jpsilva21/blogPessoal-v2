import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagens } from 'src/app/model/Postagens';
import { Tema } from 'src/app/model/Tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagens-delete',
  templateUrl: './postagens-delete.component.html',
  styleUrls: ['./postagens-delete.component.css']
})
export class PostagensDeleteComponent implements OnInit {

  postagens: Postagens =new Postagens()
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService
 
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == '') {
      // alert("Sessão expirada! Refaça o Login!")
      this.router.navigate(['/entrar'])
    }
  
  this.idPost = this.route.snapshot.params['id']
  this.findByIdPostagens(this.idPost)
  }

  findByIdPostagens(id: number){
    this.postagemService.getByIdPotagens(id).subscribe((resp: Postagens)=>{
      this.postagens = resp
    })
  }

  apagar(){
    this.postagemService.deletePostagens(this.idPost).subscribe(()=>{
      alert('Postagem apagada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}
