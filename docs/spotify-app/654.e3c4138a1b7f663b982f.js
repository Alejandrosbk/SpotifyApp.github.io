"use strict";(self.webpackChunkspotify_app=self.webpackChunkspotify_app||[]).push([[654],{654:(A,u,l)=>{l.r(u),l.d(u,{AuthModule:()=>b});var d=l(8583),e=l(665),o=l(639),s=l(6653),m=l(2340),h=l(1841),p=l(5657);let f=(()=>{class n{constructor(t,i){this.http=t,this.cookie=i,this.URL=m.N.api}sendCredentials(t,i){return this.http.post(`${this.URL}/auth/login`,{email:t,password:i})}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(h.eN),o.LFG(p.N))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=l(9344);function C(n,a){1&n&&(o.TgZ(0,"div",22),o.TgZ(1,"span"),o._uU(2,"No olvides llenar este campo"),o.qZA(),o.qZA())}function P(n,a){1&n&&(o.TgZ(0,"div",22),o.TgZ(1,"span"),o._uU(2,"Esto no es un Correo v\xe1lido"),o.qZA(),o.qZA())}function Z(n,a){1&n&&(o.TgZ(0,"div",22),o.TgZ(1,"span"),o._uU(2,"No olvides llenar este campo"),o.qZA(),o.qZA())}const M=[{path:"login",component:(()=>{class n{constructor(t,i,r,g){this.router=t,this.authService=i,this.toastr=r,this.cookie=g,this.errorSession=!1,this.formLogin=new e.cw({})}ngOnInit(){this.formLogin=new e.cw({email:new e.NI("",[e.kI.required,e.kI.email,e.kI.pattern(/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/)]),password:new e.NI("",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(12)])})}sendLogin(){const{email:t,password:i}=this.formLogin.value;this.authService.sendCredentials(t,i).subscribe(r=>{console.log("sesion iniciada ok",r);const{tokenSession:g}=r;this.cookie.set("token",g,4,"/"),setTimeout(()=>{this.toastr.success("Sesi\xf3n Completada","Has iniciado sesi\xf3n!")},500),this.router.navigate(["/","songs"])},r=>{console.log("error de sesion, revisa tus credenciales!"),setTimeout(()=>{this.toastr.error("Error de sesi\xf3n","Revisa tus credenciales!")},500)})}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(s.F0),o.Y36(f),o.Y36(v._W),o.Y36(p.N))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-auth-page"]],decls:35,vars:5,consts:[[1,"login-auth-page"],[1,"login-auth-wrapper"],[1,"login-social-zone"],[1,"social-btn","btn-fb"],[1,"uil","uil-facebook-f"],[1,"social-btn","btn-apple"],[1,"uil","uil-apple"],[1,"social-btn"],[1,"uil","uil-google"],[1,"separator"],[1,"login-auth-form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["formControlName","email","type","text","placeholder","alejo99sbk@gmail.com",1,"form-input"],["class","text-invalid",4,"ngIf"],["for","password"],["formControlName","password","type","password","placeholder","admin1234",1,"form-input"],[1,"form-steps"],["routerLink","/",1,"link"],[1,"form-action"],[1,"login","social-btn",3,"disabled"],[1,"no-copy"],[1,"text-invalid"]],template:function(t,i){if(1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h3"),o._uU(3,"Para continuar, primero debes iniciar sesi\xf3n"),o.qZA(),o.TgZ(4,"div",2),o.TgZ(5,"button",3),o._UZ(6,"i",4),o._uU(7," Continuar con Facebook"),o.qZA(),o.TgZ(8,"button",5),o._UZ(9,"i",6),o._uU(10," Continuar con Apple"),o.qZA(),o.TgZ(11,"button",7),o._UZ(12,"i",8),o._uU(13," Continuar con Google"),o.qZA(),o.qZA(),o._UZ(14,"div",9),o.TgZ(15,"form",10),o.NdJ("ngSubmit",function(){return i.sendLogin()}),o.TgZ(16,"div",11),o.TgZ(17,"label",12),o._uU(18,"Direcci\xf3n de correo o nombre de usuario"),o.qZA(),o._UZ(19,"input",13),o.YNc(20,C,3,0,"div",14),o.YNc(21,P,3,0,"div",14),o.qZA(),o.TgZ(22,"div",11),o.TgZ(23,"label",15),o._uU(24,"Contrase\xf1a"),o.qZA(),o._UZ(25,"input",16),o.YNc(26,Z,3,0,"div",14),o.qZA(),o.TgZ(27,"div",17),o.TgZ(28,"a",18),o._uU(29,"\xbfSe te ha olvidado la contrase\xf1a?"),o.qZA(),o.qZA(),o.TgZ(30,"div",19),o.TgZ(31,"button",20),o._uU(32,"Iniciar sesi\xf3n"),o.qZA(),o.TgZ(33,"p",21),o._uU(34,"*Esta es una aplicaci\xf3n clon de Spotify, no es ning\xfan producto oficial y solo es con fines educativos*"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t){let r,g,c;o.xp6(15),o.Q6J("formGroup",i.formLogin),o.xp6(5),o.Q6J("ngIf",(null==(r=i.formLogin.get("email"))?null:r.hasError("required"))&&(null==(r=i.formLogin.get("email"))?null:r.touched)),o.xp6(1),o.Q6J("ngIf",null==(g=i.formLogin.get("email"))?null:g.hasError("pattern")),o.xp6(5),o.Q6J("ngIf",(null==(c=i.formLogin.get("password"))?null:c.hasError("required"))&&(null==(c=i.formLogin.get("password"))?null:c.touched)),o.xp6(5),o.Q6J("disabled",i.formLogin.invalid)}},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,d.O5,s.yS],styles:[".login-auth-page[_ngcontent-%COMP%]{position:absolute;width:100vw;height:100vh;background-color:#e0e0e0;color:var(--color-3);display:flex;justify-content:center;flex-direction:column;align-items:center;align-content:center}.login-auth-page[_ngcontent-%COMP%]   .login-auth-wrapper[_ngcontent-%COMP%]{width:25%;display:flex;justify-content:center;flex-direction:column;align-items:center;border-radius:50px;background:#e0e0e0;box-shadow:20px 20px 60px #bebebe,-20px -20px 60px #fff;padding:2rem}.login-auth-page[_ngcontent-%COMP%]   .login-social-zone[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-gap:.75rem;gap:.75rem;width:100%}.login-auth-page[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]{border:0;padding:.5rem 2rem;width:100%;font-size:var(--font-size-2);border-radius:var(--border-radius-2);box-shadow:var(--shadow-1);background-color:var(--color-4);font-weight:600}.login-auth-page[_ngcontent-%COMP%]   .login-social-zone[_ngcontent-%COMP%]   .social-btn.btn-fb[_ngcontent-%COMP%]{background-color:#3a61b3;color:var(--color-4)}.login-auth-page[_ngcontent-%COMP%]   .login-social-zone[_ngcontent-%COMP%]   .social-btn.btn-apple[_ngcontent-%COMP%]{background-color:#1a1a1a;color:var(--color-4)}.login-auth-page[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{width:100%;margin:2rem 0;border-bottom:solid 1px var(--color-2);opacity:.2}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:flex-start;flex-direction:column}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-direction:column}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:solid 1px #e7e7e7;border-radius:var(--border-radius-1);height:30px;padding:.25rem .5rem;font-size:90%}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding-bottom:.35rem;font-weight:600;display:inline-block;margin:0}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-steps[_ngcontent-%COMP%]{padding:.5rem 0}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-steps[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--color-2);font-size:85%;font-weight:500;text-decoration:underline}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-steps[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:var(--color-1)}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-action[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{color:var(--color-4);margin:1rem 0;background-color:var(--color-1)}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:solid 2px var(--color-6)!important}input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:solid 2px var(--color-1)!important}.text-invalid[_ngcontent-%COMP%]{color:var(--color-6);font-weight:500}p.no-copy[_ngcontent-%COMP%]{font-size:var(--font-size-1);font-weight:500;text-align:center}"]}),n})()},{path:"**",redirectTo:"/auth/login"}];let _=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[s.Bz.forChild(M)],s.Bz]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[d.ez,_,e.UX]]}),n})()}}]);