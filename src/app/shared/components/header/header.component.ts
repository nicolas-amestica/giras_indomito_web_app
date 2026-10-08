import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styles: [`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .apple-navbar {
      background: rgba(19, 29, 23, 0.89);
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      border-bottom: 1px solid rgba(215, 255, 0, 0.2);
      height: 80px;
      width: 100%;
    }

    .navbar-container {
      max-width: 1520px;
      margin: 0 auto;
      padding: 0 32px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo-link {
      display: flex;
      align-items: center;
      transition: opacity 0.3s ease;
    }

    .logo-link:hover {
      opacity: 0.7;
    }

    .logo-image {
      height: 48px;
      width: auto;
    }

    .desktop-nav {
      display: none;
      align-items: center;
      gap: 27px;
    }

    @media (min-width: 768px) {
      .desktop-nav {
        display: flex;
      }
    }

    .nav-link {
      color: rgba(255, 255, 255, 0.85);
      font-size: 15px;
      font-weight: 400;
      text-decoration: none;
      letter-spacing: -0.01em;
      position: relative;
      transition: all 0.3s ease;
      padding: 6px 0;
    }

    .nav-link:hover {
      color: #D7FF00;
    }

    .nav-link.active {
      color: #D7FF00;
      font-weight: 500;
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -14px;
      left: 0;
      right: 0;
      height: 2px;
      background: #D7FF00;
      border-radius: 1px;
      box-shadow: 0 0 8px rgba(215, 255, 0, 0.5);
    }

    .mobile-menu-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
      margin-right: -10px;
    }

    @media (min-width: 768px) {
      .mobile-menu-button {
        display: none;
      }
    }

    .menu-icon {
      width: 24px;
      height: 24px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
    }

    .menu-icon span {
      display: block;
      height: 2px;
      background: rgba(255, 255, 255, 0.85);
      transition: all 0.3s ease;
      border-radius: 1px;
    }

    .mobile-menu-button:hover .menu-icon span {
      background: #D7FF00;
    }

    .menu-icon.open span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    .menu-icon.open span:nth-child(2) {
      opacity: 0;
    }

    .menu-icon.open span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    .mobile-menu-overlay {
      position: fixed;
      top: 80px;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
      z-index: 999;
    }

    .mobile-menu-overlay.open {
      background: rgba(0, 0, 0, 0.6);
      opacity: 1;
      pointer-events: auto;
    }

    .mobile-nav {
      background: rgba(45, 45, 45, 0.98);
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      padding: 32px 32px;
      transform: translateY(-100%);
      transition: transform 0.3s ease;
      border-bottom: 1px solid rgba(215, 255, 0, 0.2);
    }

    .mobile-menu-overlay.open .mobile-nav {
      transform: translateY(0);
    }

    .mobile-nav-link {
      display: block;
      color: rgba(255, 255, 255, 0.85);
      font-size: 20px;
      font-weight: 400;
      text-decoration: none;
      padding: 16px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.2s ease;
    }

    .mobile-nav-link:last-child {
      border-bottom: none;
    }

    .mobile-nav-link:hover {
      color: #D7FF00;
      padding-left: 8px;
    }

    .mobile-nav-link.active {
      color: #D7FF00;
      font-weight: 500;
      padding-left: 8px;
    }
    .nav-payment { background:#d7ff00;color:#172018!important;border-radius:5px;padding:12px 19px!important;font-size:13px;font-weight:800;letter-spacing:.02em;transition:transform .2s } 
    .nav-payment:hover { transform:translateY(-2px);background:#eaff52 }
    .nav-payment::after { display:none!important }
    .nav-quote{border:1px solid #70806c;border-radius:5px;padding:11px 16px!important}
    @media(max-width:900px){.desktop-nav{gap:14px}.navbar-container{padding:0 20px}.nav-link{font-size:13px}}
    @media(max-width:767px){.mobile-nav .nav-payment{display:block;margin-top:20px;text-align:center}.mobile-nav{padding:24px}.mobile-menu-overlay{height:calc(100svh - 80px)}}
  `]
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }
}
