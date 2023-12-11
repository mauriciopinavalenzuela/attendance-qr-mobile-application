import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { AuthService } from './servicios/auth.service';
import { Router } from '@angular/router';
register();

interface Componentes {
  icon: string;
  nombre: string;
  redirectTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  getUserRole(): string | null {
    return sessionStorage.getItem('userrole');
  }

  constructor(public authService: AuthService, public router: Router) {}

  componentes: Componentes[] = [
    {
      icon: 'person-outline',
      nombre: 'Perfil',
      redirectTo: 'actualizar/:id'
    },
    {
      icon: 'timer-outline',
      nombre: 'Noticias',
      redirectTo: '/noticias'
    },
    {
      icon: 'people-outline',
      nombre: 'Sobre Nosotros',
      redirectTo: '/nosotros'
    },
    {
      icon: 'build-outline',
      nombre: 'Ajustes',
      redirectTo: '/ajustes'
    },
  ];

  get homeLink(): Componentes {
    const userRole = sessionStorage.getItem('userrole');
    const homeRoute = userRole === 'docente' ? '/homedocente' : '/homealumno';

    return { icon: 'home-outline', nombre: 'Inicio', redirectTo: homeRoute };
  }

  ngOnInit() {
    const isLoggedIn = this.authService.isLoggedIn();

    if (isLoggedIn) {
      const userRole = sessionStorage.getItem('userrole');
      const homeRoute = userRole === 'docente' ? '/homedocente' : '/homealumno';
      this.router.navigate([homeRoute]);
    }
  }
}




